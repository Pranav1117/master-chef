"use client";
import { fetchRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { CircularCard } from "./Cards";
import { Recipes } from "@/types";
import Link from "next/link";

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
      <div className="flex justify-between items-center text-4xl">
        <p>EXPLORE MORE</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/explore`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {recipes?.slice(0, 5).map((item, index: number) => {
          return (
            <div className="w-full">
              <Link
                href={`recipedetail/${encodeURIComponent(item.recipe.label)}`}
              >
                <CircularCard
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

export default ExploreMore;
