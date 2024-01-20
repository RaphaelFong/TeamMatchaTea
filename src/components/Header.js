import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef(null);

  // Choose the appropriate audio file based on the current page
  const audioUrl = location.pathname === '/' || location.pathname === '/configure' ? 'landing.mp3' : 'game.mp3';


  const toggleMusic = () => {
    const audio = audioRef.current || new Audio(audioUrl);

    if (!isMusicPlaying) {
      audio.play();
      setIsMusicPlaying(true);
    } else {
      audio.pause();
      setIsMusicPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    setIsMuted(false);
  }, [location.pathname]);

  return (
    <div className='header'>
      <h1 className='headerlabel1'>Save your Grades</h1>
      <button onClick={toggleMusic}>
        {isMusicPlaying ? 'Mute' : 'Unmute'}
      </button>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
}

export default Header;
