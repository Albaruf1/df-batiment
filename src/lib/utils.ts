export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const categoryLabels: Record<string, string> = {
  "construction-neuve": "Construction neuve",
  "renovation-lourde": "Rénovation lourde",
  ferronnerie: "Ferronnerie",
  "peinture-finitions": "Peinture & finitions",
  "gestion-chantier": "Gestion de chantier"
};
