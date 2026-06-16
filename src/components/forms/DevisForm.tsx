"use client";
import { useState } from "react";

const fieldCls = "w-full border border-white/15 bg-df-ink-2 px-4 py-3 text-df-paper placeholder:text-df-muted-d focus:border-df-blue focus:outline-none transition-colors";
const labelCls = "mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted";

export function DevisForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-df-blue/40 bg-df-blue/10 p-8 text-center">
        <p className="font-arch text-xl font-bold text-df-paper">Demande envoyée.</p>
        <p className="mt-2 text-df-paper/70">Notre équipe revient vers vous rapidement. Merci de votre confiance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div><label className={labelCls}>Nom complet *</label><input name="contactName" required className={fieldCls} placeholder="Votre nom" /></div>
        <div><label className={labelCls}>Email *</label><input name="email" type="email" required className={fieldCls} placeholder="vous@email.be" /></div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div><label className={labelCls}>Téléphone</label><input name="phone" className={fieldCls} placeholder="+32 ..." /></div>
        <div><label className={labelCls}>Type de projet *</label>
          <select name="projectType" required className={fieldCls}>
            <option value="">Sélectionner…</option>
            <option>Construction neuve</option><option>Rénovation lourde</option>
            <option>Ferronnerie</option><option>Peinture & finitions</option><option>Gestion de chantier</option>
          </select>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        <div><label className={labelCls}>Surface estimée</label><input name="surface" className={fieldCls} placeholder="ex. 200 m²" /></div>
        <div><label className={labelCls}>Budget indicatif</label><input name="budget" className={fieldCls} placeholder="ex. 300 000 €" /></div>
        <div><label className={labelCls}>Échéance souhaitée</label><input name="deadline" className={fieldCls} placeholder="ex. 2026" /></div>
      </div>
      <div><label className={labelCls}>Décrivez votre projet *</label><textarea name="message" required rows={5} className={fieldCls} placeholder="Localisation, nature des travaux, contraintes…" /></div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 bg-df-blue px-8 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-df-blue-deep disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Envoyer ma demande →"}
        </button>
        {status === "error" && <span className="font-mono text-xs text-red-400">Une erreur est survenue. Réessayez ou écrivez-nous directement.</span>}
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted-d">Réponse sous 48h ouvrées</span>
      </div>
    </form>
  );
}
