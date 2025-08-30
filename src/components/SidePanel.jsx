import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/side-panel.css';

const SidePanel = ({ 
  children, 
  isExpanded, 
  onToggle, 
  onFullscreen,
  isFullscreen 
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('controls');

  const tabs = [
    { id: 'controls', label: ` ${t('sidePanel.controls')}`, icon: 'fa-gamepad' },
    { id: 'info', label: ` ${t('sidePanel.info')}`, icon: 'fa-chart-line' },
    { id: 'help', label: ` ${t('sidePanel.help')}`, icon: 'fa-question-circle' }
  ];

  return (
    <div className={`side-panel ${isExpanded ? 'expanded' : ''} ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Bouton principal pour ouvrir/fermer */}
      <button 
        className="side-panel-toggle"
        onClick={onToggle}
        title={isExpanded ? t('sidePanel.closePanel') : t('sidePanel.openPanel')}
      >
        <span className="toggle-icon">
          <i className={`fas ${isExpanded ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </span>
      </button>

      {/* Bouton plein écran */}
      <button 
        className="fullscreen-toggle"
        onClick={onFullscreen}
        title={isFullscreen ? t('sidePanel.exitFullscreen') : t('sidePanel.fullscreen')}
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
              <h3><i className="fas fa-gamepad"></i> {t('sidePanel.controlsTitle')}</h3>
              {children.controls}
            </div>
          )}
          
          {activeTab === 'info' && (
            <div className="tab-panel">
              <h3><i className="fas fa-chart-line"></i> {t('sidePanel.infoTitle')}</h3>
              {children.info}
            </div>
          )}
          
          {activeTab === 'help' && (
            <div className="tab-panel">
              <h3><i className="fas fa-question-circle"></i> {t('sidePanel.helpTitle')}</h3>
              <div className="help-content">
                <h4><i className="fas fa-crosshairs"></i> {t('sidePanel.navigation3D')}</h4>
                <ul>
                  <li><strong>{t('sidePanel.leftClickDrag')}</strong> : {t('sidePanel.cameraRotation')}</li>
                  <li><strong>{t('sidePanel.scrollWheel')}</strong> : {t('sidePanel.zoomInOut')}</li>
                  <li><strong>{t('sidePanel.rightClickDrag')}</strong> : {t('sidePanel.cameraMove')}</li>
                </ul>
                
                <h4><i className="fas fa-globe"></i> {t('sidePanel.planetInteraction')}</h4>
                <ul>
                  <li><strong>{t('sidePanel.clickPlanet')}</strong> : {t('sidePanel.showInfo')}</li>
                  <li><strong>{t('sidePanel.hover')}</strong> : {t('sidePanel.highlightPlanets')}</li>
                  <li><strong>{t('sidePanel.labels')}</strong> : {t('sidePanel.floatingNames')}</li>
                </ul>
                
                <h4><i className="fas fa-bolt"></i> {t('sidePanel.speedControls')}</h4>
                <ul>
                  <li><strong>{t('sidePanel.timeSpeed')}</strong> : {t('sidePanel.accelerateSlow')}</li>
                  <li><strong>{t('sidePanel.pauseResume')}</strong> : {t('sidePanel.controlAnimation')}</li>
                  <li><strong>{t('sidePanel.presetViews')}</strong> : {t('sidePanel.overviewFollowSun')}</li>
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
