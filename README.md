# 🚀 Ellysse AI - Landing Page 
https://ellysse.netlify.app/

> **Nota**: Questo progetto è stato creato puramente per divertimento e sperimentazione! 🎨✨

## 📖 Descrizione

Una landing page moderna e accattivante per **Ellysse AI**, l'unità specializzata in AI & Omnichannel di **Maps Group**. Il sito presenta un design premium con animazioni 3D, effetti glassmorphism e un'interfaccia chat animata che mostra le capacità omnichannel della piattaforma.

## ✨ Caratteristiche Principali

### 🎯 Sezioni
- **Hero Section**: Animazione 3D interattiva con una sfera distorta e stelle
- **Chat Interface Animata**: Interfaccia chat fluttuante con messaggi che appaiono sequenzialmente
- **Chi Siamo**: Presentazione dell'azienda e del prodotto proprietario 'Contatta'
- **Lavora con Noi**: Sezione dedicata alle opportunità di carriera
- **Features**: Panoramica delle funzionalità principali
- **Demo Form**: Modulo di contatto per richiedere una demo

### 🌍 Multilingua
Supporto completo per **3 lingue**:
- 🇮🇹 Italiano
- 🇬🇧 English
- 🇫🇷 Français

### 🎨 Design
- **Tema**: Dark mode con accenti arancioni (#FF6B00)
- **Effetti**: Glassmorphism, animazioni fluide, transizioni smooth
- **3D**: Rendering 3D con Three.js tramite React Three Fiber
- **Responsive**: Completamente ottimizzato per desktop, tablet e mobile

## 🛠️ Tecnologie Utilizzate

- **React** - Framework UI
- **Vite** - Build tool velocissimo
- **React Three Fiber** - Rendering 3D con Three.js
- **React Icons** - Icone moderne
- **CSS3** - Styling avanzato con variabili CSS

## 🚀 Come Iniziare

### Prerequisiti
- Node.js (versione 14 o superiore)
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/CarmineMattia/ellysse.git
   cd ellysse
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   ```
   http://localhost:5173
   ```

## 📦 Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`.

## 📁 Struttura del Progetto

```
1shotProject/
├── public/
│   └── assets/          # Immagini e risorse statiche
├── src/
│   ├── components/      # Componenti React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ChatInterface.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Careers.jsx
│   │   ├── Features.jsx
│   │   ├── DemoForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Componente principale + traduzioni
│   ├── index.css        # Stili globali
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `src/index.css`:
```css
--color-primary: #FF6B00;      /* Arancione Ellysse */
--color-bg-dark: #0a0a0a;      /* Sfondo scuro */
--color-text-white: #ffffff;   /* Testo bianco */
--color-text-gray: #b0b0b0;    /* Testo grigio */
```

### Traduzioni
Le traduzioni sono gestite nel file `src/App.jsx` nell'oggetto `translations`. Puoi facilmente aggiungere nuove lingue o modificare i testi esistenti.

## 🌟 Funzionalità Speciali

### Chat Interface Animata
La chat interface nella Hero section simula una conversazione dal vivo:
- Messaggi che appaiono sequenzialmente
- Animazione di fade-in e float
- Cambio automatico della lingua
- Effetto glassmorphism

### Animazione 3D
La sfera 3D nella Hero section:
- Rotazione automatica
- Distorsione dinamica
- Illuminazione personalizzata
- Sfondo stellato animato

## 📝 Note di Sviluppo

Questo progetto è stato creato come esperimento per esplorare:
- ✅ Animazioni 3D in React
- ✅ Effetti glassmorphism moderni
- ✅ Gestione multilingua senza librerie esterne
- ✅ Design premium con CSS puro
- ✅ Componenti React riutilizzabili

## 🎉 Crediti

- **Design & Development**: Progetto sperimentale
- **Ispirazione**: Ellysse AI - Maps Group
- **Scopo**: Puro divertimento e apprendimento! 🚀

## 📄 Licenza

Questo è un progetto personale creato per scopi educativi e di sperimentazione.

---

**Fatto con ❤️ e ☕ per divertimento!**
