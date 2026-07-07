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
  content.js          → TOUS les textes du site (français + anglais)
  App.jsx             → page active, langue active, navigation
  App.css             → tous les styles
  index.css           → variables de couleur, polices, réinitialisation
  components/
    Nav.jsx            → barre de navigation + menu hamburger mobile
    LangToggle.jsx      → sélecteur de langue FR/EN
    Monogram.jsx         → la "Plaque monogramme" de la page d'accueil
    Countdown.jsx        → le compte à rebours avant le départ en Australie
    FigureRow.jsx         → ligne "valeur — précision" (chiffres clés, compétences, langues)
  pages/
    Home.jsx, About.jsx, Projects.jsx, Contact.jsx
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
