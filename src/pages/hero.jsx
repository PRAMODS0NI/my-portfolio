import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile3.svg";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Dock from "../components/Dock";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      <Dock />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-evenl gap-12">
          {/* Left content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-gray-400 text-lg mb-4 font-mono"
            >
              Hello, I'm
            </motion.h2>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] mb-6"
            >
              Pramod Soni
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8 max-w-lg"
            >
              <b className="drop-shadow-[0_0_10px_white]">Frontend Developer</b>{" "}
              passionate about creating seamless web and mobile experiences with
              clean code
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center md:justify-start"
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/PRAMODS0NI",
                  color: "text-white",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/pramod-soni",
                  color: "text-blue-400",
                },
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/7231945657",
                  color: "text-green-400",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com/pramods0ni",
                  color: "text-pink-400",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`${item.color} hover:opacity-80 transition-opacity`}
                >
                  <item.icon size={27} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <motion.div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-white/20">
              <img
                src={profile}
                alt="Pramod Soni"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
