import React from "react";
import landinghero from "../../assets/landinghero.png";

const Hero = () => {
  return (
    <section>
      <div className="h-[40rem] w-full">
        <img src={landinghero} alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Hero;
