import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import '../css/navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <h1 className="nav-title">{t('home.title')}</h1>
          
          {/* Bouton hamburger pour mobile */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Menu de navigation */}
        <div className={`nav-menu-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                {t('navigation.home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/demo" 
                className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`} 
                onClick={closeMenu}
              >
                {t('navigation.demo')}
              </Link>
            </li>
          </ul>
          
          {/* Sélecteur de langue */}
          <div className="nav-language">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
