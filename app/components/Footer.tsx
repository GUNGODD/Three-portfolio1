"use client";
import { motion } from "framer-motion";
import { CharacterCanvas } from "../models/Octahedron";

export default function Footer() {
  return (
    <>
      <footer className="   absolute mb-24  md:flex  h-full md:flex-row  flex-col justify-between w-[400px]  lg:w-dvw mx-auto md:mb-4 overflow-hidden text-white  md:h-[600px]  border-3 md:mt-16  m-0 bg-black   p-4  ">
        <div className="relative    md:h-100 w-[900px] md:text-7xl mt-28 md:mb-10 md:space-y-4  ">
          <motion.button className="   text-5xl block md:text-7xl font-bold hover:blur-sm">
            contact@flo.rent
          </motion.button>

          <motion.button
            className="

text-5xl 
            md:text-7xl block font-bold hover:blur-sm"
          >
            linkedin
          </motion.button>

          <motion.button className=" text-5xl md:text-7xl font-bold block hover:blur-sm">
            instagram
          </motion.button>
        </div>
        <div className="">
          <CharacterCanvas />
        </div>
      </footer>
    </>
  );
}
