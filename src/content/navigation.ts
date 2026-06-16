export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

/** Barre minimale persistante */
export const primaryNav: NavLink[] = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Expertises", href: "/expertises" },
  { label: "Méthode", href: "/methode" },
  { label: "À propos", href: "/a-propos" },
  { label: "Actualités", href: "/actualites" },
  { label: "Recrutement", href: "/recrutement" }
];

/** Menu overlay immersif — regroupé par intention */
export const overlayNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Preuve & expertise",
    links: [
      { label: "Réalisations", href: "/realisations", description: "Nos chantiers livrés" },
      { label: "Construction neuve", href: "/expertises/construction-neuve" },
      { label: "Rénovation lourde", href: "/expertises/renovation-lourde" },
      { label: "Ferronnerie", href: "/expertises/ferronnerie" },
      { label: "Peinture & finitions", href: "/expertises/peinture-finitions" },
      { label: "Gestion de chantier", href: "/expertises/gestion-chantier" }
    ]
  },
  {
    title: "Le groupe",
    links: [
      { label: "À propos", href: "/a-propos", description: "Histoire, vision, équipe" },
      { label: "Notre méthode", href: "/methode" },
      { label: "Actualités", href: "/actualites" },
      { label: "Recrutement", href: "/recrutement" }
    ]
  },
  {
    title: "Démarrer",
    links: [
      { label: "Demander un devis", href: "/demande-devis", description: "Formulaire intelligent" },
      { label: "Contact", href: "/contact" },
      { label: "Espace Client", href: "/espace-client", description: "Suivez votre chantier" }
    ]
  }
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Expertises",
    links: [
      { label: "Construction neuve", href: "/expertises/construction-neuve" },
      { label: "Rénovation lourde", href: "/expertises/renovation-lourde" },
      { label: "Ferronnerie", href: "/expertises/ferronnerie" },
      { label: "Peinture & finitions", href: "/expertises/peinture-finitions" },
      { label: "Gestion de chantier", href: "/expertises/gestion-chantier" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { label: "Réalisations", href: "/realisations" },
      { label: "Méthode", href: "/methode" },
      { label: "À propos", href: "/a-propos" },
      { label: "Recrutement", href: "/recrutement" },
      { label: "Actualités", href: "/actualites" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "Demander un devis", href: "/demande-devis" },
      { label: "Nous contacter", href: "/contact" },
      { label: "Espace Client", href: "/espace-client" }
    ]
  }
];

export const legalNav: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" }
];
