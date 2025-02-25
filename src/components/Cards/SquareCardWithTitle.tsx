import { CardProps } from "@/types";

const SquareCard: React.FC<CardProps> = ({ title, image, loading }) => {
  return (
    <>
      {loading ? (
        <div className="w-full gap-2 h-[270px] animate-pulse bg-gray-100 rounded overflow-hidden border-2 border-gray-100 aspect-square">
          <div className="h-[20px] w-[190px] bg-gray-200 animate-pulse absolute bottom-10 left-4">
          </div>
        </div>
      ) : (
        <div className="w-full gap-2 h-[270px] rounded overflow-hidden cursor-pointer border-2 border-gray-100 aspect-square">
          <div className="h-[75%]">
            <img src={image} alt="" className="h-full w-full" />
          </div>
          <h2 className="text-2xl h-[40px] text-gray-800 py-1 px-2">
            {title?.length > 20 ? `${title?.slice(0, 35)}...` : title}
          </h2>
        </div>
      )}
    </>
  );
};

export default SquareCard;
