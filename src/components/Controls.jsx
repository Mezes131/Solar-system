import React from 'react';
import '../css/controls.css';

const Controls = ({ 
  timeSpeed, 
  onTimeSpeedChange, 
  showOrbits, 
  onToggleOrbits, 
  showLabels, 
  onToggleLabels, 
  onResetView, 
  onFollowSun, 
  isPaused, 
  onTogglePause 
}) => {
  return (
    <div id="controls" className="controls-panel">
      <div className="control-group">
        <label htmlFor="time-speed">Vitesse Temporelle</label>
        <input 
          type="range" 
          id="time-speed" 
          min="0" 
          max="10" 
          value={timeSpeed} 
          step="0.1" 
          onChange={(e) => onTimeSpeedChange(parseFloat(e.target.value))}
          title="Vitesse Temporelle"
        />
        <span id="speed-value">{timeSpeed}x</span>
      </div>
      
      <div className="control-group buttons-container">
        <button 
          id="toggle-orbits" 
          className={showOrbits ? 'active' : ''}
          onClick={onToggleOrbits}
        >
          {showOrbits ? 'Masquer Orbites' : 'Afficher Orbites'}
        </button>
        <button 
          id="toggle-labels" 
          className={showLabels ? 'active' : ''}
          onClick={onToggleLabels}
        >
          {showLabels ? 'Masquer Étiquettes' : 'Afficher Étiquettes'}
        </button>
      </div>
      
      <div className="control-group buttons-container">
        <button id="reset-view" onClick={onResetView}>
          Vue d'Ensemble
        </button>
        <button id="follow-sun" onClick={onFollowSun}>
          Suivre Soleil
        </button>
      </div>
      
      <div className="control-group buttons-container">
        <button 
          id="pause-play" 
          className={isPaused ? 'active' : ''}
          onClick={onTogglePause}
        >
          {isPaused ? 'Reprendre' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default Controls;
