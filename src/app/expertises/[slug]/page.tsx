import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getService, getServices, getProjectsByCategory } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug as never);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/expertises/${s.slug}`, image: s.image });
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug as never);
  if (!service) notFound();
  const related = await getProjectsByCategory(service.slug);

  return (
    <>
      <PageHero eyebrow={service.shortTitle} title={service.title} intro={service.intro}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Expertises", href: "/expertises" }, { label: service.shortTitle, href: `/expertises/${service.slug}` }]} />

      {/* Visuel + arguments */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal><div className="relative h-[420px] overflow-hidden border border-white/10"><Image src={service.image} alt={service.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-blueprint-grid opacity-20" /></div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Pourquoi DF Bâtiment</h2>
              <ul className="mt-6 space-y-4">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-4 border-t border-white/10 pt-4 text-df-paper/85"><span className="font-mono text-df-blue">↗</span>{h}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Prestations */}
      <section className="bg-df-ink-2 py-20 md:py-24">
        <Container>
          <Reveal><h2 className="font-arch text-3xl font-bold text-df-paper md:text-4xl">Nos prestations</h2></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => (
              <Reveal key={d} delay={i * 0.05} className="bg-df-ink p-7">
                <span className="font-mono text-xs text-df-blue">0{i + 1}</span>
                <p className="mt-3 font-arch text-lg font-bold text-df-paper">{d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Projets liés */}
      {related.length > 0 && (
        <section className="py-20 md:py-24">
          <Container>
            <Reveal><h2 className="font-arch text-3xl font-bold text-df-paper md:text-4xl">Réalisations en {service.shortTitle.toLowerCase()}</h2></Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</div>
          </Container>
        </section>
      )}

      <section className="border-t border-white/10 bg-df-ink-2 py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-arch text-2xl font-bold text-df-paper">Un projet de {service.shortTitle.toLowerCase()} ?</p>
          <Link href="/demande-devis" className="bg-df-blue px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Demander un devis →</Link>
        </Container>
      </section>
    </>
  );
}
