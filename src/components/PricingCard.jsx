export function PricingCard() {
  return (
    <section className="w-full md:w-[50%] bg-white flex flex-col items-center justify-center mt-8">
      <p className=" uppercase text-base font-bold text-Text ">
        100k Pageviews
      </p>
      {/* Slider */}

      <input
        id="steps-range"
        type="range"
        min={0}
        max={100}
        value={50}
        step={2}
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${50}%, gray ${50}%, gray 100%)`,
        }}
        className={"w-full my-12 h-3 rounded-lg appearance-none cursor-pointer"}
      />
    </section>
  );
}

// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
