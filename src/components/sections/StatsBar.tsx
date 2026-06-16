import { Container } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { company } from "@/content/company";

export function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-df-ink-2">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {company.stats.map((s) => <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />)}
        </div>
      </Container>
    </section>
  );
}
