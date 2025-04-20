import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Carousel } from "../Common/carousel";

export const newArrivals = [
  {
    _id: 1,
    name: "Oversized Denim Jacket",
    price: 89.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=101",
        altText: "Oversized Denim Jacket",
      },
    ],
  },
  {
    _id: 2,
    name: "Cropped Hoodie",
    price: 45.5,
    images: [
      {
        url: "https://picsum.photos/500/500?random=102",
        altText: "Cropped Hoodie",
      },
    ],
  },
  {
    _id: 3,
    name: "Vintage Graphic Tee",
    price: 29.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=103",
        altText: "Vintage Graphic Tee",
      },
    ],
  },
  {
    _id: 4,
    name: "Cargo Pants",
    price: 59.95,
    images: [
      {
        url: "https://picsum.photos/500/500?random=104",
        altText: "Cargo Pants",
      },
    ],
  },
  {
    _id: 5,
    name: "Chunky Sneakers",
    price: 120.0,
    images: [
      {
        url: "https://picsum.photos/500/500?random=105",
        altText: "Chunky Sneakers",
      },
    ],
  },
  {
    _id: 6,
    name: "Y2K Sunglasses",
    price: 24.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=106",
        altText: "Y2K Sunglasses",
      },
    ],
  },
  {
    _id: 7,
    name: "Corduroy Bucket Hat",
    price: 34.5,
    images: [
      {
        url: "https://picsum.photos/500/500?random=107",
        altText: "Corduroy Bucket Hat",
      },
    ],
  },
  {
    _id: 8,
    name: "Mesh Sports Bra",
    price: 39.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=108",
        altText: "Mesh Sports Bra",
      },
    ],
  },
  {
    _id: 9,
    name: "Distressed Jeans",
    price: 65.0,
    images: [
      {
        url: "https://picsum.photos/500/500?random=109",
        altText: "Distressed Jeans",
      },
    ],
  },
  {
    _id: 10,
    name: "Puffer Jacket",
    price: 149.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=110",
        altText: "Puffer Jacket",
      },
    ],
  },
  {
    _id: 11,
    name: "Knit Sweater Vest",
    price: 55.25,
    images: [
      {
        url: "https://picsum.photos/500/500?random=111",
        altText: "Knit Sweater Vest",
      },
    ],
  },
  {
    _id: 12,
    name: "Platform Boots",
    price: 99.99,
    images: [
      {
        url: "https://picsum.photos/500/500?random=112",
        altText: "Platform Boots",
      },
    ],
  },
];

const NewArrivals = () => {
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshy added to
          keep your wardrobe on the cutting edge of fashion
        </p>
      </div>

      <Carousel />

      {/* <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
      >
        {newArrivals.map((i, index) => {
          return (
            <div
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
              key={i._id}
            >
              <img src={i.images[0]?.url} alt={i.images[0]?.altText} />

              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-lg text-white p-4 rounded-b-lg">
                <Link to={`/product/${i._id}`} className="block">
                  <h4 className="font-medium">{i.name}</h4>
                  <p className="mt-1 ">${i.price}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default NewArrivals;
