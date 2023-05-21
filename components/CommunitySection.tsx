import React from "react";

import SectionHeader from "./SectionHeader";

interface Card {
  title: string;
  text: string;
  imageUrl: string;
}

interface Props {
  heading: string;
  text: string;
  cards: Card[];
}

const CommunitySection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <SectionHeader
          heading="Join our Community"
          text="Chat with our team and community members as TosiDrop brings sauce to Ergo and Cardano."
        />
        {/* <div className="flex flex-wrap -mx-4">
          {cards.map((card) => (
            <div key={card.title} className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={card.imageUrl}
                  className="w-full h-48 object-cover"
                  alt={card.title}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-base">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CommunitySection;
