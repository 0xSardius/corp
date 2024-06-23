import homeImg from "public/bitcoin-mine-2.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="car factory"
      title="American Green Bitcoin Mining"
    />
  );
}
