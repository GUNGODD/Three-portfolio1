"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function StarterModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <>
      <motion.div
        className=" 
absolute     w-full h-full "
      >
        <motion.div
          className="
        relative   border-4 bg-violet-900 border-black  "
        >
          <motion.div className="relative top-80">
            <motion.h1 className="text-4xl font-bold text-white bg-black ">
              This is my test project where i used this as playground{" "}
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
