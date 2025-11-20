import React from 'react';
import './TechPartners.css';

const TechPartners = () => {
    const partners = [
        {
            name: 'Alcatel',
            logo: 'https://www.alcatelmobile.com/wp-content/uploads/2025/04/cropped-alcatel-logo.png',
            fallback: 'ALC'
        },
        {
            name: 'Nethesis',
            logo: 'https://logo.clearbit.com/nethesis.it',
            fallback: 'NET'
        },
        {
            name: 'Kalliope',
            logo: 'https://logo.clearbit.com/kalliope.com',
            fallback: 'KAL'
        },
        {
            name: 'AI Week',
            logo: 'https://logo.clearbit.com/aiweek.it',
            fallback: 'AIW'
        }
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
