export const company = {
  foundedYear: 2009,
  vat: "BE 0824.286.796",
  address: {
    street: "Rue du Bassin collecteur 5",
    zip: "1130",
    city: "Haren",
    country: "Belgique"
  },
  phone: "+32 (0)2 850 70 33",
  phoneHref: "tel:+3228507033",
  email: "info@df-batiment.be",

  // TODO: valider les chiffres réels (remplacent les "0" du site actuel)
  stats: [
    { value: 150, suffix: "+", label: "Projets réalisés", todo: true },
    { value: 16, suffix: "", label: "Années d'expérience" },
    { value: 60, suffix: "+", label: "Partenaires qualifiés", todo: true },
    { value: 98, suffix: "%", label: "Délais tenus", todo: true }
  ],

  vision:
    "Devenir la référence de la construction maîtrisée en Belgique : des chantiers pilotés comme un produit, transparents et tenus, de la première esquisse à la remise des clés.",

  values: [
    { title: "Interlocuteur unique", text: "Un seul responsable, du premier relevé à la livraison." },
    { title: "Planning tenu", text: "Des délais communiqués, suivis étape par étape, respectés." },
    { title: "Qualité contrôlée", text: "Un contrôle strict sur chaque finition et chaque corps de métier." },
    { title: "Coordination fluide", text: "Tous les intervenants orchestrés, zéro friction sur le terrain." }
  ],

  ecosystem: [
    { name: "DF Bâtiment", role: "Construction & rénovation", href: "/" },
    { name: "DF Coatings", role: "Revêtements & distribution Kansai Helios", href: "#", todo: true },
    { name: "DF Ferronnerie", role: "Métallerie & structures", href: "/expertises/ferronnerie" },
    { name: "DF Group", role: "Holding & synergies", href: "#", todo: true }
  ],

  // TODO: remplacer par l'équipe réelle (photos + bios)
  team: [
    { name: "Direction", role: "Pilotage & stratégie", todo: true },
    { name: "Gestionnaires de projet", role: "Coordination chantier", todo: true },
    { name: "Équipe terrain", role: "Exécution & finitions", todo: true }
  ],

  // TODO: remplacer par de vrais témoignages (avec autorisation RGPD)
  testimonials: [
    { quote: "Du devis à la remise des clés, tout a été tenu : délais, budget, qualité. On savait toujours où en était le chantier.", author: "Laurent V.", context: "Maison de maître · Schaerbeek", todo: true },
    { quote: "Une équipe à l'écoute et un vrai sens du détail. Finitions impeccables, je recommande pour un projet d'envergure.", author: "Sophie M.", context: "Rénovation lourde · Uccle", todo: true },
    { quote: "Un partenaire d'exécution fiable, qui respecte les plans et communique avec rigueur.", author: "Cabinet Auxau", context: "Architecte partenaire", todo: true }
  ]
} as const;
