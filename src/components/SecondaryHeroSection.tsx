"use client";
import { useRouter } from "next/navigation";

const SecondaryHeroSection = () => {
  const router = useRouter();

  return (
    <div className="flex border-2 border-gray-100 rounded w-[90%] mx-auto">
      <div
        className="w-[65%] cursor-pointer"
        onClick={() => {
          router.push("/recipelist/pumpkin");
        }}
      >
        <img src="/images/HeroSectionImage.webp" alt="Pumpkin Recipes" />
      </div>
      <div className="w-[35%] py-14 px-6 space-y-4">
        <p className="text-lg">COLLECTION</p>
        <h3 className="text-3xl font-semibold">41 SAVORY PUMPKIN RECIPES</h3>
        <p className=" text-lg">
          Want to embrace the fall pumpkin craze with more than just a spiced
          latte? Broaden your autumnal horizons, one un-sweetened recipe at a
          time.
        </p>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;
