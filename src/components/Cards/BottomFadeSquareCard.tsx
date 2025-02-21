import React from "react";
import { Recipes } from "@/types";

const BottomFadeSquareCard: React.FC<Recipes> = ({ recipe }) => {
  return (
    <div
      className="w-full h-[370px] rounded relative overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${recipe.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute bottom-4 left-4 z-10 text-white p-2">
        <p className="text-lg font-light">COLLECTION</p>
        <h2 className="text-3xl font-bold h-[30px]">
          {recipe?.label.length > 20
            ? `${recipe.label.slice(0, 60)}...`
            : recipe.label}
        </h2>
      </div>
    </div>
  );
};

export default BottomFadeSquareCard;
