"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARACTERS = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

const scrambleText = (text: string, progress: number): string => {
  return text
    .split("")
    .map((char, index) =>
      index < progress
        ? char
        : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    )
    .join("");
};

interface EncodedTextProps {
  text: string;
  duration?: number;
  className?: string;
}

const EncodedText: React.FC<EncodedTextProps> = ({
  text,
  duration = 3,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (progress < text.length) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, (duration * 1000) / text.length);
    }
    return () => clearInterval(interval);
  }, [progress, text.length, duration]);

  useEffect(() => {
    setDisplayText(scrambleText(text, progress));
  }, [progress, text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {displayText}
    </motion.div>
  );
};

export default EncodedText;
