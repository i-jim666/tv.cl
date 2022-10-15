import React from 'react';
import ReactDOM from 'react-dom/client';

// Global styles
import './scss/components/global-components/base.scss'
import './scss/components/global-components/header.scss'
import './scss/components/global-components/footer.scss'

// Global components
import Header from './global-components/Header.js';

// Components
import Hero from './components/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>
);

// reportWebVitals(console.log);