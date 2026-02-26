# Ilyas Ennahli — Portfolio

Étudiant ingénieur en Informatique, Statistique et Intelligence Artificielle (ISIA) à Polytech Lille. Issu de deux années de CPGE MP, j'apporte une formation mathématique solide à mes projets en Data Science, Data Engineering et finance quantitative. Ce repository contient le code source de mon portfolio personnel, conçu et développé entièrement sans framework ni outil de build.

---

## Objectif professionnel

Devenir **Quant Engineer** en combinant modélisation statistique, algorithmique et ingénierie logicielle pour résoudre des problèmes à haute valeur analytique — pricing, optimisation de portefeuille, pipelines de données financières.

---

## Stack technique

| Couche | Technologie | Remarque |
|---|---|---|
| Structure | HTML5 sémantique | Accessibilité, headings logiques, ARIA |
| Style | Bootstrap 5.3 (CDN) | Grille et utilitaires uniquement |
| Design system | `assets/css/theme.css` | Variables CSS, composants custom, zéro dépendance |
| Typographie | Fraunces + Inter | Google Fonts via `@import` dans le CSS |
| Icônes | FontAwesome 6 (CDN) | — |
| Script | JavaScript vanilla | Navbar scroll, IntersectionObserver, back-to-top |
| Build | Aucun | Fichiers servis directement |
| CI/CD | GitHub Actions | Déploiement automatique sur push `main` |
| Hébergement | GitHub Pages | Branche `main`, source : GitHub Actions |

---

## Philosophie du projet

Ce portfolio est intentionnellement construit sans framework JS, sans bundler et sans générateur de site statique.

Ce choix répond à trois exigences :

**Contrôle total.** Chaque ligne de CSS est écrite à la main. Le comportement du site est prévisible, auditable et modifiable sans comprendre un écosystème tiers.

**Performance par défaut.** Pas de JavaScript inutile, pas d'arbre de composants, pas de runtime. Le Time to First Byte est minimal ; le site fonctionne sans JS activé pour 95 % de son contenu.

**Pertinence de la complexité.** Un portfolio de quatre pages statiques ne justifie pas React, Vite ni Next.js. Choisir le bon outil pour le bon problème est une compétence d'ingénieur.

---

## Structure des fichiers

```
portfolio/
├── index.html                   # Accueil — Hero, À propos, Projets, Compétences, Contact
├── cv.html                      # CV interactif — bascule FR / EN
├── file.html                    # Liens — Polytech, GitHub, LinkedIn, contact
├── loisirs.html                 # Loisirs & passions
├── main.js                      # Script partagé (navbar, scroll animations, back-to-top)
│
├── assets/
│   └── css/
│       └── theme.css            # Système de design complet
│                                  ├── variables CSS (couleurs, typo, espacement)
│                                  ├── composants (project-row, skill-chip, timeline…)
│                                  └── responsive + prefers-reduced-motion
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # Workflow GitHub Actions → GitHub Pages
│
├── .nojekyll                    # Désactive le traitement Jekyll de GitHub
├── README.md                    # Ce fichier
└── style.css                    # Ancien CSS — conservé, non chargé
```

---

## Lancer en local

Aucune installation requise.

```bash
# Option recommandée — serveur HTTP local (évite les restrictions CORS sur les fonts)
python -m http.server 3000
# Ouvrir http://localhost:3000

# Alternative Node.js
npx serve .
```

Ouvrir directement `index.html` dans un navigateur fonctionne aussi, sauf pour les Google Fonts
qui nécessitent un contexte HTTP.

---

## Déploiement sur GitHub Pages

Le déploiement est entièrement automatisé via GitHub Actions. Chaque `push` sur `main` déclenche
le workflow `.github/workflows/deploy.yml`, qui empaquète les fichiers statiques et les publie
sur GitHub Pages sans étape de build.

**Configuration initiale (une seule fois) :**

```bash
# Depuis le dossier du projet
git init
git branch -M main
git add index.html cv.html file.html loisirs.html main.js assets/ .github/ .nojekyll README.md
git commit -m "feat: initial deploy"
git remote add origin https://github.com/ILYAS-ENN/portfolio.git
git push -u origin main
```

Ensuite, dans l'interface GitHub :

```
Settings → Pages → Build and deployment → Source → GitHub Actions → Save
```

Le site est disponible sur `https://ilyas-enn.github.io/portfolio/` dès que le job passe au vert.

**Mises à jour suivantes :**

```bash
git add .
git commit -m "update: ..."
git push
```

**Problèmes courants :**

| Symptôme | Cause probable | Correction |
|---|---|---|
| 404 sur toutes les pages | Source Pages incorrecte | Settings → Pages → Source → GitHub Actions |
| Page sans style | Chemin d'asset absolu | Vérifier que les `href` commencent par `assets/` sans `/` initial |
| Workflow rouge | Permissions insuffisantes | Settings → Actions → General → Read and write permissions |
| Fonts absentes | Contexte `file://` | Utiliser `python -m http.server` en local |

---

## Evolution future

Les évolutions envisagées restent dans la contrainte de simplicité du projet.

- Ajout d'une page dédiée aux projets avec descriptions détaillées et liens vers les repos
- Version PDF du CV générée côté client via `window.print()` et CSS `@media print`
- Formulaire de contact fonctionnel via un service sans backend (Formspree ou similaire)
- Internationalisation de l'ensemble du site (actuellement partielle sur `cv.html`)
- Optimisation des polices : auto-hébergement de Fraunces et Inter pour supprimer la dépendance Google Fonts

---

*Ilyas Ennahli — Polytech Lille, ISIA — 2026*
