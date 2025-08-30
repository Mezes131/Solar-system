# 🌟 Interactive 3D Solar System - React

An interactive and educational 3D solar system simulation created with **Three.js** and **React**, featuring **full internationalization support** in English and French.

## 🚀 Features

- **Realistic 3D Simulation** : Luminous sun with glow effects and dynamic lighting
- **8 Planets** : Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune
- **Interactive Navigation** : Smooth camera controls with OrbitControls
- **Star Field** : 10,000 stars for an immersive environment
- **Modern React Interface** : Navigation between simulation and demo page
- **Responsive Design** : Adapts to all screen sizes
- **Performance Optimized** : WebGL rendering with Three.js
- **🌍 Internationalization** : Full English/French language support
- **Language Selector** : Easy language switching in the header
- **Interactive Controls** : Speed, pause, orbits, labels, and view controls
- **Side Panel** : Collapsible panel with controls, info, and help guide
- **Planet Information** : Detailed data for each celestial body

## 🛠️ Technologies Used

- **Frontend** : React 18 + React Router
- **3D Graphics** : Three.js r128
- **Build Tool** : Vite
- **Styling** : CSS3 with animations, gradients, and backdrop filters
- **Controls** : OrbitControls for 3D navigation
- **Internationalization** : i18next, react-i18next, i18next-browser-languagedetector
- **Icons** : Font Awesome 6.4.0

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── SolarSystem.jsx     # Main 3D simulation
│   ├── Demo.jsx            # Demo page
│   ├── Controls.jsx        # Simulation controls
│   ├── PlanetInfo.jsx      # Planet information panel
│   ├── SidePanel.jsx       # Collapsible side panel
│   ├── PlanetLabels.jsx    # Dynamic planet labels
│   ├── Footer.jsx          # Application footer
│   ├── LanguageSelector.jsx # Language switching component
│   └── App.jsx             # Main app with routing
├── css/                    # CSS styles
│   ├── App.css             # App styles
│   ├── demo.css            # Demo page styles
│   ├── index.css           # Global styles
│   ├── solar-system.css    # Simulation styles
│   ├── controls.css        # Control panel styles
│   ├── planet-info.css     # Planet info styles
│   ├── side-panel.css      # Side panel styles
│   ├── footer.css          # Footer styles
│   └── language-selector.css # Language selector styles
├── i18n/                   # Internationalization
│   ├── index.js            # i18n configuration
│   └── locales/            # Translation files
│       ├── en.json         # English translations
│       └── fr.json         # French translations
├── App.jsx                 # Main component with routing
├── main.jsx                # React entry point
└── index.html              # Main HTML file
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
```bash
# Clone the project
git clone [repository-url]
cd solar-system-react

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build application for production
npm run preview  # Preview production build
npm run lint     # Check code with ESLint
```

## 🌍 Internationalization Features

### Supported Languages
- **English** (default) - `en`
- **French** - `fr`

### Language Switching
- **Header Button** : Language selector in the top navigation
- **Real-time Updates** : All text updates immediately when language changes
- **Persistent Settings** : Language preference saved in localStorage
- **Automatic Detection** : Detects browser language on first visit

### Translation Coverage
- ✅ **Navigation** : All menu items and titles
- ✅ **Solar System** : Planet names, types, and scientific data
- ✅ **Controls** : All buttons, labels, and tooltips
- ✅ **Information Panels** : Planet details and descriptions
- ✅ **Help Guide** : Complete user manual in both languages
- ✅ **Demo Page** : Feature descriptions and instructions
- ✅ **Footer** : About section and contact information

## 🎮 Usage

### Navigation
- **Route `/`** : Interactive 3D solar system simulation
- **Route `/demo`** : Demo page with features and guide

### 3D Controls
- **Left click + drag** : Rotate camera around the system
- **Mouse wheel** : Zoom in/out
- **Right click + drag** : Move camera position

