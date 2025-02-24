"use client";
import Link from "next/link";
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
      <div className="flex justify-between items-center text-4xl">
        <p>DON'T MISS</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/unique`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {recipes?.slice(0, 3).map((item, index: number) => {
          return (
            <div className="w-full">
              <Link
                href={`recipedetail/${encodeURIComponent(item.recipe.label)}`}
              >
                <BottomFadeSquareCard key={index} recipe={item.recipe} />;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DontMiss;
