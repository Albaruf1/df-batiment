"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Project, ServiceCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { categoryLabels, cn } from "@/lib/utils";

const CATS: (ServiceCategory | "all")[] = ["all", "construction-neuve", "renovation-lourde", "ferronnerie", "peinture-finitions"];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<ServiceCategory | "all">("all");
  const [year, setYear] = useState<number | "all">("all");

  const years = useMemo(() => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a), [projects]);
  const filtered = projects.filter((p) => (cat === "all" || p.category === cat) && (year === "all" || p.year === year));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-6">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={cn("border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300",
              cat === c ? "border-df-blue bg-df-blue text-white" : "border-white/15 text-df-paper/70 hover:border-df-blue-soft")}>
            {c === "all" ? "Tous" : categoryLabels[c]}
          </button>
        ))}
        <span className="mx-1 h-5 w-px bg-white/10" />
        <select value={String(year)} onChange={(e) => setYear(e.target.value === "all" ? "all" : Number(e.target.value))}
          className="border border-white/15 bg-df-ink-2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-df-paper/80 focus:border-df-blue">
          <option value="all">Toutes années</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </motion.div>
      {filtered.length === 0 && <p className="mt-12 text-center font-mono text-sm text-df-muted">Aucun projet pour ce filtre.</p>}
    </div>
  );
}
