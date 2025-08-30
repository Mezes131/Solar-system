import React from 'react';
import '../css/demo.css';

const Demo = () => {
  return (
    <div className="demo-container">
              <div className="demo-header">
          <h1><i className="fas fa-rocket"></i> Démo du Système Solaire 3D</h1>
          <p>Simulation interactive 3D avec Three.js et React</p>
        </div>

      <div className="demo-content">
        <section className="demo-section">
          <h2><i className="fas fa-rocket"></i> Fonctionnalités Principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3><i className="fas fa-sun"></i> Soleil Lumineux</h3>
              <p>Étoile centrale avec effet de lueur et éclairage dynamique</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-globe"></i> Planètes Réalistes</h3>
              <p>8 planètes avec tailles et couleurs proportionnelles</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-star"></i> Champ d'Étoiles</h3>
              <p>10 000 étoiles pour un environnement immersif</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-gamepad"></i> Contrôles Intuitifs</h3>
              <p>Navigation fluide avec OrbitControls</p>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2><i className="fas fa-tools"></i> Technologies Utilisées</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <h4><i className="fas fa-cube"></i> Three.js</h4>
              <p>Bibliothèque 3D pour le rendu WebGL</p>
            </div>
            <div className="tech-item">
              <h4><i className="fab fa-react"></i> React</h4>
              <p>Interface utilisateur moderne et réactive</p>
            </div>
            <div className="tech-item">
              <h4><i className="fas fa-bolt"></i> Vite</h4>
              <p>Serveur de développement ultra-rapide</p>
            </div>
            <div className="tech-item">
              <h4><i className="fab fa-css3-alt"></i> CSS3</h4>
              <p>Styles avancés et animations fluides</p>
            </div>
          </div>
        </section>


        <section className="demo-section">
          <h2><i className="fas fa-play-circle"></i> Comment Commencer</h2>
          <div className="getting-started">
            <div className="step">
              <h3>1. Installation</h3>
              <code>npm install</code>
            </div>
            <div className="step">
              <h3>2. Démarrage</h3>
              <code>npm run dev</code>
            </div>
            <div className="step">
              <h3>3. Navigation</h3>
              <p>Liens dans la barre de navigation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
