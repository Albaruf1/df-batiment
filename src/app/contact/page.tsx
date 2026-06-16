import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Contact", description: "Contactez DF Bâtiment à Bruxelles : téléphone, email, adresse. Parlons de votre projet de construction ou de rénovation.", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Parlons de <span className="text-df-blue">votre projet</span>.</>}
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="space-y-8">
                {[["Adresse", `${company.address.street}, ${company.address.zip} ${company.address.city}, ${company.address.country}`], ["Téléphone", company.phone], ["Email", company.email], ["TVA", company.vat]].map(([l, v]) => (
                  <div key={l} className="border-t border-white/10 pt-4"><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted">{l}</div><div className="mt-1.5 text-lg text-df-paper">{v}</div></div>
                ))}
                <div className="relative h-48 overflow-hidden border border-white/10 bg-df-ink-2">
                  <div className="absolute inset-0 bg-blueprint-grid opacity-40" />
                  <div className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-[0.16em] text-df-muted">TODO — Carte Google Maps</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}><ContactForm /></Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
