import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo officiel DF Bâtiment (extrait du fichier source vectoriel).
 * variant "dark" = pour fonds sombres (anthracite éclairci, bleu conservé).
 * TODO: produire un SVG web optimisé (recadré) à partir de df-logo-source.svg.
 */
export function Logo({ variant = "color", className }: { variant?: "color" | "dark"; className?: string }) {
  const src = variant === "dark" ? "/df-logo-ondark.png" : "/df-logo-color.png";
  return (
    <Link href="/" aria-label="DF Bâtiment — Accueil" className={cn("inline-flex items-center", className)}>
      <Image src={src} alt="DF Bâtiment" width={150} height={64} priority className="h-12 w-auto" />
    </Link>
  );
}
