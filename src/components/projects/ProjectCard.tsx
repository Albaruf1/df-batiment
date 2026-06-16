"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { categoryLabels } from "@/lib/utils";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        ref={ref} href={`/realisations/${project.slug}`} onMouseMove={onMove} onMouseLeave={reset}
        className="group block overflow-hidden border border-white/10 bg-df-card transition-[border-color,box-shadow] duration-500 will-change-transform hover:border-df-blue/50 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.7),0_0_30px_-10px_rgba(0,120,184,.4)]"
      >
        <div className="relative h-[230px] overflow-hidden">
          <Image src={project.cover} alt={project.title} fill sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover brightness-[0.82] grayscale-[0.4] transition-all duration-[1200ms] ease-df group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-df-card/90 via-transparent to-transparent" />
          <span className="absolute left-3.5 top-3.5 z-10 border border-white/10 bg-df-ink/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-df-paper backdrop-blur">{project.ref}</span>
        </div>
        <div className="p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-blue-soft">{categoryLabels[project.category]}</span>
          <h3 className="mt-2 font-arch text-xl font-bold tracking-tight text-df-paper">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-df-paper/70">
            <span>{project.location}</span><span>{project.year}</span>{project.surface && <span>{project.surface}</span>}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-df-blue-soft transition-all duration-300 group-hover:gap-3.5">
            Voir le projet →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
