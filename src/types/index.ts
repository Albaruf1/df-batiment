export type ServiceCategory =
  | "construction-neuve"
  | "renovation-lourde"
  | "ferronnerie"
  | "peinture-finitions"
  | "gestion-chantier";

export interface Service {
  slug: ServiceCategory;
  title: string;
  shortTitle: string;
  tagline: string;
  intro: string;
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** Arguments commerciaux */
  highlights: string[];
  /** Prestations détaillées */
  deliverables: string[];
  image: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  ref: string;
  title: string;
  category: ServiceCategory;
  location: string;
  year: number;
  surface?: string;
  duration?: string;
  /** Galerie */
  cover: string;
  gallery: ProjectImage[];
  beforeAfter?: { before: string; after: string }[];
  /** Récit */
  summary: string;
  technicalConstraints?: string;
  mission?: string;
  result?: string;
  documents?: { label: string; href: string }[];
  partner?: string;
  featured?: boolean;
  /** Marqueur contenu fictif à remplacer */
  todo?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  body: string;
  todo?: boolean;
}

export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  missions: string[];
  profile: string[];
  todo?: boolean;
}
