"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
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

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between text-4xl items-center">
        <p>WHAT WE{`&apos;`}RE CRAVING</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/cravings`} prefetch={true}>
            VIEW ALL
          </Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {loading ? (
          [...Array(3)].map((_, index) => (
            <div className="w-full" key={index}>
              <BottomFadeSquareCard title="" image="" loading={loading} />
            </div>
          ))
        ) : cravingRecipes ? (
          cravingRecipes?.slice(0, 3).map((item, index: number) => {
            return (
              <div className="w-full" key={index}>
                <Link
                  href={`recipedetail/${encodeURIComponent(item.recipe.label)}`}
                  prefetch={true}
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
          // TODO => add something with this msg like img or gif
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">
            No Data available
          </div>
        )}
      </div>
    </div>
  );
};

export default Cravings;
