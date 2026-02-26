# ILYAS ENNAHLI — Portfolio

Site portfolio personnel. Design **Dark Editorial + Blueprint Accent**, construit avec Bootstrap 5 et CSS custom (aucun framework JS, aucun build tool).

**URL live :** `https://<TON_USERNAME>.github.io/<TON_REPO>/`

---

## Stack technique

| Élément | Technologie |
|---|---|
| Structure | HTML5 sémantique |
| Style | Bootstrap 5.3 (CDN) + `assets/css/theme.css` |
| Icônes | FontAwesome 6 (CDN) |
| Typo | Fraunces + Inter (Google Fonts, chargé via CSS) |
| Script | `main.js` vanilla — navbar, scroll animations, back-to-top |
| Build | **Aucun** — site 100 % statique |
| Déploiement | GitHub Actions → GitHub Pages |

---

## Lancer en local

```bash
# Option 1 — ouvrir directement (pas de serveur)
# Double-cliquer sur index.html dans l'explorateur

# Option 2 — serveur local Python (recommandé pour éviter les CORS sur fonts)
cd chemin/vers/cv
python -m http.server 3000
# Ouvrir http://localhost:3000

# Option 3 — serveur local Node (si installé)
npx serve .
# Ouvrir http://localhost:3000
```

Aucune installation de dépendances, aucun `npm install` nécessaire.

---

## Déployer sur GitHub Pages

### Étape 1 — Créer le repo sur GitHub

1. Aller sur [github.com/new](https://github.com/new)
2. Nom du repo : `portfolio` (ou ce que vous voulez)
3. Visibilité : **Public** (requis pour Pages gratuit)
4. **Ne pas** initialiser avec README (on va pousser le nôtre)
5. Cliquer **Create repository**

### Étape 2 — Pousser le code

```bash
cd c:\Users\ennah\Downloads\cv\cv

# Initialiser git (si ce n'est pas déjà fait)
git init
git branch -M main

# Ajouter les fichiers (on exclut style.css si on veut être propre)
git add index.html cv.html file.html loisirs.html main.js
git add assets/
git add .github/
git add .nojekyll
git add README.md

# Premier commit
git commit -m "feat: Dark Editorial portfolio — initial deploy"

# Lier le repo distant (remplacer les placeholders)
git remote add origin https://github.com/ILYAS-ENN/portfolio.git

# Pousser
git push -u origin main
```

### Étape 3 — Activer GitHub Pages (une seule fois)

1. Aller dans le repo → **Settings** → **Pages** (menu de gauche)
2. Sous **"Build and deployment"**, changer la **Source** de `Deploy from a branch` à **`GitHub Actions`**
3. Cliquer **Save**

> ⚠️ Ce réglage est indispensable. Sans lui, le workflow s'exécute mais ne déploie rien.

### Étape 4 — Vérifier le déploiement

1. Aller dans l'onglet **Actions** du repo
2. Voir le workflow `Deploy to GitHub Pages` passer au vert ✅
3. Cliquer sur le job pour voir l'URL finale affichée en bas

Le site sera disponible sur :
```
https://ILYAS-ENN.github.io/portfolio/
```

### Déploiements suivants — automatique

Chaque `git push` sur `main` déclenche automatiquement le workflow.

```bash
# Modifier un fichier, puis :
git add .
git commit -m "update: ..."
git push
# → GitHub Actions redéploie en ~30 secondes
```

---

## Structure des fichiers

```
cv/
├── index.html              # Page d'accueil (Hero, À propos, Projets, Compétences, Contact)
├── cv.html                 # CV interactif FR/EN (Formation, Projets, Compétences, Langues)
├── file.html               # Liens utiles (Polytech, GitHub, LinkedIn, Contact)
├── loisirs.html            # Loisirs & passions (Développement, Gaming, Sports, Nature)
├── main.js                 # Script partagé (navbar, animations, back-to-top)
├── assets/
│   └── css/
│       └── theme.css       # Système de design complet (variables CSS, composants)
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow GitHub Actions → GitHub Pages
├── .nojekyll               # Désactive le traitement Jekyll par GitHub Pages
├── README.md               # Ce fichier
└── style.css               # Ancien CSS (non chargé, conservé comme sauvegarde)
```

---

## Fixes courants

### ❌ Erreur 404 sur la page d'accueil

**Cause :** Le repo est vide ou Pages n'est pas activé.
**Fix :** Vérifier l'étape 3 (source = GitHub Actions) et que le push a bien été fait.

### ❌ Assets non chargés (CSS manquant, page sans style)

**Cause :** Chemin absolu commençant par `/assets/...` au lieu de `assets/...`.
**Statut actuel :** ✅ Tous les chemins du projet sont déjà relatifs — pas de correction nécessaire.

### ❌ Le workflow tourne mais la page ne se met pas à jour

**Cause :** Source Pages encore sur "Deploy from a branch".
**Fix :** Settings → Pages → Source → **GitHub Actions** → Save.

### ❌ Fonts Google ne se chargent pas

**Cause :** Pare-feu ou connexion bloquée.
**Fix :** Normal en local avec fichier:// — utiliser `python -m http.server` à la place.
En production (GitHub Pages) : les fonts Google se chargent normalement.

### ❌ `cv.html` s'affiche sans styles sur GitHub Pages

**Cause :** Le chemin `assets/css/theme.css` est interprété relativement à chaque page.
**Statut actuel :** ✅ Tous les fichiers HTML sont à la racine — le chemin relatif est identique pour tous.

### ❌ Erreur de permission dans le workflow Actions

```
Error: HttpError: Resource not accessible by integration
```
**Fix :** Settings → Actions → General → Workflow permissions → **Read and write permissions** → Save.

---

## Personnalisation rapide

```css
/* Changer la couleur d'accent dans assets/css/theme.css */
:root {
  --accent: #f2a365;   /* amber — changer ici */
  --accent2: #7aa7ff;  /* blueprint blue */
}
```

```html
<!-- Ajouter un projet dans index.html -->
<article class="project-row" role="listitem">
  <span class="project-row__number" aria-hidden="true">04</span>
  <div class="project-row__body">
    <h3 class="project-row__title">Nom du projet</h3>
    <p class="project-row__meta">Catégorie · Année</p>
    <p class="project-row__summary">Description en 1-2 phrases.</p>
    <div class="project-row__tags">
      <span class="tag">Tech</span>
    </div>
  </div>
  <div class="project-row__cta">
    <a href="..." class="view-case">Voir <i class="fas fa-arrow-right"></i></a>
  </div>
</article>
```

---

*&copy; 2026 Ilyas Ennahli — Polytech Lille, ISIA*
