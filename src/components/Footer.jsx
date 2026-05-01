import React from 'react';
import { Music, Instagram, Twitter, Youtube, Disc3, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-glow" />
    <div className="container footer-inner">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <Music className="logo-icon" />
            <span className="logo-text">DJ <span className="text-gradient">SYNC</span></span>
          </div>
          <p className="footer-tagline">
            Crafting electronic experiences that move minds, bodies, and souls.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" id="footer-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" id="footer-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://youtube.com" id="footer-youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a href="https://soundcloud.com" id="footer-soundcloud" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
              <Disc3 size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tracks">Releases</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Book Now</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Contact</h4>
          <ul>
            <li>
              <Mail size={14} />
              <a href="mailto:booking@djsync.com">booking@djsync.com</a>
            </li>
            <li>
              <MapPin size={14} />
              <span>Berlin, Germany</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} DJ SYNC. All rights reserved.
        </p>
        <p className="footer-copy" style={{ opacity: 0.4 }}>
          Designed with ♥ for the dancefloor.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
