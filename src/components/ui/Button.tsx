import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghost-dark";
const styles: Record<Variant, string> = {
  primary:
    "bg-df-blue text-white hover:bg-df-blue-deep shadow-[0_8px_30px_-8px_rgba(0,120,184,.5)] hover:-translate-y-0.5",
  ghost: "border border-white/20 text-df-paper hover:border-df-blue-soft hover:bg-df-blue/10",
  "ghost-dark": "border border-df-ink/15 text-df-ink hover:border-df-blue hover:bg-df-blue/5"
};

export function Button({
  href, variant = "primary", className, children
}: { href: string; variant?: Variant; className?: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn(
      "group inline-flex items-center gap-2.5 px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-300 ease-df",
      styles[variant], className)}>
      {children}
    </Link>
  );
}
