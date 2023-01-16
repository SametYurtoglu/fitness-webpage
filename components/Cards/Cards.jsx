import React from "react";

const Cards = ({ title, desc, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="text-white text-4xl">{icon}</span>
        </div>
        <div>
          <h1 className="text-amber-600 font-sansita text-xl">{title}</h1>
          <p className="w-[200px] font-sansita text-white font-medium text-md">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
