import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJira,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpo,
  SiRedux,
  SiVite,
  SiFirebase,
  SiAwsamplify,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoDevTo } from "react-icons/bi";
import { MdMotionPhotosOn } from "react-icons/md";

const skills = [
  {
    icon: <FaReact color="#61DBFB" size={48} />,
    title: "ReactJS",
    link: "https://reactjs.org/",
  },
  {
    icon: <SiNextdotjs color="#000" size={48} />,
    title: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    icon: <TbBrandReactNative color="#61DBFB" size={48} />,
    title: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    icon: <FaGithub color="#fff" size={48} />,
    title: "GitHub",
    link: "https://github.com/",
  },
  {
    icon: <SiJavascript color="#F7DF1E" size={48} />,
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiTailwindcss color="#38BDF8" size={48} />,
    title: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    icon: <SiExpo color="#000" size={48} />,
    title: "Expo",
    link: "https://expo.dev/",
  },
  {
    icon: <SiTypescript color="#007ACC" size={48} />,
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: <FaHtml5 color="#E34F26" size={48} />,
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaCss3Alt color="#1572B6" size={48} />,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <FaNodeJs color="#68A063" size={48} />,
    title: "NodeJS",
    link: "https://nodejs.org/",
  },
  {
    icon: <SiRedux color="#764ABC" size={48} />,
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: <SiVite color="#646CFF" size={48} />,
    title: "Vite",
    link: "https://vitejs.dev/",
  },
  {
    icon: <FaJira color="#0052CC" size={48} />,
    title: "Jira",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    icon: <BiLogoDevTo color="#fff" size={48} />,
    title: "Dev Tools",
    link: "https://www.jetbrains.com/help/idea/devtools.html",
  },
  {
    icon: <MdMotionPhotosOn color="#FF4081" size={48} />,
    title: "Motion",
    link: "https://motion.dev/",
  },
  {
    icon: <SiFirebase color="#FFCA28" size={48} />,
    title: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    icon: <SiAwsamplify color="#FF9900" size={48} />,
    title: "AWS Amplify",
    link: "https://aws.amazon.com/amplify/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="skills" className="w-full h-svh flex items-center justify-center ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-6 gap-20 px-10 rounded-2xl"
      >
        {skills.map((skill, idx) => (
          <motion.div
            onClick={() => window.open(skill.link, "_blank")}
            title={skill.title}
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            className="flex flex-col cursor-pointer items-center justify-center md:py-10 md:px-10 bg-white/10  rounded-xl transition-all"
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
