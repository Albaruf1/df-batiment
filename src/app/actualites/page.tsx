import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Actualités", description: "Actualités, conseils et expertise DF Bâtiment : rénovation, construction, réglementation et tendances du bâtiment à Bruxelles.", path: "/actualites" });

export default async function ActualitesPage() {
  const posts = await getPosts();
  return (
    <>
      <PageHero eyebrow="Actualités" title={<>Notre <span className="text-df-blue">expertise</span>, partagée.</>}
        intro="Conseils, décryptages réglementaires et coulisses de chantier."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Actualités", href: "/actualites" }]} />
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link href={`/actualites/${p.slug}`} className="group block h-full overflow-hidden border border-white/10 bg-df-card transition-colors hover:border-df-blue/50">
                  <div className="relative h-48 overflow-hidden"><Image src={p.cover} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover brightness-[0.85] transition-transform duration-[1200ms] ease-df group-hover:scale-105" /></div>
                  <div className="p-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-blue-soft">{p.category} · {new Date(p.date).toLocaleDateString("fr-BE", { month: "short", year: "numeric" })}{p.todo ? " · TODO" : ""}</span>
                    <h2 className="mt-2 font-arch text-lg font-bold leading-snug text-df-paper">{p.title}</h2>
                    <p className="mt-2 text-sm text-df-muted">{p.excerpt}</p>
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
