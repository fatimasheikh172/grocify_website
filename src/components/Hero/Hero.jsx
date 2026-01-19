import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center pt-35 md:pt-25 min-h-screen">
        {/** Hero Content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14  mt-4 font-bold ">
            Tasty Orgranic <span className="text-orange-500 ">Fruits</span> &{" "}
            <span className="text-orange-500 ">Veggies</span> <br/> In Your City
          </h1>
          <p className="md:text-lg text-md text-zinc-600 max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now"/>
        </div>

        {/** Hero Image */}

        <div className="flex-1">
          <img src={Grocery} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
