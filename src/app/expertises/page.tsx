import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Expertises",
  description: "Construction neuve, rénovation lourde, ferronnerie, peinture & finitions, gestion de chantier — toutes les expertises de DF Bâtiment.",
  path: "/expertises"
});

export default async function ExpertisesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero eyebrow="Nos expertises" title={<>Cinq métiers, <span className="text-df-blue">une exécution</span>.</>}
        intro="Entreprise générale : nous couvrons l'ensemble de la chaîne, du gros œuvre aux finitions, avec un seul interlocuteur responsable du résultat."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Expertises", href: "/expertises" }]} />
      <section className="py-20">
        <Container>
          <div className="space-y-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link href={`/expertises/${s.slug}`} className="group grid items-stretch gap-0 overflow-hidden border border-white/10 bg-df-card transition-colors hover:border-df-blue/50 md:grid-cols-[1fr_1.4fr]">
                  <div className="relative h-56 md:h-auto">
                    <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover brightness-[0.8] transition-transform duration-[1200ms] ease-df group-hover:scale-105" />
                    <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue-soft">0{i + 1}</span>
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="font-arch text-2xl font-bold text-df-paper md:text-3xl">{s.title}</h2>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-df-blue-soft">{s.tagline}</p>
                    <p className="mt-4 max-w-[52ch] text-df-paper/75">{s.intro}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-df-blue-soft transition-all group-hover:gap-3.5">Découvrir →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
