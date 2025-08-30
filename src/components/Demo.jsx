import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/demo.css';

const Demo = () => {
  const { t } = useTranslation();

  return (
    <div className="demo-container">
              <div className="demo-header">
          <h1><i className="fas fa-rocket"></i> {t('demo.title')}</h1>
          <p>{t('demo.subtitle')}</p>
        </div>

      <div className="demo-content">
        <section className="demo-section">
          <h2><i className="fas fa-rocket"></i> {t('demo.features.title')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3><i className="fas fa-sun"></i> {t('demo.features.sun')}</h3>
              <p>{t('demo.features.sunDesc')}</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-globe"></i> {t('demo.features.planets')}</h3>
              <p>{t('demo.features.planetsDesc')}</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-star"></i> {t('demo.features.stars')}</h3>
              <p>{t('demo.features.starsDesc')}</p>
            </div>
            <div className="feature-card">
              <h3><i className="fas fa-gamepad"></i> {t('demo.features.controls')}</h3>
              <p>{t('demo.features.controlsDesc')}</p>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2><i className="fas fa-tools"></i> {t('demo.technologies.title')}</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <h4><i className="fas fa-cube"></i> {t('demo.technologies.threejs')}</h4>
              <p>{t('demo.technologies.threejsDesc')}</p>
            </div>
            <div className="tech-item">
              <h4><i className="fab fa-react"></i> {t('demo.technologies.react')}</h4>
              <p>{t('demo.technologies.reactDesc')}</p>
              </div>
            <div className="tech-item">
              <h4><i className="fas fa-bolt"></i> {t('demo.technologies.vite')}</h4>
              <p>{t('demo.technologies.viteDesc')}</p>
            </div>
            <div className="tech-item">
              <h4><i className="fab fa-css3-alt"></i> {t('demo.technologies.css3')}</h4>
              <p>{t('demo.technologies.css3Desc')}</p>
            </div>
          </div>
        </section>


        <section className="demo-section">
          <h2><i className="fas fa-play-circle"></i> {t('demo.gettingStarted.title')}</h2>
          <div className="getting-started">
            <div className="step">
              <h3>1. {t('demo.gettingStarted.install')}</h3>
              <code>npm install</code>
            </div>
            <div className="step">
              <h3>2. {t('demo.gettingStarted.start')}</h3>
              <code>npm run dev</code>
            </div>
            <div className="step">
              <h3>3. {t('demo.gettingStarted.navigation')}</h3>
              <p>{t('demo.gettingStarted.navigationDesc')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
