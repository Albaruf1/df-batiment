import type { Project } from "@/types";

/**
 * ⚠️ CONTENU FICTIF PROFESSIONNEL — À REMPLACER (todo: true)
 * Structure = modèle de fiche projet. Fournis pour chaque vrai chantier :
 * réf, titre, catégorie, lieu, année, surface, durée, contraintes, mission,
 * résultat, photos (cover + galerie), avant/après, partenaire archi, documents.
 */
const IMG = "https://df-batiment-site.vercel.app/assets/img";

export const projects: Project[] = [
  {
    slug: "villa-contemporaine-bruxelles",
    ref: "RÉF. 117",
    title: "Villa contemporaine",
    category: "construction-neuve",
    location: "Bruxelles",
    year: 2024,
    surface: "± 420 m²",
    duration: "14 mois",
    cover: `${IMG}/p-villa-modern.jpg`,
    gallery: [
      { src: `${IMG}/p-villa-modern.jpg`, alt: "Façade de la villa contemporaine" },
      { src: `${IMG}/p-interior-window.jpg`, alt: "Intérieur lumineux" },
      { src: `${IMG}/p-wood-interior.jpg`, alt: "Finitions bois sur mesure" }
    ],
    summary:
      "Construction neuve d'une villa contemporaine de plain-pied sur deux niveaux, avec de larges baies et une enveloppe performante.",
    technicalConstraints:
      "Terrain en pente nécessitant des fondations adaptées et une gestion fine des eaux de ruissellement.",
    mission:
      "Entreprise générale : gros œuvre, techniques et finitions, coordination complète des corps de métier.",
    result:
      "Bâtiment livré dans les délais, performance énergétique conforme PEB, finitions haut de gamme.",
    partner: "Architecte partenaire (TODO)",
    featured: true,
    todo: true
  },
  {
    slug: "maison-de-maitre-schaerbeek",
    ref: "RÉF. 102",
    title: "Maison de maître",
    category: "renovation-lourde",
    location: "Schaerbeek",
    year: 2023,
    surface: "± 310 m²",
    duration: "11 mois",
    cover: `${IMG}/p-facade-red.jpg`,
    gallery: [
      { src: `${IMG}/p-facade-red.jpg`, alt: "Façade rénovée" },
      { src: `${IMG}/p-interior-window.jpg`, alt: "Pièces de vie rénovées" }
    ],
    beforeAfter: [{ before: `${IMG}/p-construction-brick.jpg`, after: `${IMG}/p-facade-red.jpg` }],
    summary:
      "Rénovation lourde d'une maison de maître : stabilité, mise aux normes et restauration des éléments patrimoniaux.",
    technicalConstraints:
      "Reprise en sous-œuvre, conservation des moulures et de la cage d'escalier d'origine.",
    mission: "Rénovation complète, coordination patrimoine + techniques modernes.",
    result: "Bâtiment remis aux normes, caractère d'origine préservé.",
    partner: "Architecte partenaire (TODO)",
    featured: true,
    todo: true
  },
  {
    slug: "interieur-sur-mesure-uccle",
    ref: "RÉF. 094",
    title: "Intérieur sur mesure",
    category: "peinture-finitions",
    location: "Uccle",
    year: 2023,
    surface: "± 180 m²",
    duration: "4 mois",
    cover: `${IMG}/p-wood-interior.jpg`,
    gallery: [
      { src: `${IMG}/p-wood-interior.jpg`, alt: "Menuiserie et finitions bois" },
      { src: `${IMG}/p-interior-window.jpg`, alt: "Peinture et lumière" }
    ],
    summary: "Aménagement intérieur : menuiserie sur mesure, peinture et finitions décoratives.",
    technicalConstraints: "Ajustements millimétrés sur un bâti ancien non orthogonal.",
    mission: "Finitions & aménagement, en synergie avec DF Coatings.",
    result: "Finitions impeccables, intégration parfaite du mobilier sur mesure.",
    featured: true,
    todo: true
  },
  {
    slug: "verriere-acier-ixelles",
    ref: "RÉF. 088",
    title: "Verrière & escalier acier",
    category: "ferronnerie",
    location: "Ixelles",
    year: 2022,
    surface: "—",
    duration: "2 mois",
    cover: `${IMG}/p-welding.jpg`,
    gallery: [{ src: `${IMG}/p-welding.jpg`, alt: "Ouvrage de ferronnerie" }],
    summary: "Conception et pose d'une verrière atelier et d'un escalier acier sur mesure.",
    technicalConstraints: "Intégration dans un volume existant, tolérances serrées.",
    mission: "Ferronnerie : étude, fabrication atelier, pose.",
    result: "Ouvrage sur mesure, esthétique et structurel.",
    todo: true
  },
  {
    slug: "immeuble-logements-haren",
    ref: "RÉF. 075",
    title: "Immeuble de logements",
    category: "construction-neuve",
    location: "Haren",
    year: 2022,
    surface: "± 640 m²",
    duration: "16 mois",
    cover: `${IMG}/p-construction-brick.jpg`,
    gallery: [{ src: `${IMG}/p-construction-brick.jpg`, alt: "Chantier d'immeuble" }],
    summary: "Construction neuve d'un petit immeuble de logements.",
    technicalConstraints: "Phasage en milieu urbain dense, logistique d'approvisionnement.",
    mission: "Entreprise générale, du terrassement aux finitions.",
    result: "Livraison conforme, coordination multi-lots maîtrisée.",
    todo: true
  },
  {
    slug: "renovation-energetique-woluwe",
    ref: "RÉF. 069",
    title: "Rénovation énergétique",
    category: "renovation-lourde",
    location: "Woluwe-Saint-Lambert",
    year: 2021,
    surface: "± 240 m²",
    duration: "8 mois",
    cover: `${IMG}/p-interior-window.jpg`,
    gallery: [{ src: `${IMG}/p-interior-window.jpg`, alt: "Rénovation énergétique" }],
    summary: "Rénovation lourde à forte composante énergétique (isolation, techniques).",
    technicalConstraints: "Amélioration PEB sur un bâti occupé en partie.",
    mission: "Rénovation + mise aux normes énergétiques.",
    result: "Gain énergétique significatif, confort amélioré.",
    todo: true
  }
];
