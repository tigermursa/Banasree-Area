import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import BlockA from "./components/Blocks/BlockA";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export default function Home() {
  return (
    <main className="">
      <NavigationBar />
      <HeroSection />
      <BlockA />
    </main>
  );
}
