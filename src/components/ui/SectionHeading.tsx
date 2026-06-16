import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="mb-7 flex items-center gap-3.5">
      <span className="h-px w-10 bg-df-blue" />
      <span className={cn("font-mono text-[11px] uppercase tracking-[0.2em]", dark ? "text-df-muted-d" : "text-df-muted")}>
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow, title, dark
}: { eyebrow: string; title: React.ReactNode; dark?: boolean }) {
  return (
    <Reveal>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={cn("font-arch text-3xl font-bold leading-[1.03] tracking-tight md:text-5xl", dark ? "text-df-ink" : "text-df-paper")}>
        {title}
      </h2>
    </Reveal>
  );
}
