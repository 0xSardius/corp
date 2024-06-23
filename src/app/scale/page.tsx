import scaleImg from "public/scale.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="mining factory"
      title="Industrial scale mining operations"
    />
  );
}
