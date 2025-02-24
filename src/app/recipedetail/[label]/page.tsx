"use client";
import { notFound } from "next/navigation";
import * as Icons from "../../../components/icons";
import { useEffect, useState } from "react";
import { fetchRecipes } from "@/services/recipes";
import { Recipes } from "@/types";
import { DIRECTIONS } from "../../../constants";

const RecipeDetail = ({ params }: { params: { label: string } }) => {
  const { label } = params;
  const [loading, setLoading] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState<Recipes | null>(null);

  if (!label) return notFound();

  const getRecipeDetails = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes("cravings");
      const detail = data?.hits[0];
      console.log(detail);
      setRecipeDetail(detail);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="w-[90%] mx-auto mt-6">
      <div className="flex gap-10 w-[100%]">
        <div className="w-[75%] flex flex-col gap-4">
          <p className="inline underline decoration-gray-400 text-blue-500">
            RECIPES
          </p>
          <h2 className="text-3xl">{decodeURIComponent(label)}</h2>
          <hr className="bg-gray-500" />

          <div className="flex flex-col gap-6">
            {/* Content */}
            {/* submitted by */}
            <div className="">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-400 w-12 h-12 rounded-full  flex items-center justify-center">
                    N
                  </div>
                  <p className="text-xl">
                    submitted by{" "}
                    <span className="text-blue-700">
                      {recipeDetail?.recipe.source}
                    </span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <Icons.BookMarkIcon.Save />
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    {" "}
                    <Icons.PrintIcon />
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <Icons.DownloadIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Qoute */}
            {/* <div className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              architecto saepe repudiandae unde inventore consequatur
              cupiditate, fuga provident, sequi a, quibusdam at adipisci
              nesciunt tenetur? Nam ipsam officiis rem dolore.
            </div> */}

            {/* images */}
              <div className="w-full">
                <img className="w-full" src={recipeDetail?.recipe.image} alt="as" />
              </div>

            <div className="flex gap-10">
              {/* Directions container */}
              <div>
                <h3 className="text-xl">DIRECTIONS</h3>
                <ol className="space-y-6 mt-4 list-inside list-decimal">
                  {DIRECTIONS.map((step, index) => {
                    return (
                        <li>{step}</li>
                    );
                  })}
                </ol>
              </div>
              {/* Ingredients component */}
              <div >
                <h3 className="text-xl">INGREDIENTS</h3>
                <ul className="space-y-6 mt-4 list-outside list-disc">
                  {recipeDetail &&
                    recipeDetail?.recipe.ingredientLines?.map(
                      (ingredients, index) => {
                        return (
                            <li>{ingredients}</li>
                        );
                      }
                    )}
                </ul>
              </div>
            </div>
          </div>

          {/* Related images */}
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="h-[100vh] w-[20%] bg-red-100 mt-4 ">
          <img src="/images/advertise.webp" alt="advertisement" className="h-[100%] "/>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
