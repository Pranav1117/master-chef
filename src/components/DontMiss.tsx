"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
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

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center text-4xl">
        <p>DON{`&apos;`}T MISS</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/unique`} prefetch={true}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {loading ? (
          [...Array(3)].map((_, index) => (
            <div className="w-full" key={index}>
              <BottomFadeSquareCard title="" image="" loading={true} />
            </div>
          ))
        ) : recipes ? (
          recipes?.slice(0, 3).map((item, index: number) => {
            return (
              <div className="w-full" key={index}>
                <Link
                  href={`recipedetail/${encodeURIComponent(item.recipe.label)}`} prefetch={true}
                >
                  <BottomFadeSquareCard
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
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">
            No Data available
          </div>
        )}
      </div>
    </div>
  );
};

export default DontMiss;
