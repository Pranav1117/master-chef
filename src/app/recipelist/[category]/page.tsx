"use client";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
import { Recipes } from "@/types";
import ListCard from "@/components/Cards/listCard";

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
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  if (loading) {
    return <p> loading......</p>;
  }

  return (
    <div className="w-full mt-6">
      {/* title section */}
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl">40 Quick & Easy Chicken Dinners</h2>
        <p className="mt-4">
          Fast and affordable, chicken is king come dinnertime. Whatever cuisine
          you crave, we've got five-star recipes for you, all under 30 minutes.
          Need more inspiration? Check out our best baked chicken recipes and
          creative ways to use chicken breasts.
        </p>
      </div>

      {/* body */}
      <div className=" bg-gray-100 mt-6">
        <div className="flex w-[79%] mx-auto justify-between pt-12">
          <div className="w-[70%]">
            {recipeList?.map((recipe, index) => {
              return (
                <ListCard
                  title={recipe?.recipe.label}
                  image={recipe?.recipe.image}
                  source={recipe?.recipe?.source}
                />
              );
            })}
          </div>

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
