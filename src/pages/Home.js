import React from "react";
import { CustomCard } from "../components";

import img1 from "../assets/images/card/image-1.webp";
import img2 from "../assets/images/card/image-2.webp";
import img3 from "../assets/images/card/image-3.webp";
import img4 from "../assets/images/card/image-4.webp";
import img5 from "../assets/images/card/image-5.webp";
import img6 from "../assets/images/card/image-6.webp";
import img7 from "../assets/images/card/image-7.webp";
import img8 from "../assets/images/card/image-8.webp";
import img9 from "../assets/images/card/image-9.webp";
import img10 from "../assets/images/card/image-10.jpeg";
import img11 from "../assets/images/card/image-11.jpeg";

export const Home = () => {
  const cardData = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
  ];

  return (
    <main>
      <section className="px-2">
        <div className="grid grid-cols-5 gap-4">
          {cardData.map((card) => (
            <CustomCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
};
