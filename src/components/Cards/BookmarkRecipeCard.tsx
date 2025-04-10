"use client";
import { useRouter } from "next/navigation";

const BookmarkRecipeCard = ({
  title,
  author,
  votes,
  imageUrl,
  id,
}: {
  title: string;
  author: string;
  votes: number;
  imageUrl: string;
  id: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
      onClick={() => router.push(`userrecipedetail/${id}`)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">By {author}</p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★★★★★</span>
          <span>({votes})</span>
        </div>
      </div>
    </div>
  );
};

export default BookmarkRecipeCard;
