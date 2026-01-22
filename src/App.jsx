import React, { useState, createContext, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ChatInterface from './components/ChatInterface';
import './App.css';

export const LanguageContext = createContext();

const AppContent = () => {
  const [language, setLanguage] = useState('IT');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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
        welcome: 'Domande su Ellysse?',
        messages: [
          { id: 1, type: 'user', text: 'Vorrei prenotare una demo', delay: 500 },
          { id: 2, type: 'ai', text: 'Come posso aiutarti?', delay: 1500 },
          { id: 3, type: 'user', text: 'Mi mostri le funzionalità omnichannel?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Certamente! La nostra piattaforma unifica tutti i canali.', delay: 4500 }
        ],
        inputPlaceholder: 'Dì a Ellysse cosa farà il tuo agente...',
        suggestions: [
          { label: 'Cos\'è Ellysse?', text: 'Cos\'è Ellysse?' },
          { label: 'Integrazione AI', text: 'Come funziona l\'integrazione AI?' },
          { label: 'Sorprendimi', text: 'Sorprendimi' }
        ],
        scenarios: {
          local: {
            intro: "Protocollo di sicurezza attivato. Per procedere devo sapere se ti fidi di me. Parmigiano Reggiano o Grana Padano?",
            correct: "Risposta corretta ✅. I miei circuiti stavano per andare in cortocircuito dalla tensione. Benvenuto, amico.",
            wrong: "Ahia. Rilevo un errore critico nel gusto... Ma siccome sono un'AI educata, farò finta di non aver letto. 😉"
          },
          meta: {
            intro: "Grazie per aver cliccato! Stavo giusto facendo una pausa caffè... virtuale. ☕️ Dimmi la verità: sei un robot anche tu o sei un umano vero?",
            response: "Mmmh, è esattamente quello che direbbe un robot programmato bene. 🤔 Comunque, mi fido. Come posso aiutarti prima che i miei sviluppatori si accorgano che sto chiacchierando?"
          },
          oracle: {
            intro: "Oggi mi sento veggente. Scrivimi la prima parola che ti passa per la testa (non pensare, scrivi!).",
            responsePrefix: "Analisi psicometrica completata: ",
            responseSuffix: ". Previsione per il tuo business: Cadrai sempre in piedi, ma attenzione a chi ti liscia il pelo solo per interesse. 😼 Torniamo seri: di cosa hai bisogno?"
          }
        }
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
      },
      integrations: {
        title: 'Integrazioni Perfette',
        subtitle: 'Collega Contatta con i tuoi strumenti e piattaforme preferiti per un flusso di lavoro unificato.'
      },
      decision: {
        title: 'Come lavorano i nostri bot / agenti',
        subtitle: 'Comprendi la logica dietro ogni interazione.',
        workflow: {
          input: 'Input Utente',
          intent: 'Analisi Intento',
          context: 'Recupero Contesto',
          generation: 'Generazione AI',
          response: 'Risposta'
        }
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
        welcome: 'Ask me about Ellysse',
        messages: [
          { id: 1, type: 'user', text: 'I need to book a demo', delay: 500 },
          { id: 2, type: 'ai', text: 'How can I help?', delay: 1500 },
          { id: 3, type: 'user', text: 'Can you show me the omnichannel features?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Absolutely! Our platform unifies all channels.', delay: 4500 }
        ],
        inputPlaceholder: 'Tell Ellysse what your agent will do...',
        suggestions: [
          { label: 'What is Ellysse?', text: 'What is Ellysse?' },
          { label: 'AI Integration', text: 'How does the AI integration work?' },
          { label: 'Surprise me', text: 'Surprise me' }
        ],
        scenarios: {
          local: {
            intro: "Security protocol activated. To proceed, I need to know if I can trust you. Parmigiano Reggiano or Grana Padano?",
            correct: "Correct answer ✅. My circuits were about to short from the tension. Welcome, friend.",
            wrong: "Ouch. I detect a critical error in taste... But since I'm a polite AI, I'll pretend I didn't read that. 😉"
          },
          meta: {
            intro: "Thanks for clicking! I was just taking a virtual coffee break. ☕️ Tell me the truth: are you a robot too or a real human?",
            response: "Hmm, that's exactly what a well-programmed robot would say. 🤔 Anyway, I trust you. How can I help before my developers notice I'm chatting?"
          },
          oracle: {
            intro: "I'm feeling psychic today. Type the first word that pops into your head (don't think, just type!).",
            responsePrefix: "Psychometric analysis completed: ",
            responseSuffix: ". Business prediction: You'll always land on your feet, but watch out for those who flatter you just for interest. 😼 Let's get serious: what do you need?"
          }
        }
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
      },
      integrations: {
        title: 'Seamless Integrations',
        subtitle: 'Connect Ellysse with your favorite tools and platforms for a unified workflow.'
      },
      decision: {
        title: 'How our bots / agents work',
        subtitle: 'Understand the logic behind every interaction.',
        workflow: {
          input: 'User Input',
          intent: 'Intent Analysis',
          context: 'Context Retrieval',
          generation: 'AI Generation',
          response: 'Response'
        }
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
        welcome: 'Questions sur Ellysse ?',
        messages: [
          { id: 1, type: 'user', text: 'Je souhaite réserver une démo', delay: 500 },
          { id: 2, type: 'ai', text: 'Comment puis-je vous aider ?', delay: 1500 },
          { id: 3, type: 'user', text: 'Pouvez-vous me montrer les fonctionnalités omnicanales ?', delay: 3000 },
          { id: 4, type: 'ai', text: 'Absolument ! Notre plateforme unifie tous les canaux.', delay: 4500 }
        ],
        inputPlaceholder: 'Dites à Ellysse ce que fera votre agent...',
        suggestions: [
          { label: 'Qu\'est-ce qu\'Ellysse ?', text: 'Qu\'est-ce qu\'Ellysse ?' },
          { label: 'Intégration IA', text: 'Comment fonctionne l\'intégration de l\'IA ?' },
          { label: 'Surprenez-moi', text: 'Surprenez-moi' }
        ],
        scenarios: {
          local: {
            intro: "Protocole de sécurité activé. Pour continuer, je dois savoir si je peux vous faire confiance. Parmigiano Reggiano ou Grana Padano ?",
            correct: "Bonne réponse ✅. Mes circuits allaient court-circuiter à cause de la tension. Bienvenue, l'ami.",
            wrong: "Aïe. Je détecte une erreur critique de goût... Mais comme je suis une IA polie, je vais faire semblant de ne pas avoir lu. 😉"
          },
          meta: {
            intro: "Merci d'avoir cliqué ! Je prenais juste une pause café virtuelle. ☕️ Dites-moi la vérité : êtes-vous aussi un robot ou un véritable humain ?",
            response: "Hmm, c'est exactement ce que dirait un robot bien programmé. 🤔 Bref, je vous fais confiance. Comment puis-je vous aider avant que mes développeurs ne remarquent que je discute ?"
          },
          oracle: {
            intro: "Je me sens voyant aujourd'hui. Écrivez le premier mot qui vous passe par la tête (ne réfléchissez pas, écrivez !).",
            responsePrefix: "Analyse psychométrique terminée : ",
            responseSuffix: ". Prédiction pour votre entreprise : Vous retomberez toujours sur vos pieds, mais méfiez-vous de ceux qui vous flattent par intérêt. 😼 Soyons sérieux : de quoi avez-vous besoin ?"
          }
        }
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
      },
      integrations: {
        title: 'Intégrations Transparentes',
        subtitle: 'Connectez Ellysse avec vos outils et plateformes préférés pour un flux de travail unifié.'
      },
      decision: {
        title: 'Comment fonctionnent nos bots / agents',
        subtitle: 'Comprenez la logique derrière chaque interaction.',
        workflow: {
          input: 'Entrée Utilisateur',
          intent: 'Analyse d\'Intention',
          context: 'Récupération de Contexte',
          generation: 'Génération IA',
          response: 'Réponse'
        }
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      <div className="app">
        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}
            >
              <Header />
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/chat" element={<ChatInterface />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
