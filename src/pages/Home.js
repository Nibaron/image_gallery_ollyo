import React, { useState } from "react";
import { Button } from "flowbite-react";
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
import img12 from "../assets/images/card/upload.png";

export const Home = () => {
  const [cardData, setCardData] = useState([
    { id: 1, image: img1, clicked: false },
    { id: 2, image: img2, clicked: false },
    { id: 3, image: img3, clicked: false },
    { id: 4, image: img4, clicked: false },
    { id: 5, image: img5, clicked: false },
    { id: 6, image: img6, clicked: false },
    { id: 7, image: img7, clicked: false },
    { id: 8, image: img8, clicked: false },
    { id: 9, image: img9, clicked: false },
    { id: 10, image: img10, clicked: false },
    { id: 11, image: img11, clicked: false },
    { id: 12, image: img12, clicked: false },
  ]);

  const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (id) => {
    setCardData((prevCardData) => {
      return prevCardData.map((card) => {
        if (card.id === id) {
          const clicked = !card.clicked;
          // Toggle the card's state in selectedCard
          const selectedCardIndex = selectedCard.findIndex(
            (selected) => selected.id === id
          );
          if (clicked && selectedCardIndex === -1) {
            setSelectedCard([...selectedCard, card]);
          } else if (!clicked && selectedCardIndex !== -1) {
            const updatedSelectedCard = [...selectedCard];
            updatedSelectedCard.splice(selectedCardIndex, 1);
            setSelectedCard(updatedSelectedCard);
          }
          return { ...card, clicked };
        }
        return card;
      });
    });
  };

  const handleDelete = () => {
    const updatedCardData = cardData.filter(
      (card) => !selectedCard.some((selected) => selected.id === card.id)
    );
    setCardData(updatedCardData);
    setSelectedCard([]);
  };

  return (
    <main>
      <span>
        {`Size: ${selectedCard.length}`}
        <Button onClick={handleDelete}>Del</Button>
      </span>

      <section className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cardData.map((card, index) => (
            <CustomCard
              key={card.id}
              card={card}
              isFeatured={index === 0}
              selectedCard={selectedCard}
              cardData={cardData}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
