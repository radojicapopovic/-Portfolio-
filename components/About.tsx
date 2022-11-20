import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQExFVFU2CG8kw/profile-displayphoto-shrink_400_400/0/1666000686895?e=1674086400&v=beta&t=xtDgx2Z8LZz33y40fS4RalvWEQs5HRQ6q2EqYSdjFzQ"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:object-cover  "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <span className="text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iure
          rem magnam quis, modi placeat exercitationem. Magnam molestias, illo
          inventore qui voluptatem voluptatum vel laudantium corrupti
          exercitationem sint in dicta. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Possimus id modi officia voluptate atque quos cumque
          maxime dicta provident dolores, tempore ex nisi incidunt quaerat,
          voluptates, temporibus deleniti repudiandae recusandae!
        </span>
      </div>
    </motion.div>
  );
}
