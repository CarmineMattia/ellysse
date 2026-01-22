import React from 'react';
import './TechPartners.css';
import { FaWhatsapp, FaFacebookMessenger, FaTelegram, FaMicrosoft } from 'react-icons/fa';
import { SiAmazonalexa, SiSalesforce } from 'react-icons/si';

const TechPartners = () => {
    const partners = [
        {
            name: 'Alcatel',
            logo: 'https://www.alcatelmobile.com/wp-content/uploads/2025/04/cropped-alcatel-logo.png',
            fallback: 'ALC'
        },
        { name: 'Alexa', icon: <SiAmazonalexa />, fallback: 'ALX' },
        {
            name: 'Nethesis',
            logo: 'https://logo.clearbit.com/nethesis.it',
            fallback: 'NET'
        },
        { name: 'WhatsApp', icon: <FaWhatsapp />, fallback: 'WA' },
        {
            name: 'Kalliope',
            logo: 'https://logo.clearbit.com/kalliope.com',
            fallback: 'KAL'
        },
        { name: 'Microsoft', icon: <FaMicrosoft />, fallback: 'MS' },
        {
            name: 'AI Week',
            logo: 'https://logo.clearbit.com/aiweek.it',
            fallback: 'AIW'
        },
        { name: 'Messenger', icon: <FaFacebookMessenger />, fallback: 'MSG' },
        { name: 'Telegram', icon: <FaTelegram />, fallback: 'TG' },
        { name: 'Salesforce', icon: <SiSalesforce />, fallback: 'SF' }
    ];

    // Duplicate partners array for seamless loop
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="tech-partners">
            <div className="partners-marquee">
                <div className="partners-track">
                    {duplicatedPartners.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <div className="partner-logo-wrapper">
                                {partner.icon ? (
                                    <div className="partner-icon">
                                        {partner.icon}
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="partner-logo"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="partner-fallback" style={{ display: 'none' }}>
                                            {partner.fallback}
                                        </div>
                                    </>
                                )}
                            </div>
                            <span className="partner-name">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechPartners;
