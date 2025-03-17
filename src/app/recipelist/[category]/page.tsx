"use client";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
import { Recipes } from "@/types";
import ListCard from "@/components/Cards/ListCard";

const RecipeList = ({ params }: { params: { category: string } }) => {
  const [recipeList, setRecipeList] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { category } = params;

  const getRecipeList = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes(category);
      const recipes = data?.hits;
      setRecipeList(recipes);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <div className="w-full mt-6">
      {/* title section */}
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl">Quick & Easy {category} recipes</h2>
        <p className="mt-4">
          Discover a variety of delicious recipes curated just for you. Find
          inspiration for your next meal and start cooking today! From quick
          bites to gourmet meals, explore recipes that suit every craving.
          Whether you're a beginner or a seasoned chef, there's something for
          everyone. Unleash your inner cook and create something amazing today!
        </p>
      </div>

      {/* body */}
      <div className=" bg-gray-100 mt-6">
        <div className="flex w-[79%] mx-auto justify-between pt-12">
          {/* content */}
          {loading ? (
            <div className="w-[70%]">
              {/* @typescript-eslint/no-unused-vars */}
              {[...Array(1)].map((_, index) => (
                <ListCard key={index} title="" source="" image="" loading={loading} />
              ))}
            </div>
          ) : (
            <div className="w-[70%]">
              {recipeList?.map((recipe, index) => {
                return (
                  <ListCard
                  key={index}
                    title={recipe?.recipe.label}
                    image={recipe?.recipe.image}
                    source={recipe?.recipe?.source}
                  />
                );
              })}
            </div>
          )}

          {/* ad container */}
          <div className="h-[100vh] w-[25%] bg-red-100 mt-4 ">
            <img
              src="/images/advertise.webp"
              alt="advertisement"
              className="h-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
