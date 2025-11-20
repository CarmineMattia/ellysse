import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Scene3D from './Scene3D';
import ChatInterface from './ChatInterface';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = ({ isLoading }) => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="hero" id="home">
            <Scene3D />
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="loading-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="loading-bar-container">
                            <motion.div
                                className="loading-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </div>
                        <p className="loading-text">Loading Experience...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isLoading && (
                    <motion.div
                        className="hero-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="container hero-content-wrapper">
                            <div className="hero-text-content">
                                <h1 className="hero-title text-gradient">{t.hero.title}</h1>
                                <p className="hero-subtitle">{t.hero.subtitle}</p>
                                <a href="#contact" className="btn-primary hero-cta">{t.hero.cta}</a>
                            </div>
                            <ChatInterface />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
