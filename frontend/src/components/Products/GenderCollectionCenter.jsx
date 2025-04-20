import React from "react";
import womencollection from "../../assets/womencollection.jpg";
import mencollection from "../../assets/mencollection.jpg";
import { Link } from "react-router-dom";

const GenderCollectionCenter = () => {
  const collectionData = [
    {
      image: womencollection,
      title: "Women's Collection",
      to: "/collection/all?gender=Women",
      linktext: "Shop Now",
      color: "bg-pink-300",
    },
    {
      image: mencollection,
      title: "Men's Collection",
      to: "/collection/all?gender=Men",
      linktext: "Shop Now",
      color: "bg-blue-300",
    },
  ];
  return (
    <section className="py-16 px-4 lg:px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-7">
        {collectionData.map((i, index) => {
          return (
            <div className="relative flex-1 rounded-2xl">
              <img
                src={i.image}
                alt="women collection"
                className="w-full h-[900px] object-cover rounded-sm"
              />

              <div
                className={`absolute bottom-8 left-8 ${i.color} bg-opacity-80 p-4`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {i.title}
                </h2>
                <Link to={i.to} className="text-gray-900 underline">
                  {i.linktext}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GenderCollectionCenter;
