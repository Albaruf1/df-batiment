"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const line = { hidden: { y: "112%" }, show: (i: number) => ({ y: 0, transition: { delay: 0.45 + i * 0.14, duration: 1.05, ease: [0.16, 1, 0.3, 1] } }) };

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[radial-gradient(120%_90%_at_78%_12%,#1f333d_0%,#182830_55%)]">
      <div className="absolute inset-0 bg-blueprint-grid mask-radial opacity-60" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g fill="none" stroke="#0078B8" strokeWidth="1" opacity="0.55">
          <rect className="draw-path" x="860" y="220" width="360" height="420" />
          <line className="draw-path soft" x1="860" y1="360" x2="1220" y2="360" stroke="#58A8D0" opacity="0.4" />
          <line className="draw-path soft" x1="1040" y1="220" x2="1040" y2="640" stroke="#58A8D0" opacity="0.4" />
          <circle className="draw-path soft" cx="1040" cy="430" r="60" stroke="#58A8D0" opacity="0.4" />
          <line className="draw-path" x1="860" y1="690" x2="1220" y2="690" />
        </g>
        <text x="980" y="680" fill="#58A8D0" fontFamily="monospace" fontSize="12" letterSpacing="2" opacity="0.6">12.40 m</text>
      </svg>

      <Container className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-7 inline-flex items-center gap-3.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-df-muted">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-df-blue" />
          Entreprise générale · Bruxelles · depuis 2009
        </motion.span>

        <h1 className="font-arch text-[clamp(46px,8.4vw,118px)] font-extrabold leading-[0.94] tracking-[-0.03em] text-df-paper">
          <span className="block overflow-hidden"><motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">Vous imaginez.</motion.span></span>
          <span className="block overflow-hidden"><motion.span custom={1} variants={line} initial="hidden" animate="show" className="block text-df-blue">Nous construisons.</motion.span></span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-8 max-w-[52ch] text-lg text-df-paper/75">
          Construction neuve et rénovation lourde, pilotées comme une plateforme : un interlocuteur unique, un suivi en temps réel, une exécution d'une précision millimétrée.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4">
          <Link href="/demande-devis" className="group inline-flex items-center gap-2.5 bg-df-blue px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white shadow-[0_8px_30px_-8px_rgba(0,120,184,.5)] transition-all duration-300 ease-df hover:-translate-y-0.5 hover:bg-df-blue-deep">
            Démarrer un projet <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link href="/realisations" className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-df-paper transition-all duration-300 ease-df hover:border-df-blue-soft hover:bg-df-blue/10">
            Explorer nos réalisations
          </Link>
        </motion.div>
      </Container>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 right-6 z-10 hidden border border-white/10 bg-df-ink/50 backdrop-blur-md md:flex md:right-9">
        {[["150+", "Projets livrés"], ["16", "Ans"], ["98%", "Délais tenus"]].map(([v, l]) => (
          <div key={l} className="border-r border-white/10 px-6 py-4 last:border-r-0">
            <div className="font-arch text-2xl font-bold leading-none">{v}</div>
            <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-df-muted">{l}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
