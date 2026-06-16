import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead, isOdooConfigured } from "@/lib/odoo";

/**
 * POST /api/lead — réception des formulaires (devis + contact).
 * 1. Validation Zod  2. Anti-spam (honeypot + reCAPTCHA si configuré)
 * 3. Création du lead Odoo (ou dégradé contrôlé si non configuré)
 * AUCUN secret n'est présent ici : tout vient des variables d'environnement.
 */
const schema = z.object({
  contactName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  projectType: z.string().max(80).optional().or(z.literal("")),
  surface: z.string().max(40).optional().or(z.literal("")),
  budget: z.string().max(40).optional().or(z.literal("")),
  deadline: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(5).max(4000),
  company_website: z.string().optional() // honeypot
});

async function verifyRecaptcha(token?: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) return true; // non configuré → on n'impose pas (phase 1)
  if (!token) return false;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`
  });
  const data = await res.json();
  return Boolean(data.success);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Champs invalides", details: parsed.error.flatten() }, { status: 422 });
  }
  const data = parsed.data;

  // Honeypot : un bot remplit ce champ caché
  if (data.company_website) return NextResponse.json({ ok: true });

  const recaptchaToken = (body as Record<string, string>)?.recaptchaToken;
  if (!(await verifyRecaptcha(recaptchaToken))) {
    return NextResponse.json({ error: "Vérification anti-spam échouée" }, { status: 400 });
  }

  try {
    const leadId = await createLead({
      name: `Demande site — ${data.projectType || "Contact"} — ${data.contactName}`,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone || undefined,
      projectType: data.projectType || undefined,
      surface: data.surface || undefined,
      budget: data.budget || undefined,
      deadline: data.deadline || undefined,
      message: data.message
    });

    if (leadId === null) {
      // Odoo pas encore branché : dégradé contrôlé (le site fonctionne).
      // TODO: brancher un email transactionnel (Resend/Postmark) en secours.
      console.info("[LEAD] Odoo non configuré — lead reçu:", { ...data, company_website: undefined });
    }
    return NextResponse.json({ ok: true, odoo: isOdooConfigured() });
  } catch (err) {
    console.error("[LEAD] Erreur création:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
