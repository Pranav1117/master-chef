import Image from "next/image";
import * as Components from "../components";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <ToastContainer />
      <Components.HeroSection />
      <Components.Cravings />
      <Components.ExploreMore />
      <Components.TrendingNow />
      <Components.DontMiss />
      <Components.MoreIdeas />
      <Components.SecondaryHeroSection/>
      <Components.FanFavourite/>
    </div>
  );
}
