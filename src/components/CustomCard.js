import React from 'react';

export const CustomCard = ({ card }) => {
    const { image } = card;
  return (
    <div className="max-w-sm rounded border">
  <img className="w-full" src={image} alt="Sunset in the mountains"/>
  </div>
  );
}
