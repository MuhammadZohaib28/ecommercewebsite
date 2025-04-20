import React from "react";

const ProductDetails = (props) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-4">
        {props.secHeadingName}
      </h2>
      product details
    </div>
  );
};

export default ProductDetails;
