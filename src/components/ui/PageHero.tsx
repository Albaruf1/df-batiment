import Link from "next/link";
import { Container } from "./Container";

/** En-tête de page mis en scène (anthracite + grille technique). */
export function PageHero({
  eyebrow, title, intro, breadcrumb
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_80%_-10%,#1f333d,#182830_60%)] pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-blueprint-grid mask-radial opacity-50" />
      <Container className="relative z-10">
        {breadcrumb && (
          <nav className="mb-7 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-df-muted">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-df-muted-d">/</span>}
                <Link href={b.href} className="hover:text-df-blue-soft">{b.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <div className="mb-6 flex items-center gap-3.5">
          <span className="h-px w-10 bg-df-blue" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-df-muted">{eyebrow}</span>
        </div>
        <h1 className="max-w-[18ch] font-arch text-[clamp(36px,6vw,76px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-df-paper">{title}</h1>
        {intro && <p className="mt-7 max-w-[58ch] text-lg text-df-paper/75">{intro}</p>}
      </Container>
    </section>
  );
}
