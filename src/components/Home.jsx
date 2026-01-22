import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ChatInterface from './ChatInterface';
import AboutUs from './AboutUs';
import TechPartners from './TechPartners';
import Careers from './Careers';
import Features from './Features';
import Integrations from './Integrations';
import DecisionProcess from './DecisionProcess';
import Footer from './Footer';
import { LanguageContext } from '../App';

const Home = ({ isLoading }) => {
    const { t } = useContext(LanguageContext);

    return (
        <main className="home-page">
            <section className="hero-section" style={{ height: '100vh', position: 'relative' }}>
                <ChatInterface isLanding={true} isLoading={isLoading} />
            </section>

            {!isLoading && (
                <motion.div
                    className="content-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="section-light">
                        <TechPartners />
                    </div>
                    <div className="section-dark">
                        <AboutUs />
                    </div>
                    <div className="section-light">
                        <Features />
                    </div>
                    <div className="section-dark">
                        <Careers />
                    </div>
                    <Integrations />
                    <div className="section-dark">
                        <DecisionProcess />
                    </div>
                    <div className="section-dark">
                        <Footer />
                    </div>
                </motion.div>
            )}
        </main>
    );
};

export default Home;
