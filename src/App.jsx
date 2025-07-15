import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

const hatUrl = '/assets/hat.png'; // example transparent Harry Potter style hat PNG

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/assets/Harry Potter 1.mp3');
    audioRef.current.loop = true;
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => {
        console.warn('Playback failed:', err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000, userSelect: 'none' }}>
        {/* Hat */}
        <img
          src={hatUrl}
          alt="Harry Potter hat"
          style={{
            display: 'block',
            margin: '0 auto',
            width: 60,
            height: 60,
            animation: 'float 3s ease-in-out infinite',
            cursor: 'pointer',
            pointerEvents: 'none', // so clicks pass through the hat to the button below
          }}
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          style={{
            marginTop: -10,
            padding: '10px 15px',
            backgroundColor: '#023E8A',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: 80,
          }}
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
}

export default App;
