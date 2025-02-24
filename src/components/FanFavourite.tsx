"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { SquareCard } from "./Cards";
import { Recipes } from "@/types";
import Link from "next/link";

const FanFavourite = () => {
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("favourite");
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
      <div className="flex justify-between items-center text-4xl">
        <p>FAN FAVOURITE</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/favourite`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-4 flex-wrap w-full">
        {recipes?.slice(0, 16).map((item, index: number) => {
          return (
            <div className="w-[22%] flex ">
              <Link
                href={`recipedetail/${encodeURIComponent(item.recipe.label)}`}
              >
                <SquareCard
                  key={index}
                  title={item.recipe.label}
                  image={item.recipe.image}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FanFavourite;
