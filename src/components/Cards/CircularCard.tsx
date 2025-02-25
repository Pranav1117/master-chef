import { CardProps } from "@/types";

const CircularCard: React.FC<CardProps> = ({
  title,
  image,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <div className="flex flex-col justify-between w-full gap-4 items-center">
          <div className="h-[180px] w-[180px] bg-gray-200 animate-pulse rounded-full"></div>
          <div className=" bg-gray-100 h-[15px] w-[140px] animate-pulse">
            {/* {title.length > 20 ? `${title.slice(0, 20)}...` : title} */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col cursor-pointer justify-between w-full gap-4 text-center items-center">
          <div className="h-[200px] w-[200px] ">
            <img
              src={image}
              alt={title}
              className="rounded-full w-full transition-transform duration-200 hover:-translate-y-2"
            />
          </div>
          <div className="text-xl hover:text-blue-500 text-gray-700">
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </div>
        </div>
      )}
    </>
  );
};

export default CircularCard;
