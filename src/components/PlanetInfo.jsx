import React from 'react';
import '../css/planet-info.css';

const PlanetInfo = ({ selectedPlanet, planetData }) => {
  if (!selectedPlanet || !planetData) {
    return (
      <div id="info-panel" className="info-panel">
        <h2>Informations Planète</h2>
        <div className="info-item">
          <span className="info-label">Nom:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">Type:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">Distance du Soleil:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">Taille:</span>
          <span className="info-value">-</span>
        </div>
        <div className="info-item">
          <span className="info-label">Période de révolution:</span>
          <span className="info-value">-</span>
        </div>
      </div>
    );
  }

  return (
    <div id="info-panel" className="info-panel">
      <h2>Informations Planète</h2>
      <div className="info-item">
        <span className="info-label">Nom:</span>
        <span className="info-value">{planetData.name}</span>
      </div>
      <div className="info-item">
        <span className="info-label">Type:</span>
        <span className="info-value">{planetData.type}</span>
      </div>
      <div className="info-item">
        <span className="info-label">Distance du Soleil:</span>
        <span className="info-value">{planetData.distance}</span>
      </div>
      <div className="info-item">
        <span className="info-label">Taille:</span>
        <span className="info-value">{planetData.size}</span>
      </div>
      <div className="info-item">
        <span className="info-label">Période de révolution:</span>
        <span className="info-value">{planetData.revolution}</span>
      </div>
    </div>
  );
};

export default PlanetInfo;
