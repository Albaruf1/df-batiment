import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { getProjects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Réalisations",
  description: "Découvrez les chantiers livrés par DF Bâtiment : construction neuve, rénovation lourde, ferronnerie et finitions à Bruxelles.",
  path: "/realisations"
});

export default async function RealisationsPage() {
  const projects = await getProjects();
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={<>Nos <span className="text-df-blue">chantiers</span>, notre preuve.</>}
        intro="Chaque projet est piloté avec la même exigence : délais tenus, finitions maîtrisées, communication transparente. Filtrez par expertise ou par année."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Réalisations", href: "/realisations" }]}
      />
      <section className="py-20"><Container><ProjectsExplorer projects={projects} /></Container></section>
    </>
  );
}
