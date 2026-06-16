"use client";
import { useState } from "react";

const fieldCls = "w-full border border-white/15 bg-df-ink-2 px-4 py-3 text-df-paper placeholder:text-df-muted-d focus:border-df-blue focus:outline-none transition-colors";
const labelCls = "mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(fd.entries()), projectType: "Contact" };
    try {
      const res = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch { setStatus("error"); }
  }
  if (status === "ok") return <div className="border border-df-blue/40 bg-df-blue/10 p-8"><p className="font-arch text-lg font-bold text-df-paper">Message envoyé. Merci !</p></div>;
  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div><label className={labelCls}>Nom *</label><input name="contactName" required className={fieldCls} /></div>
        <div><label className={labelCls}>Email *</label><input name="email" type="email" required className={fieldCls} /></div>
      </div>
      <div><label className={labelCls}>Téléphone</label><input name="phone" className={fieldCls} /></div>
      <div><label className={labelCls}>Message *</label><textarea name="message" required rows={5} className={fieldCls} /></div>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex items-center gap-4">
        <button type="submit" disabled={status === "sending"} className="bg-df-blue px-8 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-df-blue-deep disabled:opacity-60">{status === "sending" ? "Envoi…" : "Envoyer →"}</button>
        {status === "error" && <span className="font-mono text-xs text-red-400">Erreur — réessayez.</span>}
      </div>
    </form>
  );
}
