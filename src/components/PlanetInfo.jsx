import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/planet-info.css';

const PlanetInfo = ({ selectedPlanet, planetData }) => {
  const { t } = useTranslation();

  if (!selectedPlanet || !planetData) {
    return (
      <div id="info-panel" className="info-panel">
        <h2>{t('planetInfo.title')}</h2>
        <div className="info-item">
          <span className="info-label">{t('planetInfo.name')}:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">{t('planetInfo.type')}:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">{t('planetInfo.distance')}:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">{t('planetInfo.size')}:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">{t('planetInfo.revolution')}:</span>
          <span className="info-value">-</span>
        </div>
      </div>
    );
  }

  return (
    <div id="info-panel" className="info-panel">
      <h2>{t('planetInfo.title')}</h2>
      <div className="info-item">
        <span className="info-label">{t('planetInfo.name')}:</span>
        <span className="info-value">{planetData.name}</span>
      </div>
      <div className="info-item">
        <span className="info-label">{t('planetInfo.type')}:</span>
        <span className="info-value">{planetData.type}</span>
      </div>
      <div className="info-item">
        <span className="info-label">{t('planetInfo.distance')}:</span>
        <span className="info-value">{planetData.distance}</span>
      </div>
      <div className="info-item">
        <span className="info-label">{t('planetInfo.size')}:</span>
        <span className="info-value">{planetData.size}</span>
      </div>
      <div className="info-item">
        <span className="info-label">{t('planetInfo.revolution')}:</span>
        <span className="info-value">{planetData.revolution}</span>
      </div>
    </div>
  );
};

export default PlanetInfo;
