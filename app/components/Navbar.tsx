"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const HoverStyle = {
    initial: {
      animate: false,
    },
    rotate: 180,

    animate: false,
  };
  return (
    <>
      <div className=" h-20 p-6 last:m-2   relative w-full">
        <motion.div
          className=" w-dvw 
          

          backdrop-blur-lg fixed top-0 left-0  z-10` "
        >
          <ul className="  mx-4 md:mx-8 md:p-4 p-4  font-bold text-xl  md:text-3xl  flex justify-between ">
            <motion.button whileHover={HoverStyle}>About Me</motion.button>
            <motion.button whileHover={HoverStyle}>Work</motion.button>
            <motion.button whileHover={HoverStyle}>Contact Me</motion.button>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
