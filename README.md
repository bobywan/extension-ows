# Extension OWS

Une extension navigateur moderne développée avec **WXT** et **Vue 3** pour visualiser, analyser et déboguer les templates OWS. Compatible **Chrome** et **Firefox**, cette extension facilite le développement en fournissant des outils avancés pour l'analyse de sites web.

## 🎯 Fonctionnalités

### 🔄 Navigation Intelligente
- **Changement d'environnement** : Basculez entre Production, Préproduction, Recette et Local
- **Changement de site** : Naviguez entre Capital, GEO, Cuisine Actuelle, Ça m'intéresse, Côté Maison, etc.
- **Interface optimisée** : Disposition 3×3 pour une navigation fluide
- **Détection automatique** : L'extension détecte automatiquement l'environnement et le site actuels
- **Ouverture en nouvel onglet** : Option pour ouvrir dans un nouvel onglet
- **Compatibilité navigateurs** : Fonctionne parfaitement sur Chrome et Firefox

### 🔧 Gestion des Paramètres URL
- **Ajout/Suppression** : Gérez facilement les paramètres comme `?puboff`, `?gtmoff`, `rec2`, `rec3`
- **Interface intuitive** : Boutons dédiés pour les paramètres les plus courants
- **Paramètres personnalisés** : Ajoutez vos propres paramètres
- **Synchronisation** : Les changements sont appliqués en temps réel

### ⚙️ Configuration Avancée
- **BrandConfig** : Visualisation du JSON de configuration de la marque
- **CommonConfig** : Affichage de la configuration commune
- **DataLayer** : Inspection des données Google Analytics
- **Datadog** : Visualisation des métriques Datadog
- **Coloration syntaxique** : JSON formaté et coloré pour une lecture facilitée

### 📊 Informations de Page Complètes
- **Informations de base** : Template, marque, titre, description, URL, domaine
- **SEO & Meta** : Mots-clés, URL canonique, Open Graph, Twitter Cards, robots
- **Analytics & Tracking** : Google Analytics, GTM, Facebook Pixel, Hotjar
- **Performance** : Temps de chargement, nombre de ressources, taille de page
- **Structure** : Analyse des liens, hiérarchie des titres, images sans alt
- **Technique avancé** : Service Worker, Web Vitals, cookies, stockage, erreurs console

### 🎨 Analyse de Structure CSS
- **Analyse automatique** : Détection de toutes les classes CSS de la page
- **Regroupement intelligent** : Classes organisées par préfixes (ex: `btn`, `btn-primary`)
- **Mise en surbrillance** : Visualisation des éléments avec bordures colorées et labels
- **Sélection multiple** : Sélection par groupe ou individuelle
- **Statistiques** : Comptage des occurrences de chaque classe

### 🎭 Fonctionnalité Kaamelott
- **Bouton OWS** : Bouton flottant repositionnable
- **Remplacement de contenu** : Remplace le texte par des citations de Kaamelott
- **Remplacement d'images** : Remplace toutes les images par des images de la série
- **Mode fun** : Pour tester l'interface avec du contenu alternatif

### 🏢 Back Office Integration
- **Accès direct** : Bouton pour ouvrir le Back Office de la page actuelle
- **Détection automatique** : Utilise le trigramme et l'ID de page automatiquement
- **Support multi-types** : Gère les articles et les catégories
- **URLs intelligentes** : Construction d'URL adaptée au type de contenu

### 🚨 Indicateur Visuel
- **Badge sur l'icône** : Indicateur vert (✓) ou orange (!) sur l'icône de l'extension
- **Tooltip informatif** : Information au survol de l'icône
- **Mise à jour automatique** : Badge mis à jour en temps réel lors de la navigation

## 🛠️ Technologies Utilisées

