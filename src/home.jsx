import React, { useEffect, useState } from "react";
import VantaWaves from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Hero from "./hero";
import Skill from "./skill";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Check for mobile screen
    const effect = VantaWaves({
      el: "#vanta",
      THREE: THREE,
      mouseControls: !isMobile, // Disable mouse controls on mobile
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      color: 0xc0c0c,
      scale: 1.0,
      scaleMobile: isMobile ? 0.8 : 1.0, // Adjust scale for mobile
      shininess: isMobile ? 20.0 : 30.0, // Reduce shininess on mobile
      waveHeight: isMobile ? 10.0 : 15.0, // Reduce wave height on mobile
      waveSpeed: isMobile ? 0.5 : 0.8, // Slow down waves on mobile
      zoom: isMobile ? 0.8 : 0.65, // Adjust initial zoom for mobile
    });
    setVantaEffect(effect);

    const handleScroll = () => {
      if (isMobile) return; // Disable scroll effect on mobile
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = document.querySelector(".h-svh").clientHeight;
      const scrollProgress = Math.min(scrollY / heroHeight, 1);
      const newZoom = 0.65 + (1.75 - 0.65) * scrollProgress;

      if (effect) {
        effect.setOptions({ zoom: newZoom });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (effect) effect.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-dvh">
      <div id="vanta" className="fixed top-0 left-0 w-full h-full" />
      <div className="relative z-10 overflow-x-hidden">
        {" "}
        {/* Add overflow control */}
        <Hero />
        <Skill />
      </div>
    </div>
  );
};

export default Home;
