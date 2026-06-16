import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";

export function ExpertisesPreview() {
  return (
    <section className="bg-df-light py-28 md:py-32">
      <Container>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading dark eyebrow="Nos expertises" title={<>Cinq métiers,<br />un seul <span className="text-df-blue">interlocuteur</span>.</>} />
          <Reveal><Link href="/expertises" className="font-mono text-xs uppercase tracking-[0.14em] text-df-ink/70 transition-colors hover:text-df-blue">Toutes les expertises →</Link></Reveal>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link href={`/expertises/${s.slug}`} className="group relative block h-72 overflow-hidden border border-df-ink/10">
                <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover brightness-[0.85] transition-transform duration-[1200ms] ease-df group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-df-ink via-df-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-df-blue-soft">0{i + 1}</span>
                  <h3 className="mt-1 font-arch text-2xl font-bold text-df-paper">{s.shortTitle}</h3>
                  <p className="mt-1 max-w-[34ch] text-sm text-df-paper/0 transition-all duration-500 group-hover:text-df-paper/80">{s.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
