import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DevisForm } from "@/components/forms/DevisForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Demande de devis", description: "Demandez un devis détaillé à DF Bâtiment. Construction neuve, rénovation lourde, ferronnerie : un chiffrage transparent sous 3 semaines.", path: "/demande-devis" });

const steps = [["01", "Vous décrivez"], ["02", "Nous analysons & visitons"], ["03", "Offre sous 3 semaines"]];

export default function DevisPage() {
  return (
    <>
      <PageHero eyebrow="Demande de devis" title={<>Un projet ? <span className="text-df-blue">Un chiffrage clair</span>.</>}
        intro="Décrivez votre projet en quelques champs. Plus les informations sont précises, plus notre première estimation le sera. Réponse rapide et sans engagement."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Demande de devis", href: "/demande-devis" }]} />
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Comment ça marche</h2>
              <ol className="mt-6 space-y-5">
                {steps.map(([n, t]) => (
                  <li key={n} className="flex gap-4 border-t border-white/10 pt-4"><span className="font-mono text-df-blue">{n}</span><span className="text-df-paper/85">{t}</span></li>
                ))}
              </ol>
              <p className="mt-8 border border-df-blue/30 bg-df-blue/5 p-4 text-sm text-df-paper/70">Vos données ne servent qu'au traitement de votre demande. <span className="text-df-muted-d">(Connexion Odoo CRM à activer — voir TODO.)</span></p>
            </Reveal>
            <Reveal delay={0.1}><DevisForm /></Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
