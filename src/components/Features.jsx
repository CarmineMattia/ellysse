import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import './Features.css';

const Features = () => {
    const { t } = useContext(LanguageContext);

    const icons = [<FaRocket />, <FaChartLine />, <FaUsers />];

    return (
        <section className="features section-padding" id="services">
            <div className="container">
                <h2 className="section-title text-gradient">{t.features.title}</h2>
                <div className="features-grid">
                    {t.features.items.map((item, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
                                {icons[index]}
                            </div>
                            <h3 className="feature-title">{item.title}</h3>
                            <p className="feature-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
