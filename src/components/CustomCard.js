import React from 'react';

export const CustomCard = ({img1}) => {
  return (
    <div className="max-w-sm rounded border">
  <img className="w-full" src={img1} alt="Sunset in the mountains"/>
  </div>
  );
}
