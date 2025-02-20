import Image from "next/image";
import * as Components from "../components";
import Cravings from "@/components/craving/Cravings";

export default function Home() {
  return (
    <div className="flex flec-col">
      <Components.HeroSection />
      <Cravings/>
    </div>
  );
}
