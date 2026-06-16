/**
 * Client Odoo — JSON-RPC. SERVER-ONLY (jamais importé côté client).
 * Aucune clé n'est en dur : tout vient des variables d'environnement.
 * Si Odoo n'est pas configuré, les fonctions le signalent proprement
 * (le site continue de fonctionner — dégradé contrôlé).
 */
import "server-only";

interface OdooConfig {
  url: string;
  db: string;
  user: string;
  apiKey: string;
}

function getConfig(): OdooConfig | null {
  const url = process.env.ODOO_URL;
  const db = process.env.ODOO_DB;
  const user = process.env.ODOO_API_USER;
  const apiKey = process.env.ODOO_API_KEY;
  if (!url || !db || !user || !apiKey) return null;
  return { url, db, user, apiKey };
}

export function isOdooConfigured(): boolean {
  return getConfig() !== null;
}

async function jsonRpc<T>(url: string, method: string, params: unknown): Promise<T> {
  const res = await fetch(`${url}/jsonrpc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params, id: Date.now() }),
    cache: "no-store"
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error?.data?.message ?? "Odoo RPC error");
  return data.result as T;
}

async function authenticate(cfg: OdooConfig): Promise<number> {
  const uid = await jsonRpc<number>(cfg.url, "call", {
    service: "common",
    method: "login",
    args: [cfg.db, cfg.user, cfg.apiKey]
  });
  if (!uid) throw new Error("Authentification Odoo échouée");
  return uid;
}

export interface LeadPayload {
  name: string;
  contactName: string;
  email: string;
  phone?: string;
  projectType?: string;
  surface?: string;
  budget?: string;
  deadline?: string;
  message: string;
}

/**
 * Crée un lead crm.lead dans Odoo.
 * Retourne l'id du lead, ou null si Odoo n'est pas configuré.
 */
export async function createLead(payload: LeadPayload): Promise<number | null> {
  const cfg = getConfig();
  if (!cfg) return null; // dégradé contrôlé : voir route /api/lead

  const uid = await authenticate(cfg);
  const description = [
    payload.message,
    payload.projectType && `Type de projet : ${payload.projectType}`,
    payload.surface && `Surface : ${payload.surface}`,
    payload.budget && `Budget : ${payload.budget}`,
    payload.deadline && `Échéance : ${payload.deadline}`
  ]
    .filter(Boolean)
    .join("\n");

  const values: Record<string, unknown> = {
    name: payload.name,
    contact_name: payload.contactName,
    email_from: payload.email,
    phone: payload.phone ?? false,
    description,
    type: "lead"
  };
  if (process.env.ODOO_CRM_SOURCE_ID) {
    values.source_id = Number(process.env.ODOO_CRM_SOURCE_ID);
  }

  const id = await jsonRpc<number>(cfg.url, "call", {
    service: "object",
    method: "execute_kw",
    args: [cfg.db, uid, cfg.apiKey, "crm.lead", "create", [values]]
  });
  return id;
}
