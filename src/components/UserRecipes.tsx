import Link from "next/link";
import { S3Client, GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getAllUserRecipes } from "@/app/actions/actions";
import { SquareCard } from "./Cards";

export default async function UserRecipes() {
  const recipes = await getAllUserRecipes();
  // @ts-ignore
  const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
      secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
    },
  });

  const getObject = async (key: any) => {
    const command = new GetObjectCommand({
      Bucket: "master-chef-bucket",
      Key: key,
    });
    const a = await getSignedUrl(s3Client, command);
    return a;
  };
  const imgUrl = await getObject("sc.png");

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
              <SquareCard title={item.heading} image={imgUrl} />
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
