import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profile from "../assets/profile_sample.png";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, staggerChildren: 0.2 },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="about" className="h-svh flex items-center" ref={ref}>
      <motion.div
        className="about-page max-w-full mx-auto px-16 py-20 bg-white/20 rounded-2xl flex flex-col md:flex-row items-center gap-12 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="w-48 h-48 md:w-56 md:h-56 hidden md:block rounded-full overflow-hidden ring-4 ring-purple-400 shadow-xl mb-8 md:mb-0"
          variants={containerVariants}
        >
          <img src={profile} alt="Profile" />
        </motion.div>
        <motion.div variants={containerVariants} className="flex-1">
          <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]">
            About Me
          </h1>
          <p className="text-2xl mb-6 text-white leading-relaxed">
            I am a <b className="text-purple-300">Frontend Engineer</b>{" "}
            passionate about crafting scalable, responsive, and high-performance
            web and mobile applications.
          </p>
          <ul className="list-disc pl-7 text-white/90 mb-6 space-y-3 text-xl">
            <li>
              Experienced in
              <span className="text-purple-300 font-extrabold md:text-2xl bg-white/20 p-2 m-2 rounded-lg">
                ReactJS
              </span>
              <span className="text-purple-300 font-extrabold md:text-2xl bg-white/20 p-2 m-2 rounded-lg">
                NextJS
              </span>
              and
              <span className="text-purple-300 font-extrabold md:text-2xl bg-white/20 p-2 m-2 rounded-lg">
                React Native
              </span>
            </li>
            <li>
              Delivering production-ready platforms with seamless user
              experiences
            </li>
            <li>
              Writing clean, maintainable code and collaborating in agile teams
            </li>
          </ul>
          <p className="text-lg text-white/80">
            Always eager to learn new technologies and push the boundaries of
            UI/UX.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
