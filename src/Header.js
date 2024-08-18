import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="header-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <button className="lang-switch" onClick={() => setLanguage(language === 'en' ? 'cs' : 'en')}>
          {language === 'en' ? 'CS' : 'EN'}
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>{t.home}</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>{t.projects}</Link></li>
            <li><Link to="/FAQ" onClick={() => setMenuOpen(false)}>{t.FAQ}</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
