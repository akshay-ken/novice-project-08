export function HeaderSection() {
  return (
    <header className=" w-full md:w-[50%] bg-[url('./assets/images/pattern-circles.svg')] bg-center bg-size-[48%] md:bg-size-[21%] h-48 md:h-36 bg-no-repeat">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-2xl font-bold text-CTA-Background">
          Simple, traffic-based pricing
        </h1>
        <h2 className="text-center text-lg font-semibold text-Text mx-[20%] md:mx-0">
          Sign-up for our 30-day trial. No credit card required.
        </h2>
      </div>
    </header>
  );
}