### Interactive Features
- **Clickable Planets** : Select a planet to view detailed information
- **Visual Effects** : Sun glow, dynamic planet lighting
- **Smooth Animations** : Planet rotation and revolution around the sun
- **Control Panel** : Adjust time speed, toggle orbits/labels
- **Side Panel** : Access controls, information, and help guide

### Language Controls
- **Language Selector** : Click the language button in the header
- **Dropdown Menu** : Choose between English and French
- **Instant Translation** : All text updates immediately

## 🌟 Technical Features

### 3D Rendering
- **WebGL Renderer** with antialiasing
- **Perspective Camera** for realistic view
- **Fog Effect** for depth perception
- **Dynamic Lighting** with sun point light

### Performance
- **BufferGeometry** for star field optimization
- **Material optimization** with Three.js
- **Memory management** with React cleanup
- **Responsive rendering** adaptation

### Accessibility
- **Keyboard navigation** support
- **Visible focus** for interactive elements
- **Descriptive labels** for all controls
- **High contrast** for readability

### Internationalization
- **i18next framework** for robust translation management
- **React hooks** integration with useTranslation
- **Language detection** with browser and localStorage fallbacks
- **Dynamic content** translation for all user-facing text

## 📱 Responsive Design

The application perfectly adapts to all screen sizes:
- **Desktop** : Complete interface with all controls
- **Tablet** : Touch-optimized navigation
- **Mobile** : Interface adapted for small screens

## 🎨 Design Features

### Visual Theme
- **Space Palette** : Blacks, blues, and yellows
- **Dynamic Gradients** for titles
- **Transparency Effects** for depth
- **Backdrop Filters** for modern glass-morphism effects

### Animations
- **Smooth CSS Transitions**
- **Keyframe Animations** for special effects
- **Interactive Hover Effects**
- **3D Transformations** for immersive experience

## 🔧 Development

### Adding New Planets
```javascript
// In SolarSystem.jsx
const newPlanet = {
  name: t('solarSystem.info.newPlanet'),
  type: t('solarSystem.planetTypes.newType'),
  color: 0xRRGGBB,
  radius: 2.0,
  orbitRadius: 250,
  orbitSpeed: 0.001,
  rotationSpeed: 0.01
};
```

### Adding New Translations
```javascript
// In en.json
"newSection": {
  "title": "New Section Title",
  "description": "New section description"
}

// In fr.json
"newSection": {
  "title": "Titre de la Nouvelle Section",
  "description": "Description de la nouvelle section"
}
```

### Modifying Lighting
```javascript
// Adjust sun light intensity
const sunLight = new THREE.PointLight(0xffffff, 15, 6000);
```

### Adding New Routes
```javascript
// In App.jsx
<Route path="/new-route" element={<NewComponent />} />
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Production Server
```bash
npm run preview
```

### Deployment on Vercel/Netlify
- Connect your repository
- Configure build command: `npm run build`
- Set output directory: `dist`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### Translation Contributions
- Add new translation keys to both `en.json` and `fr.json`
- Ensure consistent terminology across languages
- Test language switching functionality
- Update this README if adding new features

## 📄 License

This project is under ISC license. See the `LICENSE` file for more details.

## 🙏 Acknowledgments

- **Three.js** for the 3D library
- **React** for the user interface
- **Vite** for the build tool
- **i18next** for internationalization
- **Font Awesome** for icons
- **Open source community** for inspiration

---

**Developed with ❤️ for 3D development**

*Explore the universe from your browser!* 🚀✨

## 🌟 Recent Updates

### Version 2.0 - Internationalization Release
- ✨ **Full i18n Support** : English and French languages
- 🌍 **Language Selector** : Easy language switching in header
- 🔧 **Enhanced Controls** : Improved simulation controls
- 📱 **Better Responsiveness** : Optimized for all devices
- 🎨 **Visual Improvements** : Enhanced dark futuristic theme
- 📚 **Complete Help Guide** : User manual in both languages
- 🔬 **Scientific Data** : Translated planet information and types
