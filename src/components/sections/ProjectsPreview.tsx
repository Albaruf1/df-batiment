import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/content";

export async function ProjectsPreview() {
  const projects = await getFeaturedProjects(3);
  return (
    <section className="py-28 md:py-32">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Réalisations sélectionnées" title={<>Le travail parle.<br />Les <span className="text-df-blue">chiffres</span> aussi.</>} />
          <Reveal><Link href="/realisations" className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-df-paper transition-all duration-300 hover:border-df-blue-soft hover:bg-df-blue/10">Toutes les réalisations →</Link></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </Container>
    </section>
  );
}
