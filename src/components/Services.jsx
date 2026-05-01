import React from 'react';
import { Headphones, Radio, Mic2, Calendar, ArrowRight, Check, Ticket, MapPin, Star } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import './Services.css';

/* ── DJ mode services ─────────────────────────────────── */
const djServices = [
  {
    id: 'club-dj',
    icon: <Headphones size={28} />,
    title: 'Club DJ Sets',
    description:
      'High-energy sets crafted for clubs, festivals, and private events. From intimate venues to massive stages.',
    features: ['4–6 hour sets', 'Custom playlist curation', 'Technical rider included'],
    accent: '#ff2a5f',
  },
  {
    id: 'music-production',
    icon: <Radio size={28} />,
    title: 'Music Production',
    description:
      'Original tracks, remixes, and collaborations. Studio sessions that turn your vision into a release-ready track.',
    features: ['Original compositions', 'Artist remixes', 'Sample packs & stems'],
    accent: '#8a2be2',
    featured: true,
  },
  {
    id: 'live-pa',
    icon: <Mic2 size={28} />,
    title: 'Live PA',
    description:
      'A truly unique performance blending live instruments, synthesis, and DJ craft into one seamless experience.',
    features: ['Hybrid live/DJ setup', 'Improvised elements', 'Custom visuals available'],
    accent: '#00f0ff',
  },
];

/* ── Listener mode highlights ─────────────────────────── */
const listenerHighlights = [
  {
    id: 'vip-experience',
    icon: <Star size={28} />,
    title: 'VIP Experience',
    description:
      'Skip the queue, access exclusive backstage areas, and enjoy the show from the best spot in the venue.',
    features: ['Priority entry', 'Backstage access', 'Exclusive merch bundle'],
    accent: '#ff2a5f',
  },
  {
    id: 'festival-packages',
    icon: <Ticket size={28} />,
    title: 'Festival Packages',
    description:
      'Full weekend passes for the biggest electronic music festivals. Camping, food tokens, and more included.',
    features: ['Multi-day passes', 'Camping included', 'Curated DJ lineups'],
    accent: '#8a2be2',
    featured: true,
  },
  {
    id: 'local-shows',
    icon: <MapPin size={28} />,
    title: 'Local Shows',
    description:
      'Find shows near you. Intimate club nights and underground events where the music hits hardest.',
    features: ['City filtering', 'Email reminders', 'Guest list requests'],
    accent: '#00f0ff',
  },
];

const upcomingShows = [
  { date: 'Jun 14', venue: 'Fabric London', city: 'London, UK' },
  { date: 'Jun 28', venue: 'Tresor', city: 'Berlin, DE' },
  { date: 'Jul 5',  venue: 'Robert Johnson', city: 'Offenbach, DE' },
  { date: 'Jul 19', venue: 'Output', city: 'New York, US' },
];

const Services = () => {
  const { isDJMode } = useMode();
  const cards = isDJMode ? djServices : listenerHighlights;

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header animate-fade-in">
          <span className="section-label">
            {isDJMode ? 'What I Do' : 'Your Experience'}
          </span>
          <h2 className="section-title">
            {isDJMode
              ? <>Services &amp; <span className="text-gradient">Bookings</span></>
              : <>Attend &amp; <span className="text-gradient">Discover</span></>
            }
          </h2>
          <p className="section-sub">
            {isDJMode
              ? 'Whether you need a headliner, a collaborator, or a producer — let\'s make something electric.'
              : 'From VIP nights to local club events — find the experience that\'s right for you.'
            }
          </p>
        </div>

        <div className="services-grid">
          {cards.map((s) => (
            <div
              key={s.id}
              className={`service-card glass-panel ${s.featured ? 'service-card--featured' : ''}`}
            >
              {s.featured && <div className="service-badge">{isDJMode ? 'Most Popular' : 'Best Value'}</div>}
              <div className="service-icon" style={{ color: s.accent, background: `${s.accent}18` }}>
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <ul className="service-features">
                {s.features.map((f, i) => (
                  <li key={i}>
                    <Check size={14} className="check-icon" style={{ color: s.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                id={`book-${s.id}`}
                className="service-cta"
                style={{ color: s.accent }}
              >
                {isDJMode ? 'Book Now' : 'Get Tickets'} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>

        {/* Upcoming Shows */}
        <div className="shows-panel glass-panel animate-fade-in" id="contact">
          <div className="shows-header">
            <div>
              <span className="section-label">On Tour</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                Upcoming <span className="text-gradient">Shows</span>
              </h2>
            </div>
            <a
              href="mailto:booking@djsync.com"
              className="btn btn-primary"
            >
              {isDJMode
                ? <><Calendar size={16} /> Request a Date</>
                : <><Ticket size={16} /> Get Tickets</>
              }
            </a>
          </div>
          <div className="shows-list">
            {upcomingShows.map((show, i) => (
              <div key={i} className="show-item">
                <span className="show-date text-gradient">{show.date}</span>
                <div className="show-divider" />
                <div>
                  <p className="show-venue">{show.venue}</p>
                  <p className="show-city">{show.city}</p>
                </div>
                <a
                  href="mailto:booking@djsync.com"
                  className="btn btn-outline show-btn"
                >
                  {isDJMode ? 'Details' : 'Tickets'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
