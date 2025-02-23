"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { BottomFadeSquareCard } from "./Cards";
import { Recipes } from "@/types";

const DontMiss = () => {
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("unique");
      const recipes = data?.hits;
      setRecipes(recipes);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  if (loading) {
    return <p> loading......</p>;
  }

  return (
    <div className="w-[90%] mx-auto">
     <div className= "flex justify-between items-center text-4xl">
        <p>DON'T MISS</p>
        <a className="text-blue-500 text-sm cursor-pointer">VIEW ALL</a>
      </div>
      <div className="flex gap-10 mt-4">
        {recipes?.slice(0, 3).map((item, index: number) => {
          return <BottomFadeSquareCard key={index} recipe={item.recipe} />;
        })}
      </div>
    </div>
  );
};

export default DontMiss;
