import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getJobs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Recrutement",
  description: "Rejoignez DF Bâtiment : ouvriers, chefs de chantier, partenaires et sous-traitants. Des chantiers ambitieux à Bruxelles.",
  path: "/recrutement"
});

export default async function RecrutementPage() {
  const jobs = await getJobs();
  return (
    <>
      <PageHero eyebrow="Rejoignez-nous" title={<>Aucun projet trop ambitieux.<br /><span className="text-df-blue">Aucun talent</span> de trop.</>}
        intro="Chaque chantier est un défi, chaque détail compte, chaque membre de l'équipe a un rôle essentiel. Nous recherchons des collaborateurs rigoureux, passionnés et engagés."
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Recrutement", href: "/recrutement" }]} />

      <section className="py-20 md:py-24">
        <Container>
          <Reveal><h2 className="font-arch text-3xl font-bold text-df-paper md:text-4xl">Postes ouverts</h2></Reveal>
          <div className="mt-10 space-y-5">
            {jobs.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.06}>
                <div className="border border-white/10 bg-df-card p-7 md:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-arch text-2xl font-bold text-df-paper">{j.title}</h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-df-blue-soft">{j.type} · {j.location}{j.todo ? " · TODO" : ""}</p>
                    </div>
                    <Link href="/contact" className="bg-df-blue px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Postuler →</Link>
                  </div>
                  <p className="mt-4 max-w-[60ch] text-df-paper/75">{j.summary}</p>
                  <div className="mt-6 grid gap-8 md:grid-cols-2">
                    <div><h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-df-blue">Missions</h4><ul className="mt-3 space-y-2 text-sm text-df-paper/75">{j.missions.map((m) => <li key={m} className="flex gap-2.5"><span className="text-df-blue">·</span>{m}</li>)}</ul></div>
                    <div><h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-df-blue">Profil</h4><ul className="mt-3 space-y-2 text-sm text-df-paper/75">{j.profile.map((p) => <li key={p} className="flex gap-2.5"><span className="text-df-blue">·</span>{p}</li>)}</ul></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 border border-white/10 bg-df-ink-2 p-8 text-center">
            <p className="font-arch text-xl font-bold text-df-paper">Sous-traitant ou partenaire ?</p>
            <p className="mt-2 text-df-paper/70">Nous développons en continu notre réseau d'intervenants qualifiés.</p>
            <Link href="/contact" className="mt-5 inline-block bg-df-blue px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Nous contacter →</Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
