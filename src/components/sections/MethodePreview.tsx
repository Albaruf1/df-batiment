import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  ["01", "Appel d'offre", "Réception du projet et du cahier des charges."],
  ["02", "Analyse & visite", "Étude du dossier puis relevé technique sur place."],
  ["03", "Offre sous 3 sem.", "Une offre détaillée, chiffrée et transparente."],
  ["04", "Exécution & livraison", "Pilotage, contrôle qualité, remise des clés."]
];

export function MethodePreview() {
  return (
    <section className="bg-df-ink-2 py-28 md:py-32">
      <Container>
        <SectionHeading eyebrow="Notre méthode" title={<>Une méthode qui <span className="text-df-blue">tient les délais</span>.</>} />
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.08} className="bg-df-ink p-7">
              <div className="font-mono text-xs tracking-[0.12em] text-df-blue">ÉTAPE {n}</div>
              <h3 className="mt-3 font-arch text-lg font-bold text-df-paper">{t}</h3>
              <p className="mt-2 text-sm text-df-muted">{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-10">
          <Link href="/methode" className="font-mono text-xs uppercase tracking-[0.14em] text-df-blue-soft hover:text-df-paper">Découvrir la méthode complète →</Link>
        </Reveal>
      </Container>
    </section>
  );
}
