"use client";
import { useEffect, useState } from "react";
import { Recipes } from "@/types";
import { SearchBar } from "@/components";
import { ListCard } from "@/components/Cards";
import { fetchRecipes } from "@/services/recipes";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [recipes, setRecipes] = useState<Recipes[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRecipeList = async () => {
      setLoading(true);
      try {
        const data = await fetchRecipes(searchItem);
        const recipes = data?.hits;
        setRecipes(recipes);
      } finally {
        setLoading(false);
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
