import Link from "next/link";
import Slider from "../Slider";

const RecommendationSection = () => {
  return (
    <section id="recommended__products__slider" className="pt-[32px]">
      <div className="container mx-auto">
        <div className="block md:flex justify-between items-center mb-[24px]">
          <h2 className="text-[30px] font-semibold">Odporúčame</h2>
          <Link href="/" className="hidden md:block">
            zobraziť ďalšie produkty v akcii
          </Link>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default RecommendationSection;
