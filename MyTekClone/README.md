# Clone Mytek.tn

Ce projet est un clone frontend du site e-commerce mytek.tn, développé avec React, TypeScript et TailwindCSS.

## Fonctionnalités

### Composants principaux
- **Header** : Barre de navigation complète avec logo, barre de recherche, icônes et menu de catégories
- **CategorySidebar** : Barre latérale avec toutes les catégories et sous-catégories de produits
- **HeroCarousel** : Carrousel d'images promotionnelles en page d'accueil
- **PromoSections** : Sections promotionnelles pour différentes catégories (Gaming, TVs, Smartphones, Électroménager)
- **ProductCard/PromoProductCard** : Cartes produits avec variantes pour différents types d'affichage
- **OurStores** : Grille des magasins Mytek avec informations de contact
- **ContactUs** : Section de contact avec liens vers différents canaux de communication
- **Footer** : Pied de page complet avec liens, newsletter et informations de contact

### Pages
- **HomePage** : Page d'accueil avec toutes les sections principales
- **StoresPage** : Page dédiée aux magasins Mytek

### Fonctionnalités interactives
- **Navigation par catégories** : Menu déroulant avec toutes les catégories de produits
- **Effets au survol** : Les liens changent de couleur (rouge) au survol
- **Carrousel** : Navigation entre les images promotionnelles
- **Grilles produits** : Affichage des produits avec pagination
- **Responsive** : Design adapté pour mobile, tablette et desktop

## Comment exécuter le projet

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation

1. Cloner le projet 
```bash
git clone <url-du-repo>
cd mytek-clone
```

2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

3. Démarrer le serveur de développement
```bash
npm run dev
# ou 
yarn dev
```

4. Dans , vous pouvez simplement utiliser le workflow "Start application" qui est déjà configuré pour exécuter la commande `npm run dev`

### Comment naviguer dans le code

- `/client/src/components/` : Tous les composants UI réutilisables
- `/client/src/pages/` : Les pages principales de l'application
- `/client/src/lib/` : Utilitaires et données pour le fonctionnement de l'application
- `/client/src/hooks/` : Hooks React personnalisés (ex: useIsMobile, useToast)

### Structure des données

Le site utilise principalement les modèles de données suivants :
- `Product` : Représente un produit avec ses attributs (nom, prix, image, etc.)
- `Category` : Représente une catégorie avec ses sous-catégories
- `Store` : Représente un magasin Mytek avec ses informations

## Personnalisation

Pour modifier l'apparence du site :
- Les couleurs principales peuvent être modifiées dans les classes Tailwind (ex: `bg-[#E41F18]` pour le rouge Mytek)
- Les composants UI se trouvent dans `/client/src/components/ui/`
- Les données de produits peuvent être modifiées dans `/client/src/lib/data.ts`

## Note sur le backend

Ce projet est principalement un clone frontend. Un serveur Express simple est inclus mais n'est pas utilisé pour les fonctionnalités e-commerce.