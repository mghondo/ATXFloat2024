import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, elementType = 'p', typingSpeed = 50, style }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      } else {
        setDisplayText((prev) => text.substring(0, prev.length + 1));
        currentIndex++;
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, typingSpeed]);

  const Element = elementType;

  return (
    <Element style={style}>
      {displayText}
      {displayText.length === text.length && <span className="typing-cursor">|</span>}
    </Element>
  );
};

export default TypingAnimation;
