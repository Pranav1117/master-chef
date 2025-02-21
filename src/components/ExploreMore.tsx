"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { CircularCard } from "./Cards";
import { Recipes } from "@/types";

const ExploreMore = () => {
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("explore");
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
      <div className="text-4xl">EXPLORE MORE</div>
      <div className="flex gap-10 mt-4">
        {recipes?.slice(0, 5).map((item, index: number) => {
          return <CircularCard key={index} title={item.recipe.label} image={item.recipe.image} />;
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
