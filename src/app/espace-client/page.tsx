import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Espace Client", description: "Suivez votre chantier en temps réel : avancement, documents, devis, factures et messages, depuis votre portail client sécurisé DF Bâtiment.", path: "/espace-client" });

// TODO Odoo : remplacer par l'URL réelle du portail white-label
const PORTAL_URL = "https://portail.df-batiment.be";

export default function EspaceClientPage() {
  return (
    <>
      <PageHero eyebrow="Espace Client" title={<>Votre chantier, <span className="text-df-blue">en temps réel</span>.</>}
        intro="Un portail sécurisé pour suivre l'avancement, consulter vos documents et échanger avec votre équipe — à tout moment."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Espace Client", href: "/espace-client" }]} />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-arch text-3xl font-bold text-df-paper">Ce que vous y trouverez</h2>
              <div className="mt-8 space-y-3.5">
                {[["↗", "Avancement du chantier & jalons en direct"], ["◫", "Devis, factures et documents centralisés"], ["⌁", "Messagerie et demandes de support"], ["⊞", "Synchronisé avec notre gestion (Odoo)"]].map(([i, l]) => (
                  <div key={l} className="flex items-center gap-3.5 border-t border-white/10 pt-3.5 text-df-paper"><span className="grid h-7 w-7 flex-none place-items-center border border-df-blue font-mono text-xs text-df-blue">{i}</span>{l}</div>
                ))}
              </div>
              <a href={PORTAL_URL} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2.5 bg-df-blue px-8 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Accéder au portail →</a>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted-d">TODO — portail Odoo white-label à brancher (phase 2)</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-white/15 bg-df-ink-2/70 p-8 backdrop-blur">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Déjà client ?</h3>
                <p className="mt-4 text-df-paper/75">Vos identifiants vous sont communiqués au démarrage du chantier. La connexion se fait sur le portail sécurisé Odoo — DF Bâtiment ne stocke jamais vos mots de passe sur ce site.</p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted">Pas encore de projet ?</p>
                  <a href="/demande-devis" className="mt-2 inline-block font-arch text-lg font-bold text-df-blue-soft hover:text-df-paper">Démarrer une demande de devis →</a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
