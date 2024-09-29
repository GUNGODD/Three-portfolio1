"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { VelocityScroll } from "../ui/Velocity-marquee-text";

const WorkText = () => {
  const [show, setShow] = useState(false);
  const [greenShow, setGreenShow] = useState(false);
  return (
    <>
      <div className="flex flex-col mb-44  items-start font-bold ">
        <motion.button
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className={` ${show == true ? "bg-yellow-300" : "bg-none"}  w-full  justify-between flex mt-4 p-4 text-black border border-gray-400 md:text-7xl text-2xl `}
        >
          {show === true ? <VelocityScroll text="APP" /> : "APP"}
          {!show ? <MoveUpRight width={20} height={20} /> : null}
        </motion.button>
        <motion.button
          onMouseEnter={() => setGreenShow(true)}
          onMouseLeave={() => setGreenShow(false)}
          className={` ${greenShow == true ? "bg-green-400" : "bg-none"}  w-full  justify-between flex mt-4 p-4 text-black border border-gray-400 md:text-7xl text-2xl  `}
        >
          {greenShow === true ? <VelocityScroll text="WEBSITES" /> : "WEBSITES"}
          {!greenShow ? <MoveUpRight width={20} height={20} /> : null}
        </motion.button>
      </div>
    </>
  );
};
export default WorkText;
