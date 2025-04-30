import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const typingTexts = ['Ruby on Rails Developer  ', 'Full Stack Developer  '];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];

    if (charIndex < currentText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, currentTextIndex, typingTexts]);

  return <span className="typing-text">{displayedText}</span>;
};

export default TypingAnimation;
