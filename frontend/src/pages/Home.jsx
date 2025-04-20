import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionCenter from "../components/Products/GenderCollectionCenter";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionCenter />
      <NewArrivals />

      <ProductDetails secHeadingName={"Best Seller"} />
    </div>
  );
};

export default Home;
