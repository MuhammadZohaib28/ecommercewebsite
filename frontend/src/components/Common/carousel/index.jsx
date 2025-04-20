import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { newArrivals } from "../../Products/NewArrivals";

const OPTIONS = { align: "start", loop: true, dragFree: true };

export const Carousel = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">New Arrivals</h2>
        <EmblaCarousel slides={newArrivals} options={OPTIONS} />
      </div>
    </div>
  );
};