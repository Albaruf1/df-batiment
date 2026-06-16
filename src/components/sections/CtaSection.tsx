import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(100%_120%_at_50%_0%,#1f333d80,#182830)] py-32 md:py-40">
      <div className="absolute inset-0 bg-blueprint-grid opacity-40" />
      <Container className="relative z-10 text-center">
        <Reveal>
          <div className="mb-7 flex items-center justify-center gap-3.5">
            <span className="h-px w-10 bg-df-blue" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-df-muted">Discutons-en</span>
            <span className="h-px w-10 bg-df-blue" />
          </div>
          <h2 className="mx-auto max-w-[18ch] font-arch text-4xl font-bold leading-[1.03] tracking-tight text-df-paper md:text-6xl">
            Un projet ambitieux ?<br />Nous avons la <span className="text-df-blue">méthode</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-[50ch] text-df-muted">Construction neuve, rénovation lourde ou agrandissement — de la première esquisse à la remise des clés, avec un seul interlocuteur.</p>
          <Link href="/demande-devis" className="mt-10 inline-flex items-center gap-2.5 bg-df-blue px-9 py-5 font-mono text-sm uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-df-blue-deep">Demander un devis personnalisé →</Link>
        </Reveal>
      </Container>
    </section>
  );
}
