"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { BottomFadeSquareCard } from "./Cards";
import { Recipes } from "@/types";

const Cravings = () => {
  const [cravingRecipes, setCravingRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getCravingRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("cravings");
      const recipes = data?.hits;
      setCravingRecipes(recipes);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCravingRecipes();
  }, []);

  if (loading) {
    return <p> loading......</p>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-4xl">WHAT WE'RE CRAVING</div>
      <div className="flex gap-10 mt-4">
        {cravingRecipes?.slice(0, 3).map((item, index: number) => {
          return <BottomFadeSquareCard key={index} recipe={item.recipe} />;
        })}
      </div>
    </div>
  );
};

export default Cravings;
