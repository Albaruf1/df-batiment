import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PortalPreview() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#182830_0%,#1f333d_100%)] py-28 md:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Espace Client · Plateforme" title={<>Votre chantier,<br />en <span className="text-df-blue">temps réel</span>.</>} />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[42ch] text-df-paper/75">Suivez l'avancement, consultez vos devis, factures et documents, validez les étapes et échangez avec votre équipe — depuis un portail sécurisé.</p>
              <div className="mt-7 space-y-3.5">
                {[["↗", "Avancement & jalons en direct"], ["◫", "Devis, factures & documents centralisés"], ["⌁", "Messagerie & demandes de support"], ["⊞", "Connecté à votre gestion (Odoo)"]].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-3.5 text-df-paper"><span className="grid h-7 w-7 flex-none place-items-center border border-df-blue font-mono text-xs text-df-blue">{icon}</span>{label}</div>
                ))}
              </div>
              <Link href="/espace-client" className="mt-8 inline-flex items-center gap-2.5 bg-df-blue px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-df-blue-deep">Découvrir l'Espace Client →</Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="border border-white/20 bg-df-ink-2/70 shadow-[0_40px_90px_-40px_rgba(0,0,0,.8)] backdrop-blur md:[transform:perspective(1600px)_rotateY(-8deg)_rotateX(3deg)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-2.5 font-mono text-[11px] tracking-[0.1em] text-df-muted">RÉF. 117 — VILLA CONTEMPORAINE</span>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted">Avancement global</span><span className="font-arch text-base font-bold text-df-blue-soft">68%</span></div>
                <div className="mb-6 h-2 overflow-hidden rounded-full bg-df-ink-2"><div className="h-full rounded-full bg-gradient-to-r from-df-blue to-df-blue-soft" style={{ width: "68%" }} /></div>
                <div className="mb-6 flex">
                  {[["Gros œuvre", true], ["Toiture", true], ["Technique", true], ["Finitions", false], ["Livraison", false]].map(([l, done], i, arr) => (
                    <div key={String(l)} className="relative flex-1 text-center">
                      {i < arr.length - 1 && <span className="absolute left-1/2 right-[-50%] top-1.5 h-px bg-white/10" />}
                      <span className={`relative z-10 mx-auto mb-2.5 block h-3 w-3 rounded-full border-2 ${done ? "border-df-blue bg-df-blue shadow-[0_0_10px_rgba(0,120,184,.5)]" : "border-white/20 bg-df-ink-2"}`} />
                      <span className={`font-mono text-[8.5px] uppercase tracking-wide ${done ? "text-df-paper" : "text-df-muted"}`}>{l}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  {[["Devis_117_v3.pdf", "Validé"], ["PV_chantier_S24.pdf", "Nouveau"], ["Facture_117_04.pdf", "En attente"]].map(([f, st]) => (
                    <div key={f} className="flex items-center justify-between py-2.5 text-sm"><span className="flex items-center gap-2.5 text-df-paper"><span className="h-5 w-4 flex-none border border-df-blue-soft" />{f}</span><span className="font-mono text-[9px] uppercase tracking-[0.12em] text-df-blue-soft">{st}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
