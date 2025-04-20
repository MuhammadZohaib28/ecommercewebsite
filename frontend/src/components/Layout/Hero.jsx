import React from "react";
import landinghero from "../../assets/lp.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[40rem] w-full">
        <img src={landinghero} alt="" className="w-full h-full" />
      </div>

      <div className="absolute inset-0.5 bg-[#0000009e] rounded-sm flex items-center justify-center">
        <div className="text-center text-black  p-6">
          <h1 className="text-4xl bg-[#ff63e5c4] md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>

          <p className="bg-white text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast shipping
          </p>

          <Link
            to={"#"}
            className="bg-black text-gray-100 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
