"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { SquareCard } from "./Cards";
import { Recipes } from "@/types";
import Link from "next/link";

const TrendinNow = () => {
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("trending");
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
      <div className="flex justify-between text-4xl items-center">
        <p>TRENDING NOW</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/trending`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {recipes?.slice(0, 4).map((item, index: number) => {
          return (
            <div className="w-full">
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

export default TrendinNow;
