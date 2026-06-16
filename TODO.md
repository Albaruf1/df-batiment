# DF Bâtiment — TODO & Ce que tu dois fournir

## 1. Contenus à remplacer (marqués `todo: true` dans le code)
- [ ] **content/company.ts** — vrais chiffres (stats), vraie équipe (noms, rôles, photos), vrais témoignages (avec autorisation RGPD), vision/valeurs si à ajuster.
- [ ] **content/projects.ts** — remplacer les 6 projets de démo par tes vrais chantiers (voir « Modèle de fiche projet » ci-dessous).
- [ ] **content/services.ts** — affiner les arguments commerciaux de chaque expertise.
- [ ] **content/posts.ts** — rédiger les vrais articles (SEO).
- [ ] **content/jobs.ts** — vraies offres d'emploi.
- [ ] Pages légales (mentions, confidentialité, cookies) — contenu juridique.

## 2. Modèle de fiche projet (à fournir par chantier)
ref · titre · catégorie · lieu · année · surface · durée · contraintes techniques ·
mission DF · résultat · partenaire (architecte) · photos (cover + galerie HD) ·
avant/après (si dispo) · documents/plans (optionnel, anonymisés).

## 3. Médias à fournir
- [ ] **Photos pro de 8–12 chantiers livrés** (cover + galerie, HD, paysage + portrait).
- [ ] Avant/après des rénovations.
- [ ] (Option) Vidéo drone 2–3 chantiers phares → hero + fiches.
- [ ] Favicon : monogramme DF dédié (je peux le générer depuis le SVG source).

## 4. Accès à préparer pour brancher Odoo (NE PAS coller ici ni dans le code)
À déposer dans **Vercel → Environment Variables** (voir `.env.example`) :
- [ ] `ODOO_URL` (ex. https://df.odoo.com) et `ODOO_DB`
- [ ] **Utilisateur API Odoo dédié** (least-privilege : création `crm.lead`) + sa **clé API**
- [ ] Module **CRM** activé ; (option) source/étape CRM « Web » → `ODOO_CRM_SOURCE_ID`
- [ ] Clés **reCAPTCHA** (`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET`)
- [ ] (Secours leads) compte email transactionnel (Resend/Postmark) + domaine vérifié

## 5. Accès à préparer (phases suivantes)
- [ ] **GitHub** : repo pour héberger ce code.
- [ ] **Vercel** : projet relié au repo + variables d'environnement.
- [ ] **DNS** : sous-domaine `portail.df-batiment.be` (portail Odoo white-label).
- [ ] **GA4** + **Search Console** : ID de mesure + validation de propriété.
- [ ] (CMS phase 2) **Sanity** : projet + dataset + token de lecture.

## 6. Vérifs avant mise en ligne
- [ ] Remplacer `NEXT_PUBLIC_SITE_URL` par le domaine final.
- [ ] Vérifier le logo sur fond clair/sombre (assets fournis dans /public).
- [ ] Relire le SEO (titres/descriptions) par page.
- [ ] Brancher la carte Google Maps sur /contact (placeholder actuel).
