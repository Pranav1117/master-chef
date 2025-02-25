import { CardProps, Recipes } from "@/types";

const BottomFadeSquareCard: React.FC<CardProps> = ({
  title,
  image,
  loading = true,
}) => {
  return (
    <>
      {loading ? (
        <div className="w-full h-[370px] rounded relative overflow-hidden animate-pulse bg-gray-100 p-5">
          <div className="bg-gray-300 animate-pulse w-[200px] h-[25px] absolute bottom-16"></div>
          <div className="bg-gray-300 animate-pulse w-[300px] h-[25px] mt-4 absolute bottom-6"></div>
        </div>
      ) : (
        <div
          className="w-full h-[370px] rounded relative overflow-hidden cursor-pointer"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-4 left-4 z-10 text-white p-2">
            <p className="text-lg font-light">COLLECTION</p>
            <h2 className="text-3xl">
              {title.length > 20 ? `${title.slice(0, 40)}...` : title}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomFadeSquareCard;
