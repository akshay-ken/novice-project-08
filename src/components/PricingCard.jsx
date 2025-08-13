import { useState } from "react";

const pricingDetails = [
  { pageviews: "10K", price: "8" },
  { pageviews: "50K", price: "12" },
  { pageviews: "100K", price: "16" },
  { pageviews: "500k", price: "24" },
  { pageviews: "1M", price: "36" },
];

export function PricingCard() {
  const [sliderValue, setSliderValue] = useState(1);
  let currentPriceIndex = 0;
  const currentData = pricingDetails[currentPriceIndex];
  const [curretnPrice, setCurrentPrice] = useState(pricingDetails[0].price);

  function handleValueChange(event) {
    setSliderValue(event.target.value);
    currentPriceIndex = Math.ceil(sliderValue / 20) - 1;
    setCurrentPrice(pricingDetails[currentPriceIndex].price);
  }
  return (
    <section className="w-full md:w-[50%] bg-white flex flex-col items-center justify-center mt-8 p-4">
      <p className=" uppercase text-base font-bold text-Text ">
        100k Pageviews
      </p>
      {/* Slider */}

      <input
        id="steps-range"
        type="range"
        onChange={handleValueChange}
        min={1}
        max={100}
        value={sliderValue}
        step={1}
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${sliderValue}%, hsl(224, 65%, 95%) ${sliderValue}%, hsl(224, 65%, 95%) 100%)`,
        }}
        className={"w-full my-12 h-3 rounded-lg appearance-none cursor-pointer"}
      />
      <div className="flex flex-row justify-center gap-x-4 items-center">
        <p className="text-5xl font-extrabold text-CTA-Background">
          ${curretnPrice}.00{" "}
        </p>
        <p className="text-xl font-semibold text-Text mt-1">/ month</p>
      </div>
    </section>
  );
}