- **Framework** : [WXT](https://wxt.dev/) - Framework moderne pour extensions de navigateur
- **Frontend** : [Vue 3](https://vuejs.org/) avec Composition API et TypeScript
- **Styles** : CSS3 avec PostCSS et variables CSS custom
- **Build** : Vite avec support TypeScript
- **Icons** : Material Design Icons
- **APIs** : Chrome Extension Manifest V3 / Firefox Manifest V2
- **Compatibilité** : Chrome 88+, Firefox 109+

## 📁 Structure du Projet

```
extension-ows/
├── .output/                    # Build WXT (généré)
├── public/                     # Assets publics
│   ├── images/kaamelott/      # Images Kaamelott
│   └── *.png                  # Icônes de l'extension
├── src/
│   ├── entrypoints/           # Points d'entrée WXT
│   │   ├── background.ts      # Service Worker (badge indicateur)
│   │   ├── content.ts         # Content Script (bouton OWS, détection)
│   │   └── popup/             # Interface popup
│   │       ├── App.vue        # Composant racine
│   │       ├── main.ts        # Point d'entrée Vue
│   │       ├── assets/        # Assets (styles, images)
│   │       └── components/    # Composants Vue
│   │           ├── navigation/        # Navigation et contrôles
│   │           ├── environmentSite/   # Changement env/site
│   │           ├── urlParams/         # Gestion paramètres URL
│   │           ├── configuration/     # Configs (brand, common, etc.)
│   │           ├── pageInfo/          # Informations de page
│   │           └── classContent/      # Analyse structure CSS
│   └── types/                 # Types TypeScript
├── wxt.config.ts              # Configuration WXT
├── package.json               # Dépendances et scripts
└── README.md                  # Documentation
```

## 🚀 Installation et Développement

### Prérequis
- Node.js >= 22.0.0
- npm ou yarn

### Installation

1. **Clonez le dépôt**
   ```bash
   git clone https://github.com/bobywan/extension-ows.git
   cd extension-ows
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```

3. **Lancez le mode développement**
   ```bash
   npm run dev
   ```
   - Ouvre automatiquement https://www.capital.fr pour les tests
   - Rechargement automatique lors des modifications

4. **Chargez l'extension dans votre navigateur**

   **Pour Chrome :**
   - Ouvrez `chrome://extensions/`
   - Activez le "Mode développeur"
   - Cliquez "Charger l'extension non empaquetée"
   - Sélectionnez le dossier `.output/chrome-mv3`

   **Pour Firefox :**
   - Ouvrez `about:debugging#/runtime/this-firefox`
   - Cliquez "Charger un module complémentaire temporaire"
   - Sélectionnez le fichier `manifest.json` dans `.output/firefox-mv2`

### Développement Firefox

```bash
npm run dev:firefox
```

## 📦 Construction et Distribution

### Build de production

```bash
npm run build          # Chrome
npm run build:firefox  # Firefox
```

### Création de packages

```bash
npm run zip             # Chrome (.zip)
npm run zip:firefox     # Firefox (.zip)
```

### Vérification TypeScript

```bash
npm run compile
```

## 🎯 Sites Supportés

L'extension fonctionne sur tous les sites mais offre des fonctionnalités avancées sur :

- **Capital** (capital.fr) - 🔵 Couleur Business Bleu
- **GEO** (geo.fr) - 🟢 Couleur Nature Vert
- **Ça m'intéresse** (caminteresse.fr) - 🟣 Couleur Créative Violet
- **Cuisine Actuelle** (cuisineactuelle.fr) - 🟠 Couleur Culinaire Orange
- **HBR France** (hbrfrance.fr) - 🔷 Couleur Professionnelle Indigo
- **Voici** (voici.fr) - 🩷 Couleur Glamour Rose
- **Femme Actuelle** (femmeactuelle.fr) - 💖 Couleur Moderne Rose
- **Harper's Bazaar** (harpersbazaar.fr) - ⚫ Couleur Sophistiquée Gris
- **🆕 Côté Maison** (cotemaison.fr) - 🩵 Couleur Habitat Turquoise

> **9 sites** avec couleurs thématiques distinctives et trigrammes Back Office intégrés

## 🌐 Compatibilité Navigateurs

| Navigateur | Support | Version | Manifest |
|------------|---------|---------|----------|
| **Chrome** | ✅ Complet | 88+ | V3 |
| **Firefox** | ✅ Complet | 109+ | V2 |
| **Edge** | ✅ Théorique* | 88+ | V3 |
| **Safari** | ❌ Non testé | - | - |

> *Edge utilise le même moteur que Chrome mais n'a pas été testé spécifiquement

## 🔧 Configuration WXT

Le fichier `wxt.config.ts` configure :
- **Permissions** : `activeTab`, `scripting`, `tabs`
- **Host permissions** : `<all_urls>`
- **Web accessible resources** : Images Kaamelott
- **Icons** : Icônes de l'extension
- **Start URLs** : URLs d'ouverture en développement
- **API universelle** : Utilise `browser.*` pour la compatibilité cross-browser

## 🎨 Système de Design

### Variables CSS
- **Couleurs** : Système cohérent avec couleurs primaires, secondaires, d'état
- **Espacements** : Variables d'espacement standardisées
- **Transitions** : Animations fluides et cohérentes
- **Couleurs thématiques** : Couleurs spécifiques par environnement et site
- **Grille adaptative** : Disposition 3×3 optimisée avec fallback responsive

### Composants
- **Navigation** : Menu latéral avec expansion/réduction
- **Boutons** : Système de boutons cohérent avec états (actif, désactivé, WIP)
- **Badges** : Indicateurs visuels pour les états et notifications
- **Formulaires** : Inputs et contrôles standardisés

## 📋 Statut des Fonctionnalités

- ✅ **Navigation environnements/sites** - Complet
- ✅ **Gestion paramètres URL** - Complet
- ✅ **Configuration (Brand, Common, DataLayer, Datadog)** - Complet
- ✅ **Informations de page complètes** - Complet
- ✅ **Analyse structure CSS** - Complet
- ✅ **Bouton OWS avec Kaamelott** - Complet
- ✅ **Back Office integration** - Complet
- ✅ **Indicateur visuel sur icône** - Complet

## 🔄 Migration depuis l'ancienne version

Cette version utilise une architecture complètement nouvelle :
- **Ancien** : Webpack + Handlebars + JS vanilla
- **Nouveau** : WXT + Vue 3 + TypeScript
- **Avantages** : Meilleure maintenabilité, développement plus rapide, types sûrs

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📝 Changelog

### Version 1.0.4 (Actuelle)
- 🆕 **Nouveau site** : Ajout de Côté Maison (cotemaison.fr) avec couleur turquoise
- 🦊 **Compatibilité Firefox** : Corrections complètes pour Firefox (API browser)
- 🎨 **Interface optimisée** : Disposition 3×3 pour les boutons (au lieu de 2×4)
- 🎯 **Détection améliorée** : Meilleure détection des sites sur Firefox
- 🔧 **Back Office** : Trigramme CTM pour Côté Maison

### Version 1.0.3
- 🔄 Migration complète vers WXT + Vue 3 + TypeScript
- ✨ Nouveau système d'indicateur visuel sur l'icône
- ✨ Integration Back Office avec détection automatique
- ✨ Analyse complète des informations de page (6 catégories)
- ✨ Analyse structure CSS avec mise en surbrillance
- ✨ Fonctionnalité Kaamelott avec remplacement d'images
- 🎨 Nouveau design system cohérent
- ⚡ Performances améliorées
- 🔧 Configuration WXT avancée

## 📄 Licence

[ISC](LICENSE)

---

**Développé avec ❤️ par Bobywan**
