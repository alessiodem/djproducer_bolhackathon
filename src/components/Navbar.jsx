import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import ModeSwitch from './ModeSwitch';
import { useMode } from '../context/ModeContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDJMode } = useMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <Music className="logo-icon" />
          <span className="logo-text">DJ <span className="text-gradient">4 GAYS</span></span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#tracks" onClick={() => setMobileMenuOpen(false)}>
            {isDJMode ? 'Releases' : 'Music'}
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>
            {isDJMode ? 'Services' : 'Shows'}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary nav-btn"
          >
            {isDJMode ? 'Book Now' : 'Get Tickets'}
          </a>
        </nav>

        {/* Mode switch visible on desktop */}
        <div className="navbar-mode-switch">
          <ModeSwitch />
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
