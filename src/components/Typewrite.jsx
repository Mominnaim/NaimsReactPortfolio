import { useEffect, useState, useRef } from "react";

export const Typewriter = ({ text, speed = 100, className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed((prev) => prev + text[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div
      className={`inline-block border-r-2 border-white animate-typing whitespace-normal break-words ${className}`}
    >
      {displayed}
    </div>
  );
};