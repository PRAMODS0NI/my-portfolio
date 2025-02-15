import React from "react";
import { motion } from "motion/react";
import profile from "./assets/profile3.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="h-svh flex flex-col md:flex-row items-center justify-center p-8 ">
      <div className="w-full h-full flex items-center justify-center md:justify-start">
        <motion.div
          initial={isMobile ? { y: -350 } : { x: 0, opacity: 0 }}
          animate={isMobile ? { y: 0 } : { x: 400, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
          whileHover={isMobile ? {} : { scale: 1.05 }}
          className="h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl"
        >
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
      <div className="w-full h-full flex items-center justify-end md:justify-end mt-8 md:mt-0">
        <motion.div
          initial={isMobile ? { x: 400 } : { x: 0, opacity: 0 }}
          animate={isMobile ? { x: 0 } : { x: -500, opacity: 1 }}
          transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
          whileHover={isMobile ? {} : { scale: 1.02 }}
          className="h-auto w-full md:w-auto max-w-2xl overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-10 py-6 text-wrap shadow-2xl"
        >
          <motion.h1
            initial={isMobile ? false : { y: -20, opacity: 0 }}
            animate={isMobile ? false : { y: 0, opacity: 1 }}
            transition={isMobile ? {} : { duration: 0.8, delay: 0.6 }}
            className="text-4xl text-white mb-4 font-bold font-mono bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text"
          >
            Pramod Soni
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/80 text-lg flex justify-center items-center leading-relaxed"
          >
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/PRAMODS0NI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-white hover:text-purple-400 transition-colors duration-300"
              >
                <FaGithub color="black" size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pramod-soni-2b6191249/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                href="https://wa.me/7231945657"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-white hover:text-sky-400 transition-colors duration-300"
              >
                <FaWhatsapp color="green" size={28} />
              </motion.a>
              <motion.a
                href="https://instagram.com/pramods0ni"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-white hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram color="purple" size={28} />
              </motion.a>
            </div>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
