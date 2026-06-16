import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/content/company";

export function Testimonials() {
  return (
    <section className="bg-df-light py-28 md:py-32">
      <Container>
        <SectionHeading dark eyebrow="Témoignages" title={<>La confiance ne se promet pas.<br />Elle se <span className="text-df-blue">prouve</span>.</>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {company.testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col border border-df-ink/10 bg-white p-7">
                <span className="font-arch text-4xl leading-none text-df-blue">&ldquo;</span>
                <blockquote className="mt-3 flex-1 text-df-ink/80">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-df-ink/10 pt-4">
                  <span className="block font-arch font-bold text-df-ink">{t.author}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-df-muted-d">{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
