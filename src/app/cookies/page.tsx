import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Cookies" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Cookies"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Cookies", href: "/cookies" }]} />
      <section className="py-20">
        <Container className="max-w-[72ch]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted-d">TODO — Contenu juridique à rédiger / valider avec un juriste.</p>
          <p className="mt-6 text-df-paper/75">Cette page accueillera le contenu « Cookies » de DF Bâtiment.</p>
        </Container>
      </section>
    </>
  );
}
