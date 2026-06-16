"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="relative overflow-hidden border-r border-white/10 px-6 py-12 last:border-r-0">
      <span className="absolute left-0 top-0 h-0.5 w-12 bg-df-blue" />
      <div className="font-arch text-5xl font-bold leading-none tracking-tight md:text-6xl">{n}{suffix}</div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted">{label}</div>
    </div>
  );
}
