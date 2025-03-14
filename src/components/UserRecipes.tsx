import Link from "next/link";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getAllUserRecipes } from "@/app/actions/actions";
import { SquareCard } from "./Cards";
import { getAwsGetCommand, getS3Client } from "@/lib/utils";

export default async function UserRecipes() {
  const recipes = await getAllUserRecipes();
  const s3Client = getS3Client();

  const recipesWithImages = await Promise.all(
    recipes.map(async (recipe) => {
      if (!recipe.photos) return { ...recipe, imageUrl: null };

      const command = getAwsGetCommand(recipe?.photos);

      const signedUrl = await getSignedUrl(s3Client, command, {
        expiresIn: 3600,
      });

      return { ...recipe, imageUrl: signedUrl };
    })
  );

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center text-4xl">
        <p>Uploaded Recipes</p>
        <div className="text-blue-500 text-sm cursor-pointer">
          <Link href={`recipelist/ideas`}>VIEW ALL</Link>
        </div>
      </div>
      <div className="flex gap-10 mt-4">
        {recipesWithImages.length > 0 ? (
          recipesWithImages.slice(0, 4).map((item) => (
            // TODO=> add proper href after creating detail page for user uploaded recipes
            <Link key={item.id} href={`/userrecipedetail/${item.id}`}>
              <SquareCard
                title={item.heading}
                image={item.imageUrl ?? ""}
                alt="No preview available"
              />
            </Link>
          ))
        ) : (
          <div className="w-[100%] h-[200px] border border-gray-200 text-center leading-[200px] text-xl">
            No Data Available
          </div>
        )}
      </div>
    </div>
  );
}
