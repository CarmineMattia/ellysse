import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // We'll create this or use inline styles/modules. Let's use a separate CSS file for cleaner separation if needed, or just styled-components/modules. For simplicity with vanilla CSS, I'll add styles to index.css or a specific file. Let's use inline/module or just standard CSS classes defined in index.css or a new Header.css.
// Actually, for a small project, I'll put component styles in the component file or a dedicated CSS. Let's create Header.css next.

const Header = () => {
    const { language, setLanguage, t } = useContext(LanguageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-section">
                    <img src="/assets/maps-logo.svg" alt="Maps Group" className="maps-logo" />
                    <div className="divider"></div>
                    <img src="/assets/Ellysse-logo.png" alt="Ellysse" className="ellysse-logo" />
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-switcher">
                        <button
                            className={language === 'IT' ? 'active' : ''}
                            onClick={() => setLanguage('IT')}
                        >IT</button>
                        <button
                            className={language === 'EN' ? 'active' : ''}
                            onClick={() => setLanguage('EN')}
                        >EN</button>
                        <button
                            className={language === 'FR' ? 'active' : ''}
                            onClick={() => setLanguage('FR')}
                        >FR</button>
                    </div>
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
