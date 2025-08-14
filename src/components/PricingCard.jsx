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
  let [currentPageview, setCurrentPageview] = useState(
    pricingDetails[0].pageviews
  );
  const [curretnPrice, setCurrentPrice] = useState(pricingDetails[0].price);
  const [toggleSwtich, setToggleSwitch] = useState(false);

  function handleToggle() {
    setToggleSwitch((prev) => !prev);
  }

  function handleValueChange(event) {
    setSliderValue(event.target.value);
    currentPriceIndex = Math.ceil(sliderValue / 20) - 1;
    setCurrentPageview(pricingDetails[currentPriceIndex].pageviews);
    setCurrentPrice(pricingDetails[currentPriceIndex].price);
  }
  return (
    <section className="w-full md:w-[50%] bg-white flex flex-col items-center justify-center mt-8 p-4">
      <div className="md:w-full contents md:flex md:flex-row md:flex-wrap md:justify-around  md:mt-6 md:items-center">
        <p className=" uppercase md:-order-3 text-base    font-bold text-Text ">
          {currentPageview} pageviews
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
          className={
            "w-full my-12 h-3 rounded-lg appearance-none md:-order-1 cursor-pointer"
          }
        />
        <div className="flex flex-row justify-center   md:-order-2 md:gap-x-2 gap-x-4 items-center">
          <p className="text-5xl font-extrabold text-CTA-Background">
            ${toggleSwtich ? curretnPrice * 0.75 : curretnPrice}.00{" "}
          </p>
          <p className="text-xl font-semibold text-Text mt-1">/ month</p>
        </div>
      </div>
      {/* toggle swtich */}
      <div className="flex gap-x-2 flex-row items-center justify-center text-base font-semibold text-Text mt-6 w-full">
        <p className="">Monthly Billing</p>
        <label
          className={` w-15 relative  rounded-full h-7 ${
            toggleSwtich ? "bg-Slider-Backround" : "bg-CTA-Text"
          }`}
        >
          <input
            type="checkbox"
            className="sr-only peer"
            checked={toggleSwtich}
            onChange={handleToggle}
          />
          <div className="bg-white absolute top-1 left-1 peer-checked:translate-x-8 transition-all w-5 h-5 rounded-full"></div>
        </label>
        <p>Yearly Billing</p>
        <p className="bg-Discount-Text/30 px-1 md:hidden rounded-full text-Discount-Text">
          -25%
        </p>
        <p className="bg-Discount-Text/30 px-2 hidden md:block rounded-full text-Discount-Text">
          25% discount
        </p>
      </div>
      <div className="w-[105%] h-1 bg-Empty-Slider-Bar my-6 -mx-4"></div>
      <div className=" contents md:flex md:flex-row md:flex-wrap md:justify-around md:w-full ">
        <ul className="list-image-[url('./assets/images/icon-check.svg')] flex flex-col md:items-start md:justify-center gap-y-4 items-center h-[140px] w-[240px] text-base font-bold text-Text">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="text-base font-extrabold bg-CTA-Background py-2 px-8 md:h-fit md:self-center rounded-full text-CTA-Text">
          Start My Trial
        </button>
      </div>
    </section>
  );
}
