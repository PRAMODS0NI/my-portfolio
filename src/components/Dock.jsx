import React from "react";
import { motion } from "framer-motion";

const dockItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Dock = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/20 rounded-full px-4 py-2 flex gap-6 shadow-lg z-50"
  >
    {dockItems.map((item, idx) => (
      <motion.a
        key={item.label}
        href={item.href}
        whileHover={{ scale: 1.2 }}
        className="text-white hover:text-purple-400 transition-colors"
        aria-label={item.label}
      >
        {item.label}
      </motion.a>
    ))}
  </motion.div>
);

export default Dock;
