"use client";
import { useEffect, useState } from "react";
import { Recipes } from "@/types";
import { SearchBar } from "@/components";
import { ListCard } from "@/components/Cards";
import { fetchRecipes } from "@/services/recipes";
import { toast } from "react-toastify";
import { ErrorMessages } from "@/constants";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);

  useEffect(() => {
    const getRecipeList = async () => {
      try {
        const data = await fetchRecipes(searchItem);
        const recipes = data?.hits;
        setRecipes(recipes);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        toast.error(ErrorMessages.FETCH_RECIPE_FAILED);
      }
    };
    if (searchItem) {
      getRecipeList();
    }
  }, [searchItem]);

  return (
    <div>
      <SearchBar setRecipe={setSearchItem} />
      <div className="w-[70%] mx-auto mt-6">
        {recipes
          ? recipes?.map((item, index) => (
              <>
                <ListCard
                  key={index}
                  title={item?.recipe?.label}
                  image={item?.recipe?.image}
                  source={item?.recipe.source}
                />
              </>
            ))
          : "Recipes will be display here..."}
      </div>
    </div>
  );
};

export default Search;
