import React from "react";
import markedSVG from "../assets/images/checkbox.svg";

export const CustomCard = ({ card, onClick , isFeatured}) => {
  const { id, image, clicked } = card;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <div
      className={`relative max-w rounded border-2 ${
        isFeatured
          ? "col-span-2 row-span-2 border-green-500": ""
      } ${
        clicked ? " border-red-500" : ""
      } dark:bg-white hover:shadow-md transition-transform duration-300 transform hover:scale-105`}
      onClick={handleClick}
    >
      {clicked && (
        <img
          src={markedSVG}
          alt="Marked"
          className="absolute top-0 right-0 m-2 w-6 h-6"
        />
      )}
      <img className="h-full w-full" src={image} alt="" />
    </div>
  );
};
