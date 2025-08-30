import React, { useEffect, useState } from 'react';
import '../css/planet-labels.css';

const PlanetLabels = ({ planets, camera, showLabels, containerRef }) => {
  const [labelPositions, setLabelPositions] = useState({});

  useEffect(() => {
    if (!showLabels || !camera || !containerRef?.current || !planets || Object.keys(planets).length === 0) return;

    const updateLabels = () => {
      const newPositions = {};
      const containerRect = containerRef.current.getBoundingClientRect();
      
      Object.entries(planets).forEach(([name, planet]) => {
        if (planet.mesh && planet.mesh.position) {
          // Convertir la position 3D en coordonnées 2D de l'écran
          const vector = planet.mesh.position.clone();
          vector.project(camera);
          
          // Calculer les positions relatives au container
          let x = (vector.x * 0.5 + 0.5) * containerRect.width;
          let y = (-(vector.y * 0.5) + 0.5) * containerRect.height;
          
          // Vérifier que l'étiquette est dans les limites du container avec une marge
          const margin = 50; // Marge pour éviter que les étiquettes touchent les bords
          const labelWidth = 80; // Largeur approximative de l'étiquette
          const labelHeight = 30; // Hauteur approximative de l'étiquette
          
          // Ajuster la position si l'étiquette sort du canvas
          if (x < margin) x = margin;
          if (x > containerRect.width - margin - labelWidth) x = containerRect.width - margin - labelWidth;
          if (y < margin) y = margin;
          if (y > containerRect.height - margin - labelHeight) y = containerRect.height - margin - labelHeight;
          
          // Vérifier que l'étiquette est dans les limites du container
          if (x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height) {
            newPositions[name] = { x, y };
          }
        }
      });
      
      setLabelPositions(newPositions);
    };

    updateLabels();
    
    // Mettre à jour les positions à chaque frame
    const interval = setInterval(updateLabels, 100);
    
    return () => clearInterval(interval);
  }, [planets, camera, showLabels, containerRef]);

  if (!showLabels || !containerRef?.current) return null;

  const containerRect = containerRef.current.getBoundingClientRect();

  return (
    <div 
      className="planet-labels"
      style={{
        position: 'absolute',
        top: containerRect.top,
        left: containerRect.left,
        width: containerRect.width,
        height: containerRect.height,
        pointerEvents: 'none',
        zIndex: 100,
        overflow: 'hidden' // Empêcher les étiquettes de sortir
      }}
    >
      {Object.entries(planets).map(([name, planet]) => {
        if (!planet.mesh || !labelPositions[name]) return null;
        
        const { x, y } = labelPositions[name];
        
        return (
          <div
            key={name}
            className="planet-label"
            id={`label-${name.toLowerCase()}`}
            style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              transform: 'translate(-50%, -50%)',
              display: 'block',
              maxWidth: '80px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default PlanetLabels;
