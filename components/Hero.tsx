import Image from "next/image";
import React from "react";

import CherryExpImg from "@/public/images/CHERRY_EXP_E_3 2.png";
import CherryPatternTop from "@/assets/img/CherryPatternTop.png";

const Hero: React.FC = () => {
  return (
    <div className="">
      <Image
        src={CherryPatternTop}
        alt="Cherry Pattern Top"
        className="w-full max-sm:mt-4 max-md:mt-10 xl:-mb-40 max-sm:scale-[200%] md:scale-125 xl:scale-100 2xl:scale-90 -z-10"
      />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-8 py-12 z-10">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-[2.9rem] lg:leading-[3.75rem] text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 drop-shadow-lg capitalize">
            Lending and Borrowing protocol on Cardano and Ergo
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6">
            Open-source Lending Without Limits.
          </p>
          <button className="bg-gradient-to-r from-fuchsia-700 to-violet-600 hover:opacity-80 text-white py-3 px-6 rounded-xl shadow-md transition">
            Launch CherryLend
          </button>
        </div>
        <div className="md:w-1/3">
          <div className="bg-gradient-to-b from-sky-200 to-white/75 rounded-full">
            <Image src={CherryExpImg} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <Image
        src={CherryPatternTop}
        alt="Cherry Pattern Bottom"
        className="w-full xl:-mt-20 max-sm:scale-[200%] md:scale-125 xl:scale-100 2xl:scale-90 rotate-180 -z-10"
      />
    </div>
  );
};

export default Hero;
