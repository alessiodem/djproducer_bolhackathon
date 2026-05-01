import React, { useState } from 'react';
import { Play, Pause, Clock, Music2, TrendingUp, Heart } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import './Tracks.css';

const tracks = [
  {
    id: 1,
    title: 'Midnight Circuit',
    genre: 'Techno',
    bpm: 138,
    duration: '6:24',
    streams: '320K',
    gradient: 'linear-gradient(135deg, #ff2a5f 0%, #8a2be2 100%)',
    waveColor: '#ff2a5f',
  },
  {
    id: 2,
    title: 'Neon Drift',
    genre: 'House',
    bpm: 124,
    duration: '5:48',
    streams: '215K',
    gradient: 'linear-gradient(135deg, #8a2be2 0%, #00f0ff 100%)',
    waveColor: '#8a2be2',
  },
  {
    id: 3,
    title: 'Pulse Echo',
    genre: 'Melodic Techno',
    bpm: 130,
    duration: '7:10',
    streams: '180K',
    gradient: 'linear-gradient(135deg, #00f0ff 0%, #ff2a5f 100%)',
    waveColor: '#00f0ff',
  },
  {
    id: 4,
    title: 'Dark Matter',
    genre: 'Industrial',
    bpm: 145,
    duration: '5:02',
    streams: '140K',
    gradient: 'linear-gradient(135deg, #ff2a5f 0%, #1a0030 100%)',
    waveColor: '#ff2a5f',
  },
  {
    id: 5,
    title: 'Hyper Violet',
    genre: 'Progressive',
    bpm: 128,
    duration: '8:30',
    streams: '95K',
    gradient: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    waveColor: '#6a11cb',
  },
  {
    id: 6,
    title: 'Solar Wind',
    genre: 'Ambient Techno',
    bpm: 118,
    duration: '9:15',
    streams: '78K',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ff2a5f 100%)',
    waveColor: '#f7971e',
  },
];

const MiniWaveform = ({ color }) => {
  const bars = Array.from({ length: 28 }, () => 20 + Math.random() * 80);
  return (
    <div className="mini-waveform">
      {bars.map((h, i) => (
        <div key={i} className="wave-bar" style={{ height: `${h}%`, background: color }} />
      ))}
    </div>
  );
};

const Tracks = () => {
  const [playing, setPlaying] = useState(null);
  const [liked, setLiked] = useState({});
  const { isDJMode } = useMode();

  const toggleLike = (id) =>
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="section tracks-section" id="tracks">
      <div className="container">
        <div className="section-header animate-fade-in">
          <span className="section-label">
            {isDJMode ? 'Discography' : 'Playlist'}
          </span>
          <h2 className="section-title">
            {isDJMode
              ? <>Latest <span className="text-gradient">Releases</span></>
              : <>Top <span className="text-gradient">Tracks</span></>
            }
          </h2>
          <p className="section-sub">
            {isDJMode
              ? 'A collection of electronic journeys from the studio to the dancefloor.'
              : 'Stream the hottest electronic tracks and discover your next favourite banger.'
            }
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track, i) => (
            <div
              key={track.id}
              className="track-card glass-panel animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="track-cover" style={{ background: track.gradient }}>
                <div className="track-cover-pattern" />
                <button
                  id={`play-btn-${track.id}`}
                  className={`track-play-btn ${playing === track.id ? 'active' : ''}`}
                  onClick={() => setPlaying(playing === track.id ? null : track.id)}
                  aria-label={playing === track.id ? 'Pause' : 'Play'}
                >
                  {playing === track.id ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>

              <div className="track-info">
                <div className="track-meta-top">
                  <span className="track-genre">{track.genre}</span>
                  {/* BPM shown only in DJ mode */}
                  {isDJMode
                    ? <span className="track-bpm">{track.bpm} BPM</span>
                    : (
                      <button
                        id={`like-btn-${track.id}`}
                        className={`track-like-btn ${liked[track.id] ? 'liked' : ''}`}
                        onClick={() => toggleLike(track.id)}
                        aria-label="Like track"
                      >
                        <Heart size={14} fill={liked[track.id] ? 'currentColor' : 'none'} />
                      </button>
                    )
                  }
                </div>
                <h3 className="track-title">{track.title}</h3>

                <MiniWaveform color={track.waveColor} />

                <div className="track-meta-bottom">
                  <span className="track-meta-item">
                    <Clock size={13} />
                    {track.duration}
                  </span>
                  <span className="track-meta-item">
                    <TrendingUp size={13} />
                    {track.streams} streams
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tracks-footer">
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Music2 size={18} />
            {isDJMode ? 'View All Tracks' : 'Open Full Playlist'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
