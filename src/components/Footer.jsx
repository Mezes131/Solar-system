import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-user-astronaut"></i> À Propos de Moi</h3>
          <p>
            Développeur passionné par les technologies 3D et l'exploration spatiale. 
            J'aime créer des expériences immersives qui combinent innovation technique 
            et créativité artistique.
          </p>
        </div>
        
        <div className="footer-section">
          <h3><i className="fas fa-code"></i> Technologies Utilisées</h3>
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
          <h3><i className="fas fa-envelope"></i> Contact</h3>
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
          Développé avec passion pour le developpement web 3D
        </p>
        <p className="copyright">
          © Mezes 2025 - Tous droits réservés | Créé avec Three.js, React et un peu d'imagination
        </p>
      </div>
    </footer>
  );
};

export default Footer;
