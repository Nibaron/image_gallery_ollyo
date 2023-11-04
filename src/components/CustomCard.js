import React from "react";

export const CustomCard = ({ card, isFeatured, onClick }) => {
  const { id, image, clicked } = card;

  const handleClick = () => {
    onClick(id);
    
  };

  return (
    <div
      className={`max-w-sm rounded border ${
        isFeatured
          ? "col-span-2 row-span-2 border-4 border-green-500"
          : "border-2"
      }
      ${clicked
        ?"border-red-500"
      :""} dark:bg-white`}
      onClick={handleClick}
    >
      <img className="w-full" src={image} alt="" />
    </div>
  );
};
