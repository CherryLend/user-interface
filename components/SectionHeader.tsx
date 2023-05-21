import { ABeeZee } from "next/font/google";
import React from "react";

interface Props {
  heading: string;
  text: string;
}

const font = ABeeZee({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const SectionHeader: React.FC<Props> = ({ heading, text }) => {
  return (
    <>
      <h2
        className={`text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#4A2DFA] from-30% to-60% to-[#4190FF] mb-4 text-center ${font.className}`}
      >
        {heading}
      </h2>
      <p className="text-lg mb-8 text-center font-medium">{text}</p>
    </>
  );
};

export default SectionHeader;
