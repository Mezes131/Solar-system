import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-user-astronaut"></i> {t('about.title')}</h3>
          <p>
            {t('about.description')}
          </p>
        </div>
        
        <div className="footer-section">
          <h3><i className="fas fa-code"></i> {t('about.technologies')}</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js-square"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-cube"></i>
              <span>Three.js</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3><i className="fas fa-envelope"></i> {t('about.contact')}</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>
                <a href="mailto:mezatioange@gmail.com">mezatioange@gmail.com</a>
              </span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <span>
                <a href="https://www.linkedin.com/in/ange-mezatio/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </span>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/Mezes131" target="_blank" rel="noopener noreferrer">GitHub</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>
          <i className="fas fa-heart"></i> 
          {t('footer.developedWithPassion')}
        </p>
        <p className="copyright">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
