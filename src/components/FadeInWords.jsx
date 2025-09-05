import React, { useEffect, useRef, useState } from "react";
import "./FadeInWords.css";

const FadeInWords = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // trigger when 10% is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <p className="fade-words" ref={ref}>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`word ${visible ? "visible" : ""}`}
          style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default FadeInWords;
