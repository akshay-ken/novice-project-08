import { HeaderSection } from "./HeaderSection";
import { PricingCard } from "./PricingCard";

export function MainPage() {
  return (
    <main className="flex flex-col items-center justify-start px-[4%] py-[8%] md:py-[5%]">
      <HeaderSection />
      <PricingCard />
    </main>
  );
}
