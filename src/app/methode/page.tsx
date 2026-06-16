import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notre méthode",
  description: "De l'appel d'offre à la livraison : la méthode DF Bâtiment en 8 étapes, pour des chantiers maîtrisés et des délais tenus.",
  path: "/methode"
});

const steps = [
  ["Réception de l'appel d'offre", "Votre architecte nous transmet le projet et le cahier des charges complet."],
  ["Première analyse", "Nous étudions le dossier, identifions les points techniques et préparons la visite."],
  ["Visite & relevé", "Sur place, nous relevons chaque détail et chaque contrainte du chantier."],
  ["Devis détaillé", "Une offre chiffrée, transparente et structurée, sous trois semaines."],
  ["Planification", "Planning détaillé, coordination des intervenants et des approvisionnements."],
  ["Exécution", "Pilotage quotidien du chantier, un interlocuteur unique, communication continue."],
  ["Contrôle qualité", "Contrôle strict de chaque finition et de chaque corps de métier."],
  ["Livraison", "Remise des clés, levée des réserves et garanties."]
];

export default function MethodePage() {
  return (
    <>
      <PageHero eyebrow="Notre méthode" title={<>La méthode qui <span className="text-df-blue">tient les délais</span>.</>}
        intro="Un process éprouvé, transparent et reproductible. Chaque étape est documentée et communiquée — c'est ainsi qu'un chantier reste maîtrisé."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Méthode", href: "/methode" }]} />
      <section className="py-20 md:py-28">
        <Container>
          <div className="relative">
            <span className="absolute left-[19px] bottom-2 top-2 w-0.5 bg-white/10" aria-hidden />
            <ol className="space-y-12">
              {steps.map(([t, d], i) => (
                <Reveal key={t} delay={i * 0.04}>
                  <li className="relative pl-16">
                    <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-df-blue bg-df-ink font-mono text-sm text-df-blue-soft">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-arch text-2xl font-bold text-df-paper">{t}</h2>
                    <p className="mt-2 max-w-[58ch] text-df-paper/75">{d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
