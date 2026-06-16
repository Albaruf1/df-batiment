import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Stat } from "@/components/ui/Stat";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "À propos",
  description: "DF Bâtiment : entreprise générale du bâtiment à Bruxelles depuis 2009. Notre vision, nos valeurs, notre équipe et l'écosystème DF.",
  path: "/a-propos"
});

export default function AProposPage() {
  return (
    <>
      <PageHero eyebrow="À propos" title={<>Un groupe qui <span className="text-df-blue">construit la confiance</span>.</>}
        intro={`Depuis ${company.foundedYear}, DF Bâtiment pilote des chantiers de construction neuve et de rénovation lourde à Bruxelles et en Belgique.`}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "À propos", href: "/a-propos" }]} />

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal><div><h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-df-blue">Notre vision</h2><p className="mt-5 text-xl leading-relaxed text-df-paper/85">{company.vision}</p></div></Reveal>
            <Reveal delay={0.1}><div className="grid grid-cols-2 border border-white/10">{company.stats.map((s) => <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />)}</div></Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-df-ink-2 py-20 md:py-24">
        <Container>
          <Reveal><h2 className="font-arch text-3xl font-bold text-df-paper md:text-4xl">Nos valeurs</h2></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05} className="bg-df-ink p-7">
                <span className="font-mono text-xs text-df-blue">0{i + 1}</span>
                <h3 className="mt-3 font-arch text-lg font-bold text-df-paper">{v.title}</h3>
                <p className="mt-2 text-sm text-df-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal><h2 className="font-arch text-3xl font-bold text-df-paper md:text-4xl">L'écosystème DF</h2></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.ecosystem.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.05}>
                <div className="h-full border border-white/10 bg-df-card p-7">
                  <h3 className="font-arch text-xl font-bold text-df-paper">{e.name}{("todo" in e && e.todo) ? <span className="ml-2 align-middle font-mono text-[8px] uppercase tracking-wide text-df-blue-soft">à venir</span> : null}</h3>
                  <p className="mt-2 text-sm text-df-muted">{e.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted-d">TODO — Équipe : remplacer par les vraies photos, noms et bios.</p>
            <Link href="/recrutement" className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.14em] text-df-blue-soft hover:text-df-paper">Rejoindre l'équipe →</Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
