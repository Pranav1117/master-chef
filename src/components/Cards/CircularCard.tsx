interface CircularCardProps {
  title: string;
  image: string; // Assuming image is a URL string
}

const CircularCard: React.FC<CircularCardProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col cursor-pointer justify-between w-full gap-4 text-center items-center">
      <div className="h-[200px] w-[200px] ">
        <img src={image} alt={title} className="rounded-full w-full hover:-translate-y-2" />
      </div>
      <div className="text-xl hover:text-blue-500">{title.length > 20 ? `${title.slice(0, 20)}...` : title}</div>
    </div>
  );
};

export default CircularCard;
