import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FlagIT, FlagEN, FlagFR } from './Flags';
import './Header.css';

const Header = () => {
    const { language, setLanguage, t } = useContext(LanguageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-section">
                    <img src="/assets/maps-logo.png" alt="Maps Group" className="maps-logo" />
                    <div className="divider"></div>
                    <img src="/assets/Ellysse-logo.png" alt="Ellysse" className="ellysse-logo" />
                    <span className="ellysse-text">Ellysse</span>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a></li>
                        <li className="mobile-lang-selector">
                            <div className="lang-switcher-mobile">
                                <button
                                    className={language === 'IT' ? 'active' : ''}
                                    onClick={() => setLanguage('IT')}
                                    aria-label="Italiano"
                                >
                                    <FlagIT className="flag-icon-mobile" />
                                </button>
                                <button
                                    className={language === 'EN' ? 'active' : ''}
                                    onClick={() => setLanguage('EN')}
                                    aria-label="English"
                                >
                                    <FlagEN className="flag-icon-mobile" />
                                </button>
                                <button
                                    className={language === 'FR' ? 'active' : ''}
                                    onClick={() => setLanguage('FR')}
                                    aria-label="Français"
                                >
                                    <FlagFR className="flag-icon-mobile" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-dropdown-container">
                        <button
                            className="lang-dropdown-trigger"
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            aria-label="Select Language"
                        >
                            {language === 'IT' && <FlagIT className="flag-icon" />}
                            {language === 'EN' && <FlagEN className="flag-icon" />}
                            {language === 'FR' && <FlagFR className="flag-icon" />}
                        </button>

                        {isLangDropdownOpen && (
                            <div className="lang-dropdown-menu">
                                <button
                                    className={`lang-option ${language === 'IT' ? 'active' : ''}`}
                                    onClick={() => { setLanguage('IT'); setIsLangDropdownOpen(false); }}
                                >
                                    <FlagIT className="flag-icon" /> <span>IT</span>
                                </button>
                                <button
                                    className={`lang-option ${language === 'EN' ? 'active' : ''}`}
                                    onClick={() => { setLanguage('EN'); setIsLangDropdownOpen(false); }}
                                >
                                    <FlagEN className="flag-icon" /> <span>EN</span>
                                </button>
                                <button
                                    className={`lang-option ${language === 'FR' ? 'active' : ''}`}
                                    onClick={() => { setLanguage('FR'); setIsLangDropdownOpen(false); }}
                                >
                                    <FlagFR className="flag-icon" /> <span>FR</span>
                                </button>
                            </div>
                        )}
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
