/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="relavite w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* PROJECT 1 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/M5hbRzG/weather.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Weather Web {""}
              <span className="underline decoration-[#F7AB0A]/50">
                Application
              </span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo adipisci iure optio cumque? Nam repellendus sequi autem
              provident, earum minima mollitia, sed atque, optio consequuntur
              non? Quis, nesciunt optio.
            </span>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/RC8NWrF/tv-shows.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Hell Yea
              <span className="underline decoration-[#F7AB0A]/50">Hi</span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">Hello</span>
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/M5hbRzG/weather.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Weather Web {""}
              <span className="underline decoration-[#F7AB0A]/50">
                Application
              </span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo adipisci iure optio cumque? Nam repellendus sequi autem
              provident, earum minima mollitia, sed atque, optio consequuntur
              non? Quis, nesciunt optio.
            </span>
          </div>
        </div>
        {/* PROJECT 4 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/M5hbRzG/weather.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Weather Web {""}
              <span className="underline decoration-[#F7AB0A]/50">
                Application
              </span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo adipisci iure optio cumque? Nam repellendus sequi autem
              provident, earum minima mollitia, sed atque, optio consequuntur
              non? Quis, nesciunt optio.
            </span>
          </div>
        </div>
        {/* PROJECT 5 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/M5hbRzG/weather.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Weather Web {""}
              <span className="underline decoration-[#F7AB0A]/50">
                Application
              </span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo adipisci iure optio cumque? Nam repellendus sequi autem
              provident, earum minima mollitia, sed atque, optio consequuntur
              non? Quis, nesciunt optio.
            </span>
          </div>
        </div>
        {/* PROJECT 6 */}
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
          <Image
            src="https://i.ibb.co/M5hbRzG/weather.png"
            height={852}
            width={422}
          ></Image>
          <div className="space-y-15 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Weather Web {""}
              <span className="underline decoration-[#F7AB0A]/50">
                Application
              </span>{" "}
            </h4>
            <span className="text-sm text-center md:text-left pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              illo adipisci iure optio cumque? Nam repellendus sequi autem
              provident, earum minima mollitia, sed atque, optio consequuntur
              non? Quis, nesciunt optio.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
    </motion.div>
  );
}
