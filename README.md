# 🌟 Système Solaire Interactif 3D - React

Une simulation interactive et éducative du système solaire en 3D créée avec **Three.js** et **React**.

## 🚀 Fonctionnalités

- **Simulation 3D Réaliste** : Soleil lumineux avec effet de lueur
- **8 Planètes** : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune
- **Navigation Interactive** : Contrôles de caméra fluides avec OrbitControls
- **Champ d'Étoiles** : 10 000 étoiles pour un environnement immersif
- **Interface React Moderne** : Navigation entre simulation et page de démo
- **Design Responsive** : S'adapte à tous les écrans
- **Performance Optimisée** : Rendu WebGL avec Three.js

## 🛠️ Technologies Utilisées

- **Frontend** : React 18 + React Router
- **3D Graphics** : Three.js r128
- **Build Tool** : Vite
- **Styling** : CSS3 avec animations et gradients
- **Controls** : OrbitControls pour la navigation 3D

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── SolarSystem.jsx # Simulation 3D principale
│   └── Demo.jsx        # Page de démonstration
├── css/                # Styles CSS
│   ├── App.css         # Styles de l'application
│   ├── demo.css        # Styles de la page démo
│   ├── index.css       # Styles globaux
│   └── solar-system.css # Styles de la simulation
├── App.jsx             # Composant principal avec routing
├── main.jsx            # Point d'entrée React
└── index.html          # HTML principal
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd solar-system-react

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Démarre le serveur de développement (port 3000)
npm run build    # Construit l'application pour la production
npm run preview  # Prévisualise la version de production
npm run lint     # Vérifie le code avec ESLint
```

## 🎮 Utilisation

### Navigation
- **Route `/`** : Simulation 3D interactive du système solaire
- **Route `/demo`** : Page de démonstration avec informations et guide

### Contrôles 3D
- **Clic gauche + glisser** : Rotation de la caméra autour du système
- **Molette de souris** : Zoom avant/arrière
- **Clic droit + glisser** : Déplacement de la caméra

### Fonctionnalités Interactives
- **Planètes Cliquables** : Sélectionnez une planète pour voir ses informations
- **Effets Visuels** : Lueur du soleil, éclairage dynamique des planètes
- **Animations Fluides** : Rotation des planètes et révolution autour du soleil

## 🌟 Caractéristiques Techniques

### Rendu 3D
- **WebGL Renderer** avec antialiasing
- **Perspective Camera** pour une vue réaliste
- **Fog Effect** pour la profondeur
- **Shadow Maps** pour l'éclairage avancé

### Performance
- **BufferGeometry** pour les étoiles
- **Optimisation des matériaux** Three.js
- **Gestion de la mémoire** avec cleanup React
- **Responsive rendering** adaptatif

### Accessibilité
- **Navigation au clavier** supportée
- **Focus visible** pour les éléments interactifs
- **Labels descriptifs** pour tous les contrôles
- **Contraste élevé** pour la lisibilité

## 📱 Responsive Design

L'application s'adapte parfaitement à tous les écrans :
- **Desktop** : Interface complète avec tous les contrôles
- **Tablet** : Navigation tactile optimisée
- **Mobile** : Interface adaptée aux petits écrans

## 🎨 Personnalisation

### Couleurs et Thèmes
- **Palette spatiale** : Noirs, bleus et jaunes
- **Gradients dynamiques** pour les titres
- **Effets de transparence** pour la profondeur

### Animations
- **Transitions CSS** fluides
- **Keyframes** pour les effets spéciaux
- **Hover effects** interactifs

## 🔧 Développement

### Ajouter de Nouvelles Planètes
```javascript
// Dans SolarSystem.jsx
const newPlanet = {
  name: "Nouvelle Planète",
  color: 0xRRGGBB,
  radius: 2.0,
  orbitRadius: 250,
  orbitSpeed: 0.001,
  rotationSpeed: 0.01
};
```

### Modifier l'Éclairage
```javascript
// Ajuster l'intensité de la lumière solaire
const sunLight = new THREE.PointLight(0xffffff, 15, 6000);
```

### Ajouter de Nouvelles Routes
```javascript
// Dans App.jsx
<Route path="/nouvelle-route" element={<NouveauComposant />} />
```

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Serveur de Production
```bash
npm run preview
```

### Déploiement sur Vercel/Netlify
- Connectez votre repository
- Configurez la commande de build : `npm run build`
- Définissez le dossier de sortie : `dist`

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence ISC. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Three.js** pour la bibliothèque 3D
- **React** pour l'interface utilisateur
- **Vite** pour l'outil de build
- **Communauté open source** pour l'inspiration

---

**Développé avec ❤️ pour l'exploration spatiale interactive**

*Explorez l'univers depuis votre navigateur !* 🚀✨
