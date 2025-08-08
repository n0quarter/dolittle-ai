import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before typing starts
  className?: string;
  cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 40,
  startDelay = 300,
  className,
  cursor = true,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {cursor && displayed.length < text.length ? (
        <span className="border-r-2 border-primary ml-0.5 animate-pulse" />
      ) : null}
    </span>
  );
};

export default Typewriter;
