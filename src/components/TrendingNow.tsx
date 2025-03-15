"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
import { SquareCard } from "./Cards";
import { Recipes } from "@/types";

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

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between text-4xl items-center">
        <p>TRENDING NOW</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/trending`} prefetch={true}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
         {loading ? (
          [...Array(4)].map((_, index) => (
            <div className="w-full" key={index}>
              <SquareCard title="" image="" loading={true} />
            </div>
          ))
        ) : recipes ? (
          recipes?.slice(0, 4).map((item, index: number) => {
            return (
              <div className="w-full" key={index}>
                <Link
                  href={`recipedetail/${encodeURIComponent(item.recipe.label)}`} prefetch={true}
                >
                  <SquareCard
                    key={index}
                    title={item.recipe.label}
                    image={item.recipe.image}
                    loading={loading}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          // TODO => add something with this msg like img or gif
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">No Data available</div>
        )}
      </div>
    </div>
  );
};

export default TrendinNow;
