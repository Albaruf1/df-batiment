export const site = {
  name: "DF Bâtiment",
  legalName: "DF Entreprise Générale du Bâtiment SA",
  tagline: "Vous imaginez, nous construisons.",
  baseline: "Entreprise générale du bâtiment — Bruxelles, depuis 2009.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.df-batiment.be",
  locale: "fr-BE",
  // TODO i18n: ["fr", "nl", "en"]
  description:
    "Entreprise générale du bâtiment à Bruxelles : construction neuve et rénovation lourde. Gestion rigoureuse, qualité maîtrisée, un seul interlocuteur, depuis 2009.",
  colors: { blue: "#0078B8", ink: "#182830" },
  social: {
    instagram: "https://www.instagram.com/dfbatiment/",
    facebook: "https://www.facebook.com/DFRENOV",
    linkedin:
      "https://www.linkedin.com/company/df-entreprise-générale-du-bâtiment-s-a/"
  }
} as const;
