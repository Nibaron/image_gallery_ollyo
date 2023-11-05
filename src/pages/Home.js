import React, { useState } from "react";
import { CustomCard, Header } from "../components";

export const Home = () => {
  const [cardData, setCardData] = useState([
    { id: 1, image: "images/image-11.jpeg", clicked: false },
    { id: 2, image: "images/image-2.webp", clicked: false },
    { id: 3, image: "images/image-3.webp", clicked: false },
    { id: 4, image: "images/image-4.webp", clicked: false },
    { id: 5, image: "images/image-5.webp", clicked: false },
    { id: 6, image: "images/image-6.webp", clicked: false },
    { id: 7, image: "images/image-7.webp", clicked: false },
    { id: 8, image: "images/image-8.webp", clicked: false },
    { id: 9, image: "images/image-9.webp", clicked: false },
    { id: 10, image: "images/image-10.jpeg", clicked: false },
    { id: 11, image: "images/image-1.webp", clicked: false },
    { id: 12, image: "images/upload.png", clicked: false },
  ]);

  const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (id) => {
    if(id===12) return;
    setCardData((prevCardData) => {
      return prevCardData.map((card) => {
        if (card.id === id) {
          const clicked = !card.clicked;
          
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
    <>
      <Header selectedCard={selectedCard} onDelete={handleDelete} />
      <main>
        <section className="container justify-evenly">
          <div className="grid justify-evenly md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
    </>
  );
};
