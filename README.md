# DF Bâtiment — Plateforme digitale

Site multi-pages **Next.js (App Router) + TypeScript + Tailwind + Framer Motion**.
Identité officielle DF Bâtiment intégrée (logo source + bleu `#0078B8` / anthracite `#182830`).
Architecture **prête pour CMS (Sanity)** et **prête pour Odoo** (CRM + portail client).

## Lancer le projet

```bash
npm install          # installer les dépendances
npm run dev          # http://localhost:3000  (développement)
npm run build        # build de production
npm start            # servir le build
```

> Node.js 18.17+ requis. Le build télécharge les polices Google via `next/font`
> (nécessite un accès internet — fonctionne nativement sur Vercel).

## Déploiement (Vercel)

1. Pousser ce dossier sur un repo GitHub.
2. Importer le repo sur Vercel (framework détecté : Next.js).
3. Ajouter les variables d'environnement (voir `.env.example`) dans
   **Vercel → Settings → Environment Variables**. *Aucun secret n'est dans le code.*
4. Déployer.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx, globals.css, page.tsx, not-found.tsx
│  ├─ robots.ts, sitemap.ts
│  ├─ realisations/ (+ [slug])      ← hub filtrable + fiche projet
│  ├─ expertises/   (+ [slug])      ← hub + 5 pages services SEO
│  ├─ actualites/   (+ [slug])      ← blog
│  ├─ methode/ a-propos/ recrutement/ contact/
│  ├─ demande-devis/ espace-client/
│  ├─ mentions-legales/ confidentialite/ cookies/
│  └─ api/lead/route.ts             ← réception formulaires → Odoo CRM
├─ components/
│  ├─ layout/   Header, Footer, Logo, OverlayMenu (nav minimale + overlay immersif)
│  ├─ ui/       Container, Button, Reveal, SectionHeading, Stat, PageHero
│  ├─ sections/ Hero, StatsBar, ExpertisesPreview, ProjectsPreview, MethodePreview,
│  │            PortalPreview (dashboard), Testimonials, CtaSection
│  ├─ projects/ ProjectCard (tilt), ProjectsExplorer (filtres)
│  └─ forms/    DevisForm, ContactForm
├─ content/     site.ts, company.ts, navigation.ts, services.ts, projects.ts, posts.ts, jobs.ts
├─ lib/         content.ts (couche d'accès CMS-ready), odoo.ts (JSON-RPC server-only), seo.ts, utils.ts
└─ types/       index.ts
public/         df-logo-color.png, df-logo-ondark.png, df-logo-source.svg
```

## Migration CMS (Sanity) — plus tard

Tout le contenu passe par `lib/content.ts`. Pour brancher Sanity, on réécrit
**uniquement** les fonctions de ce fichier (requêtes GROQ) — les pages ne changent pas.

## Intégration Odoo

- `lib/odoo.ts` : client JSON-RPC **server-only**, lit les variables d'environnement.
- `app/api/lead/route.ts` : validation **Zod** + honeypot + reCAPTCHA → `crm.lead`.
- **Dégradé contrôlé** : si Odoo n'est pas configuré, le formulaire fonctionne
  et le lead est journalisé (à brancher sur un email transactionnel en secours).

Voir la section TODO ci-dessous pour les accès exacts.
