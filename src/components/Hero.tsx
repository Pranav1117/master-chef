import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-[90%] h-[90vh] mx-auto bg-cover bg-center bg-[url('/images/HeroSectionImage.webp')]">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

      <div className="relative top-[45%] left-20 text-white z-10 w-[90%]">
        <div className="text-5xl w-[500px] font-bold">
          Our 54 Most-Comforting Casserole Recipes
        </div>
        <button className="bg-yellow-600 py-2 px-4 rounded text-black mt-4">
          SEE THEM ALL
        </button>
      </div>
    </div>
  );
};

export default Hero;
