import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('IT');

  const translations = {
    IT: {
      nav: { home: 'Home', about: 'Chi Siamo', services: 'Soluzioni', contact: 'Contatti' },
      hero: {
        title: 'Dai più valore al tuo customer care',
        subtitle: 'Non solo bot, ma il meglio dell’AI e delle persone. Insieme!',
        cta: 'Richiedi Demo'
      },
      features: {
        title: 'Perché scegliere Ellysse?',
        items: [
          { title: 'Efficienza Operativa', desc: 'Automatizza le attività ripetitive.' },
          { title: 'Ottimizzazione Risorse', desc: 'Gestisci i picchi senza costi extra.' },
          { title: 'Collaborazione Uomo + AI', desc: 'Gli assistenti virtuali supportano gli operatori.' }
        ]
      },
      form: {
        title: 'Prenota una Demo',
        name: 'Nome',
        email: 'Email',
        company: 'Azienda',
        message: 'Messaggio',
        submit: 'Invia Richiesta',
        success: 'Richiesta inviata con successo!'
      }
    },
    EN: {
      nav: { home: 'Home', about: 'About Us', services: 'Solutions', contact: 'Contact' },
      hero: {
        title: 'Add Value to Your Customer Care',
        subtitle: 'Not just bots, but the best of AI and people. Together!',
        cta: 'Book a Demo'
      },
      features: {
        title: 'Why Choose Ellysse?',
        items: [
          { title: 'Operational Efficiency', desc: 'Automate repetitive tasks.' },
          { title: 'Resource Optimization', desc: 'Manage peaks without extra costs.' },
          { title: 'Human + AI Collaboration', desc: 'Virtual assistants support operators.' }
        ]
      },
      form: {
        title: 'Book a Demo',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send Request',
        success: 'Request sent successfully!'
      }
    },
    FR: {
      nav: { home: 'Accueil', about: 'À Propos', services: 'Solutions', contact: 'Contact' },
      hero: {
        title: 'Donnez plus de valeur à votre service client',
        subtitle: 'Pas seulement des bots, mais le meilleur de l\'IA et des humains. Ensemble !',
        cta: 'Réserver une démo'
      },
      features: {
        title: 'Pourquoi choisir Ellysse ?',
        items: [
          { title: 'Efficacité Opérationnelle', desc: 'Automatisez les tâches répétitives.' },
          { title: 'Optimisation des Ressources', desc: 'Gérez les pics sans coûts supplémentaires.' },
          { title: 'Collaboration Homme + IA', desc: 'Les assistants virtuels soutiennent les opérateurs.' }
        ]
      },
      form: {
        title: 'Réserver une Démo',
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        message: 'Message',
        submit: 'Envoyer la Demande',
        success: 'Demande envoyée avec succès !'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
          <DemoForm />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
