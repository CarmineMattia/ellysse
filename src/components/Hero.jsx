import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Scene3D from './Scene3D';
import './Hero.css';

const Hero = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="hero" id="home">
            <Scene3D />
            <div className="hero-overlay">
                <div className="container hero-content">
                    <h1 className="hero-title text-gradient">{t.hero.title}</h1>
                    <p className="hero-subtitle">{t.hero.subtitle}</p>
                    <a href="#contact" className="btn-primary hero-cta">{t.hero.cta}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
