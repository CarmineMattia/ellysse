import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Integrations.css';
import { FaWhatsapp, FaFacebookMessenger, FaTelegram, FaHome, FaMicrosoft } from 'react-icons/fa';
import { SiAmazonalexa, SiSalesforce } from 'react-icons/si';

const Integrations = () => {
    const { t } = useContext(LanguageContext);

    const integrations = [
        { name: 'Alexa', icon: <SiAmazonalexa /> },
        { name: 'WhatsApp', icon: <FaWhatsapp /> },
        { name: 'Microsoft Dynamics', icon: <FaMicrosoft /> },
        { name: 'Property Software', icon: <FaHome /> },
        { name: 'Messenger', icon: <FaFacebookMessenger /> },
        { name: 'Telegram', icon: <FaTelegram /> },
        { name: 'Salesforce', icon: <SiSalesforce /> }
    ];

    return (
        <section className="integrations section-light" id="integrations">
            <div className="container">
                <h2 className="section-title text-center">
                    {t.integrations?.title || 'INTEGRAZIONI PERFETTE'}
                </h2>
                <p className="section-subtitle">
                    {t.integrations?.subtitle || 'Collega Contatta con i tuoi strumenti e piattaforme preferiti per un flusso di lavoro unificato.'}
                </p>

                <div className="integrations-grid">
                    {integrations.map((item, index) => (
                        <div key={index} className="integration-card">
                            <div className="integration-icon-wrapper">
                                {item.icon}
                            </div>
                            <span className="integration-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
