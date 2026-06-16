"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { OverlayMenu } from "./OverlayMenu";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[110] h-0.5 bg-df-blue shadow-[0_0_12px_rgba(0,120,184,.6)]" style={{ width: `${progress}%` }} />
      <header className={cn(
        "fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-df",
        scrolled ? "border-b border-white/10 bg-df-ink/80 backdrop-blur-md" : "bg-transparent"
      )}>
        <div className="mx-auto flex h-[78px] max-w-content items-center justify-between px-6 md:px-9">
          <Logo variant="dark" />
          <nav className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href}
                className="group relative py-1 text-sm text-df-paper/80 transition-colors hover:text-df-paper">
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px w-0 bg-df-blue transition-all duration-300 ease-df group-hover:w-full" />
              </Link>
            ))}
            <Link href="/demande-devis" className="border border-white/20 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-df-paper transition-all duration-300 ease-df hover:border-df-blue hover:bg-df-blue hover:text-white">
              Devis
            </Link>
            <button onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu" className="flex flex-col gap-[5px] py-2">
              <span className="h-0.5 w-6 bg-df-paper" /><span className="h-0.5 w-6 bg-df-paper" /><span className="h-0.5 w-4 bg-df-blue" />
            </button>
          </nav>
          <button onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu" className="flex flex-col gap-[5px] py-2 lg:hidden">
            <span className="h-0.5 w-6 bg-df-paper" /><span className="h-0.5 w-6 bg-df-paper" /><span className="h-0.5 w-4 bg-df-blue" />
          </button>
        </div>
      </header>
      <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
