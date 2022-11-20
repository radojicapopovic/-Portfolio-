import { motion } from "framer-motion";
import React from "react";

interface Props {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:h-[500px] xl:w-[400px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[64px] xl:h-[64px] object-cover object-center "
        src="https://play-lh.googleusercontent.com/y4bswMT02OROjzOPa5zDGsnXX5-cBABjF93j26seJH2cEHD4PuBW1d5VvwfYleeKf4_X"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light ">React Developer</h4>
        <p className="font-bold text-2xl mt-1">UpWork</p>
        <div className="flex space-x-2 my-2">{/* tech used */}</div>
        <span className="uppercase text-sm py-5 text-gray-300">
          Started work... - Ended...
        </span>
        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
