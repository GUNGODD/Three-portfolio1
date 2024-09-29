"use client";
import { motion } from "framer-motion";

export default function DynamicMarquee() {
  return (
    <>
      <div className="border w-full">
        <div className="h-[240px] overflow-hidden">
          <motion.div
            className="  


            flex overflow snap-x snap-mandatory h-[180]  pb-10 justify-center "
          >
            <motion.h1 className="  border text-8xl  m-4 p-4  ">
              Aditya
            </motion.h1>
            <h1 className="border m-4 p-4 text-8xl  ">Singh </h1>
            <h1 className="border m-4 p-4 text-8xl  ">Aditya </h1>
            <h1 className="border m-4 p-4 text-8xl  ">Singh </h1>
          </motion.div>
        </div>
      </div>
    </>
  );
}
