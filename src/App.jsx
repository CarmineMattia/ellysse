import React, { useState, createContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import AboutUs from './components/AboutUs';
import TechPartners from './components/TechPartners';
import Careers from './components/Careers';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './App.css';

export const LanguageContext = createContext();

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
      },
      chat: {
        messages: [
          { id: 1, type: 'user', text: 'Vorrei prenotare una demo', delay: 500 },
          { id: 2, type: 'ai', text: 'Come posso aiutarti?', delay: 1500 },
          { id: 3, type: 'user', text: 'Mi mostri le funzionalità omnichannel?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Certamente! La nostra piattaforma unifica tutti i canali.', delay: 4500 }
        ]
      },
      about: {
        title: 'Chi Siamo',
        description1: 'Nata nel 2002 a Reggio Emilia, Ellysse è oggi la unit specializzata in AI & Omnichannel di',
        description2: 'Il nostro prodotto proprietario,',
        description3: 'utilizza la Generative AI per gestire le interazioni Human-Human e Human-Bot, migliorando specificamente la Patient Experience in Sanità e il Customer Care in altri settori. Uniamo la potenza dell\'',
        description4: 'con l\''
      },
      careers: {
        title: 'Lavora con Noi',
        description: 'Entra in un ambiente dinamico e orientato all\'innovazione. In Ellysse e Maps Group crediamo nella condivisione della conoscenza e nella trasformazione digitale come motori di crescita.',
        value1: 'Sharing Knowledge',
        value2: 'Digital Transformation',
        cta: 'Vedi Posizioni Aperte'
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
      },
      chat: {
        messages: [
          { id: 1, type: 'user', text: 'I need to book a demo', delay: 500 },
          { id: 2, type: 'ai', text: 'How can I help?', delay: 1500 },
          { id: 3, type: 'user', text: 'Can you show me the omnichannel features?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Absolutely! Our platform unifies all channels.', delay: 4500 }
        ]
      },
      about: {
        title: 'About Us',
        description1: 'Founded in 2002 in Reggio Emilia, Ellysse is now the specialized AI & Omnichannel unit of',
        description2: 'Our proprietary product,',
        description3: 'uses Generative AI to manage Human-Human and Human-Bot interactions, specifically improving Patient Experience in Healthcare and Customer Care in other sectors. We combine the power of',
        description4: 'with'
      },
      careers: {
        title: 'Work with Us',
        description: 'Join a dynamic and innovation-oriented environment. At Ellysse and Maps Group, we believe in knowledge sharing and digital transformation as drivers of growth.',
        value1: 'Sharing Knowledge',
        value2: 'Digital Transformation',
        cta: 'View Open Positions'
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
      },
      chat: {
        messages: [
          { id: 1, type: 'user', text: 'Je souhaite réserver une démo', delay: 500 },
          { id: 2, type: 'ai', text: 'Comment puis-je vous aider ?', delay: 1500 },
          { id: 3, type: 'user', text: 'Pouvez-vous me montrer les fonctionnalités omnicanales ?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Absolument ! Notre plateforme unifie tous les canaux.', delay: 4500 }
        ]
      },
      about: {
        title: 'À Propos',
        description1: 'Fondée en 2002 à Reggio Emilia, Ellysse est aujourd\'hui l\'unité spécialisée en IA & Omnicanal de',
        description2: 'Notre produit propriétaire,',
        description3: 'utilise l\'IA générative pour gérer les interactions Humain-Humain et Humain-Bot, améliorant spécifiquement l\'Expérience Patient dans la Santé et le Service Client dans d\'autres secteurs. Nous unissons la puissance de l\'',
        description4: 'avec l\''
      },
      careers: {
        title: 'Travailler avec Nous',
        description: 'Rejoignez un environnement dynamique et orienté vers l\'innovation. Chez Ellysse et Maps Group, nous croyons au partage des connaissances et à la transformation numérique comme moteurs de croissance.',
        value1: 'Partage de Connaissances',
        value2: 'Transformation Numérique',
        cta: 'Voir les Postes Ouverts'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <TechPartners />
          <Careers />
          <Features />
          <DemoForm />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
