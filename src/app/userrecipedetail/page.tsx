"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const mockRecipes = [
  {
    id: "1",
    name: "Chocolate Cake",
    image: "/images/chocolate-cake.jpg",
    ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup cocoa powder"],
    directions: "Mix ingredients and bake at 180°C for 30 minutes.",
  },
  // {
  //   id: "2",
  //   name: "Pasta",
  //   image: "/images/pasta.jpg",
  //   ingredients: ["200g pasta", "1 cup tomato sauce", "1 tsp salt"],
  //   directions: "Boil pasta and mix with sauce.",
  // },
];

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState<any | null>(mockRecipes[0]);
  
  useEffect(() => {
    console.log(params)
    // setRecipe(mockRecipes[0]);
  }, [params.id, router]);

  if (!recipe) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
      <div className="w-full max-w-3xl">
        <Image
          src={recipe.image}
          alt={recipe.name}
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full object-cover"
        />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-lg">
            {recipe.ingredients.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Directions</h2>
          <p className="text-lg leading-7">{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
}
