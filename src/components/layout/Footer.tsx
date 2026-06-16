import Link from "next/link";
import { footerNav, legalNav } from "@/content/navigation";
import { company } from "@/content/company";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-df-ink-2 pb-10 pt-[72px] text-df-paper">
      <Container>
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <span className="font-arch text-2xl font-extrabold">DF<span className="text-df-blue">.</span>Bâtiment</span>
            <p className="mt-4 max-w-[34ch] text-sm text-df-paper/70">
              Depuis {company.foundedYear}, on construit la confiance autant que les murs.
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-df-muted-d">{company.vat}</p>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-df-muted">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-df-paper/70 transition-colors hover:text-df-blue-soft">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-5">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted-d hover:text-df-paper">{l.label}</Link>
            ))}
          </div>
          <div className="flex gap-5">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted-d hover:text-df-paper">Instagram</a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted-d hover:text-df-paper">LinkedIn</a>
          </div>
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-df-muted-d">© {new Date().getFullYear()} {site.legalName} — Tous droits réservés</p>
      </Container>
    </footer>
  );
}
