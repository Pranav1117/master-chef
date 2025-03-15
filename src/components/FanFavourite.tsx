"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
import { SquareCard } from "./Cards";
import { Recipes } from "@/types";

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

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center text-4xl">
        <p>FAN FAVOURITE</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/favourite`} prefetch={true}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-4 flex-wrap w-full">
        {loading ? (
          [...Array(4)].map((_, index) => (
            <div className="w-[22%] flex" key={index}>
              <SquareCard title="" image="" loading={true} />
            </div>
          ))
        ) : recipes ? (
          recipes?.slice(0, 16).map((item, index: number) => {
            return (
              <div className="w-[22%] flex" key={index}>
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
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">
            No Data available
          </div>
        )}
      </div>
    </div>
  );
};

export default FanFavourite;
