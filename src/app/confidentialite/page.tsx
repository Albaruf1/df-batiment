import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Politique de confidentialité" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Politique de confidentialité"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité", href: "/confidentialite" }]} />
      <section className="py-20">
        <Container className="max-w-[72ch]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted-d">TODO — Contenu juridique à rédiger / valider avec un juriste.</p>
          <p className="mt-6 text-df-paper/75">Cette page accueillera le contenu « Politique de confidentialité » de DF Bâtiment.</p>
        </Container>
      </section>
    </>
  );
}
