import React, { useEffect, useRef, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import myVideo from "/assets/digi-market.mp4";
import { BODY_CONTENT } from "../constants/content";

function Body() {
  const circleRef = useRef(null);
  const navbarRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const words = ["Bigger", "Better", "Faster"];

  useEffect(() => {
    const field = circleRef.current;
    if (!field) return;

    const handleMouseMove = (e) => {
      const rect = field.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      // Cap max movement to ±20px
      const moveX = Math.max(-20, Math.min(20, offsetX * 0.1));
      const moveY = Math.max(-20, Math.min(20, offsetY * 0.1));

      field.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      field.style.transform = "translate(0, 0)";
    };

    field.addEventListener("mousemove", handleMouseMove);
    field.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      field.removeEventListener("mousemove", handleMouseMove);
      field.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll effect for sticky navbar - only after video section ends
  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = videoContainerRef.current;
      const navbar = navbarRef.current;
      if (!videoContainer || !navbar) return;

      const videoBottom =
        videoContainer.offsetTop + videoContainer.offsetHeight;
      const scrolled = window.scrollY;

      if (scrolled >= videoBottom - 100) {
        // Video section has ended, make navbar sticky with white background
        if (!isSticky) {
          setIsSticky(true);
          navbar.style.position = "fixed";
          navbar.style.top = "0";
          navbar.style.background = "white";
          navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
          navbar.classList.add("navbar-sticky");
        }
      } else {
        // Still in video section, keep as overlay
        if (isSticky) {
          setIsSticky(false);
          navbar.style.position = "absolute";
          navbar.style.top = "0";
          navbar.style.background = "transparent";
          navbar.style.boxShadow = "none";
          navbar.classList.remove("navbar-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <>
      <div className="video-container" ref={videoContainerRef}>
        <video
          src={myVideo}
          width="100%"
          autoPlay
          muted
          loop
          className="cropped-video"
        />
        <div className="navbar-overlay" ref={navbarRef}>
          <Navbar />
        </div>
        <div className="content-overlay">
          <div className="overlay-content">
            <div className="tagline">
              <p>{BODY_CONTENT.VIDEO_TAGLINE}</p>
            </div>
            <div className="video-footer">
              <p>
                {BODY_CONTENT.VIDEO_FOOTER.TEXT}
                <br />
                <span key={words[wordIndex]} className="animated-word">
                  {words[wordIndex]}
                </span>
              </p>
              <div className="circle" ref={circleRef}>
                {BODY_CONTENT.VIDEO_FOOTER.CTA}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
