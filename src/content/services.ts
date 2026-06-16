import type { Service } from "@/types";

/**
 * Pages services — optimisées SEO + crédibilité commerciale.
 * TODO: affiner les textes avec les vrais arguments DF + vraies photos.
 */
export const services: Service[] = [
  {
    slug: "construction-neuve",
    title: "Construction neuve",
    shortTitle: "Construction neuve",
    tagline: "Du terrain nu au bâtiment livré.",
    intro:
      "DF Bâtiment réalise des constructions neuves résidentielles et tertiaires à Bruxelles et en Belgique. Gros œuvre, hors d'eau / hors d'air, techniques et finitions — un seul interlocuteur du premier coup de pioche à la remise des clés.",
    metaTitle: "Construction neuve à Bruxelles | DF Bâtiment",
    metaDescription:
      "Entreprise générale de construction neuve à Bruxelles : villas, immeubles, projets tertiaires. Gestion complète, délais tenus, qualité maîtrisée.",
    highlights: [
      "Entreprise générale : un seul contrat, un seul responsable",
      "Coordination de tous les corps de métier",
      "Respect des normes PEB et de la réglementation bruxelloise",
      "Planning communiqué et tenu"
    ],
    deliverables: [
      "Terrassement & fondations",
      "Gros œuvre fermé",
      "Toiture & étanchéité",
      "Techniques spéciales (HVAC, électricité, sanitaire)",
      "Finitions intérieures & extérieures"
    ],
    image: "https://df-batiment-site.vercel.app/assets/img/p-construction-brick.jpg"
  },
  {
    slug: "renovation-lourde",
    title: "Rénovation lourde",
    shortTitle: "Rénovation lourde",
    tagline: "Transformer l'existant, sans compromis.",
    intro:
      "Spécialiste de la rénovation lourde de maisons de maître et de bâtiments anciens à Bruxelles. Stabilité, reprise en sous-œuvre, mise aux normes et finitions haut de gamme, dans le respect du patrimoine.",
    metaTitle: "Rénovation lourde à Bruxelles | DF Bâtiment",
    metaDescription:
      "Rénovation lourde de maisons de maître et bâtiments anciens à Bruxelles : stabilité, sous-œuvre, mise aux normes, finitions premium.",
    highlights: [
      "Expertise des bâtiments anciens et maisons de maître",
      "Reprises en sous-œuvre & stabilité",
      "Mise aux normes (énergie, sécurité, techniques)",
      "Respect du patrimoine et des contraintes urbanistiques"
    ],
    deliverables: [
      "Démolition sélective",
      "Renforcement structurel & sous-œuvre",
      "Réfection toiture & façades",
      "Remise aux normes techniques",
      "Finitions sur mesure"
    ],
    image: "https://df-batiment-site.vercel.app/assets/img/p-facade-red.jpg"
  },
  {
    slug: "ferronnerie",
    title: "Ferronnerie",
    shortTitle: "Ferronnerie",
    tagline: "L'acier, à la précision du millimètre.",
    intro:
      "Atelier de ferronnerie et métallerie : escaliers, garde-corps, structures, verrières et ouvrages sur mesure. Conception, fabrication et pose, en cohérence avec l'ensemble du chantier.",
    metaTitle: "Ferronnerie & métallerie sur mesure | DF Bâtiment",
    metaDescription:
      "Ferronnerie et métallerie sur mesure à Bruxelles : escaliers, garde-corps, verrières, structures acier. Conception, fabrication et pose.",
    highlights: [
      "Ouvrages sur mesure dessinés et fabriqués en atelier",
      "Structures porteuses & ouvrages décoratifs",
      "Cohérence avec l'ensemble du chantier",
      "Finitions soignées"
    ],
    deliverables: [
      "Escaliers & garde-corps",
      "Verrières & châssis acier",
      "Structures & poutrelles",
      "Portails & clôtures",
      "Pièces décoratives sur mesure"
    ],
    image: "https://df-batiment-site.vercel.app/assets/img/p-welding.jpg"
  },
  {
    slug: "peinture-finitions",
    title: "Peinture & finitions",
    shortTitle: "Peinture & finitions",
    tagline: "La dernière couche fait toute la différence.",
    intro:
      "Préparation des supports, peinture, enduits et finitions décoratives. Un travail de finition irréprochable qui valorise l'ensemble du chantier — en synergie avec DF Coatings.",
    metaTitle: "Peinture & finitions de chantier | DF Bâtiment",
    metaDescription:
      "Peinture, enduits et finitions décoratives à Bruxelles. Préparation des supports et finitions premium, en synergie avec DF Coatings.",
    highlights: [
      "Préparation rigoureuse des supports",
      "Produits techniques (synergie DF Coatings)",
      "Finitions décoratives & spéciales",
      "Chantiers propres et livrés dans les temps"
    ],
    deliverables: [
      "Préparation & rebouchage",
      "Peinture intérieure & extérieure",
      "Enduits décoratifs",
      "Traitements & revêtements techniques",
      "Protection & nettoyage de fin de chantier"
    ],
    image: "https://df-batiment-site.vercel.app/assets/img/p-interior-window.jpg"
  },
  {
    slug: "gestion-chantier",
    title: "Gestion de chantier",
    shortTitle: "Gestion de chantier",
    tagline: "La méthode qui tient les délais.",
    intro:
      "Coordination complète de chantier : planning, pilotage des intervenants, suivi qualité et reporting. Pour les architectes et maîtres d'ouvrage qui veulent un chantier maîtrisé et transparent.",
    metaTitle: "Gestion & coordination de chantier | DF Bâtiment",
    metaDescription:
      "Gestion et coordination de chantier à Bruxelles : planning, pilotage des intervenants, suivi qualité, reporting transparent.",
    highlights: [
      "Interlocuteur unique pour le maître d'ouvrage",
      "Planning détaillé et suivi en temps réel",
      "Coordination des corps de métier et sous-traitants",
      "Reporting & suivi qualité (bientôt via l'Espace Client)"
    ],
    deliverables: [
      "Étude & planning",
      "Pilotage des intervenants",
      "Suivi budgétaire & supplements",
      "Contrôle qualité",
      "Reporting & PV de chantier"
    ],
    image: "https://df-batiment-site.vercel.app/assets/img/p-team-plans.jpg"
  }
];
