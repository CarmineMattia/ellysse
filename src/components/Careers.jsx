import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Careers.css';

const Careers = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="careers" id="careers">
            <div className="container careers-container">
                <div className="careers-card">
                    <h2 className="careers-title">{t.careers.title}</h2>
                    <p className="careers-description">
                        {t.careers.description}
                    </p>
                    <div className="careers-values">
                        <span className="value-tag">{t.careers.value1}</span>
                        <span className="value-tag">{t.careers.value2}</span>
                    </div>
                    <a
                        href="https://mapsgroup.it/posizioni-aperte/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary careers-cta"
                    >
                        {t.careers.cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
