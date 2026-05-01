import React, { useEffect, useRef } from 'react';
import { ChevronDown, Play, Ticket } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import './Hero.css';

const Hero = () => {
  const { isDJMode } = useMode();
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 42, 95, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(138, 43, 226, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={particlesRef} className="hero-canvas" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot" />
          {isDJMode ? 'Available for Bookings' : 'Now Streaming Worldwide'}
        </div>
        <h1 className="hero-title animate-fade-in delay-1">
          {isDJMode ? (
            <>Feel the<br /><span className="text-gradient">Pulse</span><br />of Sound</>
          ) : (
            <>Lose Yourself<br />in the<br /><span className="text-gradient">Music</span></>
          )}
        </h1>
        <p className="hero-sub animate-fade-in delay-2">
          {isDJMode
            ? <>DJ · Producer · Sound Designer<br />Crafting unforgettable electronic music experiences.</>
            : <>Electronic music for the true fan.<br />Explore, stream, and catch the next show near you.</>
          }
        </p>
        <div className="hero-actions animate-fade-in delay-3">
          <a href="#tracks" className="btn btn-primary">
            <Play size={18} />
            {isDJMode ? 'Latest Releases' : 'Listen Now'}
          </a>
          <a href="#contact" className="btn btn-outline">
            {isDJMode ? 'Book a Show' : 'View Upcoming Shows'}
          </a>
        </div>

        <div className="hero-stats animate-fade-in delay-3">
          {isDJMode ? (
            <>
              <div className="hero-stat">
                <span className="stat-num text-gradient">200+</span>
                <span className="stat-label">Shows Played</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-num text-gradient">50+</span>
                <span className="stat-label">Releases</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-num text-gradient">1M+</span>
                <span className="stat-label">Streams</span>
              </div>
            </>
          ) : (
            <>
              <div className="hero-stat">
                <span className="stat-num text-gradient">1M+</span>
                <span className="stat-label">Streams</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-num text-gradient">4</span>
                <span className="stat-label">Upcoming Shows</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-num text-gradient">50+</span>
                <span className="stat-label">Tracks</span>
              </div>
            </>
          )}
        </div>
      </div>

      <a href="#tracks" className="hero-scroll">
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
