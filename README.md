# Système Solaire Interactif 3D

Une simulation interactive et éducative du système solaire en 3D créée avec Three.js.

## 🌟 Fonctionnalités

### 🪐 Planètes et Objets Célestes
- **Soleil** : Étoile centrale avec effet de lueur
- **8 planètes** : De Mercure à Neptune avec caractéristiques réalistes
- **Lune** : Satellite naturel de la Terre
- **Anneaux de Saturne** : Représentation visuelle des anneaux
- **Champ d'étoiles** : 10,000 étoiles pour un fond réaliste

### 🎮 Contrôles Interactifs
- **Navigation 3D** : Rotation, zoom et panoramique de la caméra
- **Sélection de planètes** : Clic pour obtenir des informations détaillées
- **Vitesse temporelle** : Accélérer ou ralentir les orbites (0x à 10x)
- **Pause/Reprise** : Contrôler l'animation
- **Vues prédéfinies** : Vue d'ensemble et suivi du soleil

### 🎨 Interface Utilisateur
- **Panneau d'informations** : Détails sur la planète sélectionnée
- **Contrôles visuels** : Boutons pour masquer/afficher orbites et étiquettes
- **Design responsive** : Adapté aux différentes tailles d'écran
- **Effets visuels** : Mise en évidence des planètes au survol

### ⚡ Performance et Optimisation
- **Rendu WebGL** : Performance optimisée avec antialiasing
- **Animation fluide** : 60 FPS constant
- **Gestion mémoire** : Optimisation des objets 3D
- **Responsive design** : Compatible mobile et desktop

## 🚀 Installation et Utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Navigateur web moderne avec support WebGL

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd solar-system

# Installer les dépendances
npm install
```

### Démarrage Rapide
```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

Le serveur de développement s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`.

### Contrôles de Navigation
- **Souris** : Clic gauche + glisser pour faire tourner la vue
- **Molette** : Zoom avant/arrière
- **Clic droit + glisser** : Déplacer la vue
- **Clic sur une planète** : Sélectionner et afficher les informations

## 🛠️ Structure Technique

### Architecture
```
index.html          # Interface utilisateur et structure HTML
js/
  └── solar-system.js  # Logique principale Three.js
```

### Technologies Utilisées
- **Three.js** : Moteur 3D WebGL (installé via npm)
- **OrbitControls** : Contrôles de caméra
- **HTML5/CSS3** : Interface utilisateur
- **JavaScript ES6+** : Logique de simulation
- **Vite** : Bundler et serveur de développement
- **Node.js/npm** : Gestion des dépendances

### Caractéristiques des Planètes
Chaque planète est configurée avec :
- Taille relative réaliste
- Distance orbitale proportionnelle
- Vitesse de rotation et révolution
- Couleurs et matériaux distinctifs
- Informations astronomiques précises

## 🎯 Fonctionnalités Avancées

### Système d'Orbites
- Orbites circulaires visibles
- Vitesses relatives réalistes
- Possibilité de masquer/afficher les trajectoires

### Effets Visuels
- Lueur solaire avec matériaux émissifs
- Mise en évidence des planètes au survol
- Transparence et effets de matériaux
- Champ d'étoiles en arrière-plan

### Interactivité
- Sélection de planètes par clic
- Affichage d'informations en temps réel
- Contrôles de vitesse temporelle
- Navigation intuitive dans l'espace 3D

## 📱 Compatibilité

### Navigateurs Supportés
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Appareils
- **Desktop** : Performance optimale
- **Tablette** : Contrôles tactiles
- **Mobile** : Interface adaptée

## 🔧 Personnalisation

### Modifier les Planètes
Les caractéristiques des planètes sont définies dans `js/solar-system.js` :
```javascript
const planetData = [
    {
        name: "Nom de la planète",
        type: "Type de planète",
        distance: "Distance du soleil",
        size: "Taille réelle",
        revolution: "Période de révolution",
        color: 0xHEX_COLOR,
        radius: 3D_RADIUS,
        orbitRadius: DISTANCE_ORBITALE,
        orbitSpeed: VITESSE_ORBITALE,
        rotationSpeed: VITESSE_ROTATION
    }
    // ... autres planètes
];
```

### Ajuster les Performances
- Modifier le nombre d'étoiles dans `createStarField()`
- Ajuster la qualité des géométries (segments des sphères)
- Modifier les paramètres de fog et d'éclairage

## 🎓 Utilisation Éducative

### Apprentissage
- **Astronomie** : Comprendre les distances et tailles relatives
- **Physique** : Visualiser les mouvements orbitaux
- **Géométrie 3D** : Explorer l'espace tridimensionnel
- **Interactivité** : Apprendre par l'exploration

### Applications
- **Salles de classe** : Démonstrations interactives
- **Musées** : Expositions scientifiques
- **Éducation en ligne** : Modules d'apprentissage
- **Divertissement** : Découverte de l'espace

## 🐛 Dépannage

### Problèmes Courants
1. **Rendu noir** : Vérifiez le support WebGL de votre navigateur
2. **Performance lente** : Fermez d'autres onglets ou applications
3. **Contrôles non responsifs** : Rechargez la page
4. **Planètes invisibles** : Utilisez le bouton "Vue d'Ensemble"

### Support
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que Three.js se charge correctement
- Testez sur différents navigateurs

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités
- Améliorer la documentation

---

**Profitez de votre voyage dans le système solaire ! 🚀✨**
