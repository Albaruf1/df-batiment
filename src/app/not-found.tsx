import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-[radial-gradient(120%_120%_at_80%_-10%,#1f333d,#182830_60%)]">
      <div className="absolute inset-0 bg-blueprint-grid mask-radial opacity-40" />
      <Container className="relative z-10 text-center">
        <div className="font-arch text-[clamp(80px,18vw,200px)] font-extrabold leading-none text-df-blue">404</div>
        <p className="mt-4 text-lg text-df-paper/80">Cette page n'existe pas (ou a été déplacée).</p>
        <Link href="/" className="mt-8 inline-flex bg-df-blue px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white transition-all hover:bg-df-blue-deep">Retour à l'accueil →</Link>
      </Container>
    </section>
  );
}
