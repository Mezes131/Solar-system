import React, { useState } from 'react';
import '../css/side-panel.css';

const SidePanel = ({ 
  children, 
  isExpanded, 
  onToggle, 
  onFullscreen,
  isFullscreen 
}) => {
  const [activeTab, setActiveTab] = useState('controls');

  const tabs = [
    { id: 'controls', label: ' Contrôles', icon: 'fa-gamepad' },
    { id: 'info', label: ' Informations', icon: 'fa-chart-line' },
    { id: 'help', label: ' Aide', icon: 'fa-question-circle' }
  ];

  return (
    <div className={`side-panel ${isExpanded ? 'expanded' : ''} ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Bouton principal pour ouvrir/fermer */}
      <button 
        className="side-panel-toggle"
        onClick={onToggle}
        title={isExpanded ? "Fermer le panneau" : "Ouvrir le panneau"}
      >
        <span className="toggle-icon">
          <i className={`fas ${isExpanded ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </span>
      </button>

      {/* Bouton plein écran */}
      <button 
        className="fullscreen-toggle"
        onClick={onFullscreen}
        title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
      >
        <span className="fullscreen-icon">
          <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
        </span>
      </button>

      {/* Contenu du panneau */}
      <div className="side-panel-content">
        {/* Onglets */}
        <div className="side-panel-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="tab-content">
          {activeTab === 'controls' && (
            <div className="tab-panel">
              <h3><i className="fas fa-gamepad"></i> Contrôles de Simulation</h3>
              {children.controls}
            </div>
          )}
          
          {activeTab === 'info' && (
            <div className="tab-panel">
              <h3><i className="fas fa-chart-line"></i> Informations Planète</h3>
              {children.info}
            </div>
          )}
          
          {activeTab === 'help' && (
            <div className="tab-panel">
              <h3><i className="fas fa-question-circle"></i> Guide d'Utilisation</h3>
              <div className="help-content">
                <h4><i className="fas fa-crosshairs"></i> Navigation 3D</h4>
                <ul>
                  <li><strong>Clic gauche + glisser</strong> : Rotation de la caméra</li>
                  <li><strong>Molette</strong> : Zoom avant/arrière</li>
                  <li><strong>Clic droit + glisser</strong> : Déplacement de la caméra</li>
                </ul>
                
                <h4><i className="fas fa-globe"></i> Interaction avec les Planètes</h4>
                <ul>
                  <li><strong>Clic sur une planète</strong> : Afficher ses informations</li>
                  <li><strong>Survol</strong> : Mise en évidence des planètes</li>
                  <li><strong>Étiquettes</strong> : Noms flottants des planètes</li>
                </ul>
                
                <h4><i className="fas fa-bolt"></i> Contrôles de Vitesse</h4>
                <ul>
                  <li><strong>Vitesse temporelle</strong> : Accélérer/ralentir l'animation</li>
                  <li><strong>Pause/Reprendre</strong> : Contrôler l'animation</li>
                  <li><strong>Vues prédéfinies</strong> : Vue d'ensemble, suivre le soleil</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
