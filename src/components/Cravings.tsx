"use client";
import Link from "next/link";
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
      <div className="flex justify-between text-4xl items-center">
        <p>WHAT WE'RE CRAVING</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/cravings`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {cravingRecipes?.slice(0, 3).map((item, index: number) => {
          return (
            <div className="w-full">
              <Link
                href={`recipedetail/${encodeURIComponent(item.recipe.label)}`}
              >
                <BottomFadeSquareCard key={index} recipe={item.recipe} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cravings;
