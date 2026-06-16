import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Mentions légales"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Mentions légales", href: "/mentions-legales" }]} />
      <section className="py-20">
        <Container className="max-w-[72ch]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted-d">TODO — Contenu juridique à rédiger / valider avec un juriste.</p>
          <p className="mt-6 text-df-paper/75">Cette page accueillera le contenu « Mentions légales » de DF Bâtiment.</p>
        </Container>
      </section>
    </>
  );
}
