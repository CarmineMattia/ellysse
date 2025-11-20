import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './AboutUs.css';

const AboutUs = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="about-us" id="about">
            <div className="container about-content">
                <div className="about-text">
                    <h2 className="section-title">{t.about.title}</h2>
                    <p className="about-description">
                        {t.about.description1} <strong>Maps Group</strong>.
                    </p>
                    <p className="about-description">
                        {t.about.description2} <strong>'Contatta'</strong>, {t.about.description3} <span className="text-highlight">Omnichannel</span> {t.about.description4} <span className="text-highlight">Artificial Intelligence</span>.
                    </p>
                </div>
                <div className="about-image">
                    <img src="/assets/about-elly.jpeg" alt="Ellysse AI" className="about-img" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
