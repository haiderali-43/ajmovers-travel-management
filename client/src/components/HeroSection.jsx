import { Link } from "react-router-dom";
import Comparison from "./Comparison";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-[86.9vh] overflow-hidden ">
        <div className="flex flex-col mt-[6rem]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Embark on Unforgettable Journeys with AJ Movers <br /> Your
            University&apos;s Gateway to Adventure!
          </h1>
          <p className="w-fit text-center mx-auto mt-4 hidden md:block">
            Unlock the world with AJ Movers, your trusted university travel
            partner, <br />
            dedicated to offering exclusive, educational, and exhilarating
            travel experiences <br />
            designed specifically for our academic community. From historical
            tours that bring textbooks <br />
            to life to adventurous excursions that challenge the spirit, <br />
            AJ Movers is here to ensure your journey is not just a trip, but a
            leap into a world of learning <br />
            and unforgettable memories. Get ready to explore, discover, and grow
            with us!
          </p>
          <p className=" w-[80%] text-center mx-auto mt-4 md:hidden text-[16px]">
            Discover the world with AJ Movers, your go-to university travel partner! We specialize in exclusive, educational travel experiences tailored for the academic community. Whether it’s bringing history to life or embarking on adventurous excursions, we are here to make your journey unforgettable. Explore, discover, and grow with us—where every trip is a leap into learning.
          </p>
        </div>
        <button className="mt-5 bg-blue-500 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold">
          <Link to="tel:+923075430">Contact Us</Link>
        </button>
      </div>
      <div className="relative top-[-3rem]">
        <Comparison />
      </div>
    </>
  );
};

export default HeroSection;
