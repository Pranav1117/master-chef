import Image from "next/image";
import * as Components from "../components";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <ToastContainer />
      <Components.HeroSection />
      <Components.Cravings />
      <Components.ExploreMore />
    </div>
  );
}
