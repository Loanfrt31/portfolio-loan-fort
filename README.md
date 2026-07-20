# Portfolio — Loan Fort

Portfolio personnel, voyageur en devenir, bachelier à Toulouse.
Projet 100% statique : Vite + React (JavaScript), sans backend, sans base de
données, sans `localStorage`.

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org/) (version 18 ou plus récente).

```bash
npm install
npm run dev
```

Le site est alors accessible sur l'URL affichée dans le terminal (en général
`http://localhost:5173`).

Pour générer la version de production (fichiers statiques optimisés, dans le
dossier `dist/`) :

```bash
npm run build
npm run preview   # pour prévisualiser le résultat du build en local
```

## Structure du projet

```
src/
  content.js          → TOUS les textes du site (français + anglais) + constante
                         DEPARTURE_DATE
  App.jsx             → page active, langue active, navigation, préloader
  App.css             → tous les styles
  index.css           → variables de couleur, polices, réinitialisation
  hooks/
    useReveal.js         → apparition au scroll (IntersectionObserver, une fois)
  components/
    Nav.jsx               → barre de navigation + menu hamburger mobile
    LangToggle.jsx         → sélecteur de langue FR/EN
    HeroPortrait.jsx        → le portrait dans l'arche de la page d'accueil
    Countdown.jsx            → le compte à rebours avant le départ en Australie
    FigureRow.jsx             → ligne "valeur — précision" (chiffres clés, compétences, langues)
    Tabs.jsx / TabsCarousel.jsx → onglets À propos (rangée desktop / carousel mobile)
    Breadcrumb.jsx            → fil d'ariane de la page Australie
    AustraliaMap.jsx           → croquis SVG des côtes de l'Australie
    MilestoneTrail.jsx          → frise des jalons du projet Australie
    WorldClocks.jsx              → horloges Toulouse / Sydney en temps réel
    Reveal.jsx                    → enveloppe pour les apparitions au scroll
    Preloader.jsx                  → écran d'entrée monogramme (premier chargement)
  pages/
    Home.jsx, About.jsx, Projects.jsx, Contact.jsx, ProjectAustralia.jsx
```

## Modifier un texte

Tous les textes (français ET anglais) sont regroupés dans **`src/content.js`**.
Aucun texte n'est écrit directement dans les composants : pour changer une
phrase, un titre ou un label, il suffit de modifier la valeur correspondante
dans ce fichier.

Exemple — changer l'accroche de la page d'accueil :

```js
// src/content.js
export const content = {
  fr: {
    home: {
      intro: "Votre nouveau texte ici...",
      // ...
    },
  },
};
```

Pensez à modifier la version `fr` **et** la version `en` si le texte existe
dans les deux langues.

## Mettre à jour le compte à rebours

La date de départ pour l'Australie est définie tout en haut de
`src/content.js`, dans la constante `DEPARTURE_DATE` :

```js
export const DEPARTURE_DATE = new Date("2026-10-01T00:00:00");
```

Remplacez cette date par la date exacte du billet dès qu'elle est connue.
Pensez aussi à ajuster le texte `home.countdown.subtitle` (fr et en) si le
mois affiché change.

## Ajouter un projet

Les projets vivent dans `src/content.js`, dans le tableau
`content.fr.projects.items` (et son équivalent `content.en.projects.items`).
Le tableau est vide au départ : la page affiche alors un état "premier commit
imminent". Dès qu'un projet y est ajouté, la page bascule automatiquement sur
l'affichage en grille.

```js
// src/content.js
projects: {
  // ...
  items: [
    {
      name: "Nom du projet",
      desc: "Une courte description du projet.",
      stack: ["React", "CSS", "Python"],
    },
  ],
},
```

N'oubliez pas d'ajouter la même entrée (traduite) dans `content.en.projects.items`.

## Ajouter le portrait de l'accueil

La composition "portrait dans l'arche" de la page d'accueil affiche
`public/portrait-v2.png` — un portrait détouré (fond transparent). Le cadre
(arche, débordement de tête, grayscale, ombre d'ancrage, survol) est fixé en
CSS indépendamment des proportions du fichier : vous pouvez déposer une
nouvelle photo sous `public/portrait-v2.png` (n'importe quel ratio) sans
retoucher la mise en scène — `object-fit: cover` s'occupe du cadrage. En
l'absence du fichier, l'arche et le cartel restent affichés normalement,
sans image.

Gardez le fichier sous 300 Ko environ pour la performance ; au-delà,
compressez-le ou convertissez-le en WebP.

## Ajouter le CV téléchargeable

Le CV est désormais en anglais uniquement. Le bouton de la page Contact
pointe vers `/cv-loan-fort-en.pdf`. Déposez le CV anglais sous
**`public/cv-loan-fort-en.pdf`** pour l'activer.

## Image de partage (aperçu réseaux sociaux)

`public/og-image.png` (1200×630) est utilisée par les balises Open Graph et
Twitter Card définies dans `index.html`. Pour la régénérer ou la modifier,
éditez son contenu (texte, couleurs) puis exportez-la à nouveau en PNG aux
mêmes dimensions — par exemple par une capture d'écran d'une page HTML aux
couleurs du site, ou avec l'outil d'export de votre choix.

Avant la mise en ligne, remplacez aussi la valeur de la balise `og:url` dans
`index.html` (juste en dessous du commentaire "remplacer par l'URL de
production après déploiement") par l'URL réelle du site déployé.

## Déployer gratuitement

### Option 1 — Vercel (recommandé, le plus simple)

1. Créez un compte sur [vercel.com](https://vercel.com) et connectez votre
   compte GitHub.
2. Poussez ce projet sur un dépôt GitHub.
3. Sur Vercel, cliquez sur **New Project**, sélectionnez le dépôt.
4. Vercel détecte automatiquement Vite : laissez les réglages par défaut
   (`npm run build`, dossier de sortie `dist`) et cliquez sur **Deploy**.
5. Le site est en ligne en quelques secondes, avec une URL du type
   `portfolio-loan-fort.vercel.app`.

Chaque nouveau `git push` sur la branche principale redéploie automatiquement
le site.

### Option 2 — GitHub Pages

1. Dans `vite.config.js`, ajoutez la propriété `base` avec le nom de votre
   dépôt GitHub :
   ```js
   export default defineConfig({
     base: "/nom-du-depot/",
     plugins: [react()],
   });
   ```
2. Générez le build :
   ```bash
   npm run build
   ```
3. Déployez le contenu du dossier `dist/` sur la branche `gh-pages` du dépôt
   (par exemple avec le paquet `gh-pages` : `npm install -D gh-pages`, puis
   ajoutez un script `"deploy": "gh-pages -d dist"` dans `package.json` et
   lancez `npm run deploy`).
4. Activez GitHub Pages dans les paramètres du dépôt (**Settings → Pages**),
   en choisissant la branche `gh-pages` comme source.

## Notes

- Aucune donnée n'est stockée en `localStorage` : à chaque rechargement de la
  page, le site revient sur l'accueil en français.
- Le site ne contient aucune photo (choix assumé) : toutes les informations
  passent par la typographie et la mise en page.
- La page Contact affiche l'email, le téléphone et le lien LinkedIn du
  propriétaire — vérifiez l'URL LinkedIn dans `content.js` avant mise en ligne.
