import React from "react";
import { CustomCard } from "../components";
import img1 from "../assets/images/card/image-1.webp";

export const Home = () => {
  const cardData = [
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
  ];

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="grid grid-cols-5 gap-4">
          {cardData.map((img, index) => (
            <CustomCard key={index} img1={img} />
          ))}
        </div>
      </section>
    </main>
  );
};
