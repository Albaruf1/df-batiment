import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, getProjects } from "@/lib/content";
import { categoryLabels } from "@/lib/utils";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getProjects()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await getProject(params.slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.summary, path: `/realisations/${p.slug}`, image: p.cover });
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-t border-white/10 py-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted">{label}</div>
      <div className="mt-1 font-arch text-lg font-bold text-df-paper">{value}</div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      {/* HERO visuel plein écran */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image src={project.cover} alt={project.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-df-ink via-df-ink/40 to-df-ink/30" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-12">
          <nav className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-df-paper/70">
            <Link href="/realisations" className="hover:text-df-blue-soft">Réalisations</Link><span>/</span><span>{categoryLabels[project.category]}</span>
          </nav>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-df-blue-soft">{project.ref}</span>
          <h1 className="mt-2 max-w-[20ch] font-arch text-[clamp(36px,6vw,72px)] font-extrabold leading-[0.98] tracking-tight text-df-paper">{project.title}</h1>
        </Container>
      </section>

      {/* Specs + récit */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Spec label="Type de travaux" value={categoryLabels[project.category]} />
              <Spec label="Lieu" value={project.location} />
              <Spec label="Année" value={String(project.year)} />
              <Spec label="Surface" value={project.surface} />
              <Spec label="Durée" value={project.duration} />
              <Spec label="Partenaire" value={project.partner} />
              {project.todo && <p className="mt-6 border border-df-blue/30 bg-df-blue/10 p-3 font-mono text-[10px] uppercase tracking-wide text-df-blue-soft">TODO — données de démonstration à remplacer</p>}
            </aside>

            <div className="space-y-12">
              <Reveal><p className="text-xl leading-relaxed text-df-paper/85">{project.summary}</p></Reveal>
              {project.technicalConstraints && <Reveal><div><h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Contraintes techniques</h2><p className="text-df-paper/75">{project.technicalConstraints}</p></div></Reveal>}
              {project.mission && <Reveal><div><h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Mission DF Bâtiment</h2><p className="text-df-paper/75">{project.mission}</p></div></Reveal>}
              {project.result && <Reveal><div><h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Résultat</h2><p className="text-df-paper/75">{project.result}</p></div></Reveal>}

              {project.beforeAfter?.map((ba, i) => (
                <Reveal key={i}>
                  <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Avant / Après</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative h-64"><Image src={ba.before} alt="Avant" fill className="object-cover" /><span className="absolute left-3 top-3 bg-df-ink/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-df-paper">Avant</span></div>
                    <div className="relative h-64"><Image src={ba.after} alt="Après" fill className="object-cover" /><span className="absolute left-3 top-3 bg-df-blue px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-white">Après</span></div>
                  </div>
                </Reveal>
              ))}

              {project.gallery.length > 0 && (
                <Reveal>
                  <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Galerie</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.gallery.map((g, i) => <div key={i} className="relative h-64 overflow-hidden"><Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-700 hover:scale-105" /></div>)}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-df-ink-2 py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <p className="font-arch text-2xl font-bold text-df-paper">Un projet similaire ?</p>
          <Link href="/demande-devis" className="bg-df-blue px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Demander un devis →</Link>
        </Container>
      </section>
    </>
  );
}
