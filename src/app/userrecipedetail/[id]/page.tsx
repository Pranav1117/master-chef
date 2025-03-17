import { notFound } from "next/navigation";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getRecipeById } from "@/app/actions/actions";
import { getAwsGetCommand, getS3Client } from "@/lib/utils";

export default async function RecipeDetail({
  params,
}: {
  params: { id: string };
}) {
  const recipe = await getRecipeById(params.id);

  if (!recipe.photos) {
    return { ...recipe, imageUrl: null };
  }

  const command = getAwsGetCommand(recipe.photos);
  const signedUrl = await getSignedUrl(getS3Client(), command, {
    expiresIn: 3600,
  });

  if (!recipe) return notFound();
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
      <div className="w-full max-w-3xl">
        <img
          src={signedUrl}
          alt={recipe.name}
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full object-cover"
        />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          {recipe.ingredients}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Directions</h2>
          <p className="text-lg leading-7">{recipe.directions}</p>
        </div>
      </div>
    </div>
  );
}
