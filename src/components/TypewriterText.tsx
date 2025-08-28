import React, { useState, useEffect } from "react";

const TypewriterText = () => {
  const phrases = [
    "Actively seeking Summer 2026 SDE Internships",
    "Full Stack Developer",
    "Application Security Enthusiast",
    "I build secure and scalable web apps.",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));

          if (currentText === currentPhrase) {
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 40 : isPaused ? 1800 : 75
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex]);

  return (
    <span className="text-emerald-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
