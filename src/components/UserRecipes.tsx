import { getAllUserRecipes } from "@/app/actions/actions";
import Link from "next/link";
import { SquareCard } from "./Cards";

export default async function UserRecipes() {
  const recipes = await getAllUserRecipes(); // Fetch directly on the server

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center text-4xl">
        <p>Uploaded recipes</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/ideas`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {recipes.length > 0 ? (
          recipes.slice(0, 4).map((item) => (
            <Link key={item.id} href={`recipedetail/${item.id}`}>
              <SquareCard title={item.heading} />
            </Link>
          ))
        ) : (
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">
            No Data available
          </div>
        )}
      </div>
    </div>
  );
}
