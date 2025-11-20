import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { t } = useContext(LanguageContext);

    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <img src="/assets/Ellysse-logo.png" alt="Ellysse" className="footer-logo" />
                        <p className="footer-desc">
                            Ellysse srl<br />
                            Via Danubio, 19<br />
                            42124 Reggio Emilia (RE)<br />
                            Italy
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/ellysse/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://www.youtube.com/channel/UC_pspvd4-_d2WAXWXzFP81w" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="#home">{t.nav.home}</a></li>
                            <li><a href="#about">{t.nav.about}</a></li>
                            <li><a href="#services">{t.nav.services}</a></li>
                            <li><a href="#contact">{t.nav.contact}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Certifications</h4>
                        <div className="cert-logos">
                            <img src="/assets/IQNET-Certification.png" alt="IQNet" />
                            <img src="/assets/img-certidication.png" alt="Certification" />
                        </div>
                        <a href="/assets/Certificato_1090.2024_EN.pdf" download className="download-link">
                            Download ISO 9001 Certificate
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ellysse srl. Part of <a href="https://mapsgroup.it" target="_blank" rel="noopener noreferrer">Maps Group</a>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
