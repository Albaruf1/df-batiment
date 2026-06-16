import type { Job } from "@/types";

/** ⚠️ Offres fictives — à remplacer par les vraies (todo: true). */
export const jobs: Job[] = [
  {
    slug: "chef-de-chantier",
    title: "Chef de chantier",
    type: "Temps plein",
    location: "Bruxelles",
    summary: "Piloter l'exécution de chantiers de construction et rénovation, coordonner les équipes et sous-traitants.",
    missions: [
      "Organiser et superviser le chantier au quotidien",
      "Coordonner les corps de métier et sous-traitants",
      "Assurer le suivi qualité, sécurité et planning"
    ],
    profile: [
      "Expérience confirmée en conduite de chantier",
      "Rigueur, leadership, sens de l'organisation",
      "FR (NL un atout)"
    ],
    todo: true
  },
  {
    slug: "ouvrier-polyvalent",
    title: "Ouvrier polyvalent bâtiment",
    type: "Temps plein",
    location: "Bruxelles",
    summary: "Participer à l'exécution des travaux de gros œuvre et finitions.",
    missions: ["Travaux de gros œuvre et finitions", "Respect des consignes de sécurité"],
    profile: ["Expérience en bâtiment", "Polyvalence et fiabilité"],
    todo: true
  }
];
