import React from "react";
import { motion } from "motion/react";
import profile from "./assets/profile.jpeg";

const Skill = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="w-full h-svh flex items-center justify-start">
      <motion.div
        initial={isMobile ? { x: 300, y:0 } : { x: 0, y: 250 }}
        animate={isMobile ? { x: 0, y:250 } : { x: 300, y: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="h-auto w-7xl overflow-hidden rounded-2xl px-10 py-4 text-wrap"
      >
        <p className="text-2xl text-white font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi est
          suscipit cum in ex! Officiis quidem assumenda doloremque, ipsum
          doloribus quisquam? Ipsa alias maxime fugiat doloremque. Dolor fugiat
          vel molestias hic cumque nobis quis aperiam, excepturi aliquam!
          Excepturi qui quas id quasi error ab illum, deserunt reiciendis nulla
          magnam optio mollitia, ut, quibusdam sint! Fugiat, autem dolores
          doloremque ratione dolorem incidunt, hic accusantium aliquid obcaecati
          qui ut eveniet laborum facilis illum excepturi. Vel dolore nesciunt
          omnis saepe eaque animi eveniet quaerat porro quibusdam ipsa
          reprehenderit illum illo explicabo quidem expedita sapiente aut non
          tempore hic unde amet ad.
        </p>
      </motion.div>
    </div>
  );
};

export default Skill;
