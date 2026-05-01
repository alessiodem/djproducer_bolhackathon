import React from 'react';
import { ModeProvider } from './context/ModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <ModeProvider>
      <div className="app-container">
        <Navbar />
        <Hero />
        <Tracks />
        <Services />
        <Footer />
      </div>
    </ModeProvider>
  );
}

export default App;
