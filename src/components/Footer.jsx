import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { FaLinkedin, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const { t } = useContext(LanguageContext);

    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <img src="/assets/Elly-logo.png" alt="Elly" className="footer-logo" />
                        <p className="footer-desc">
                            Elly srl<br />
                            Via Danubio, 19<br />
                            42124 Reggio Emilia (RE)<br />
                            Italy
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/elly/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
                        <h4>Contatti</h4>
                        <ul>
                            <li>
                                <a href="tel:+390522232699" className="contact-link">
                                    <FaPhone className="rotated-phone" /> +39 0522 232699
                                </a>
                            </li>
                            <li>
                                <a href="tel:+390521052300" className="contact-link">
                                    <FaPhone className="rotated-phone" /> +39 0521 052300
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@elly.ai" className="contact-link">
                                    <FaEnvelope /> Email: info@elly.ai
                                </a>
                            </li>
                            <li>
                                <a href="mailto:elly@pec.it" className="contact-link">
                                    <FaEnvelope /> Pec: elly@pec.it
                                </a>
                            </li>
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
                    <p>&copy; {new Date().getFullYear()} Elly srl.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
