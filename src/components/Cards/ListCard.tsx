import Link from "next/link";
import { CardProps } from "@/types";

const ListCard: React.FC<CardProps> = ({ title, image, source, loading }) => {
  return (
    <div className="mx-auto">
      {loading ? (
        <>
        {/* TODO => Add skeleton loading here... */}
          {/* <div className="w-full shadow-lg h-[300px]">asds</div>
          <div className="bg-white relative -top-20 w-[90%] mx-auto min-h-[200px] p-6 space-y-2">
            <p className="text-xl"></p>
          </div> */}
          <div className="flex items-center justify-center">
            <p>Loading...</p>
          </div>
        </>
      ) : (
        <Link href={`/recipedetail/${title}`} className="flex flex-col" prefetch={true}>
          <div className="w-full shadow-lg">
            <img
              src={`${image}`}
              alt="recipe thumbnail"
              className="w-full h-[420px]"
            />
          </div>
          <div className="bg-white relative -top-20 w-[90%] mx-auto border-b-4 border-sky-400 min-h-[200px] p-6 space-y-2">
            <p className="text-xl">RECIPE</p>
            <div className="text-3xl">{title}</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus tenetur facere, omnis minus voluptates architecto
              beatae nihil molestias natus odio reprehenderit assumenda
              asperiores eum! Nihil ea natus omnis laboriosam et!
            </div>
            <div>-{source}</div>
          </div>
        </Link>
      )}
      {/* <Link href={`/recipedetail/${title}`} className="flex flex-col">
        <div className="w-full shadow-lg">
          <img
            src={`${image}`}
            alt="recipe thumbnail"
            className="w-full h-[420px]"
          />
        </div>
        <div className="bg-white relative -top-20 w-[90%] mx-auto border-b-4 border-sky-400 min-h-[200px] p-6 space-y-2">
          <p className="text-xl">RECIPE</p>
          <div className="text-3xl">{title}</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            tenetur facere, omnis minus voluptates architecto beatae nihil
            molestias natus odio reprehenderit assumenda asperiores eum! Nihil
            ea natus omnis laboriosam et!
          </div>
          <div>-{source}</div>
        </div>
      </Link> */}
    </div>
  );
};

export default ListCard;
