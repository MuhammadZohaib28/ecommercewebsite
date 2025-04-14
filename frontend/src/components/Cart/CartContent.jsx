import React from "react";
import { RiDeleteBack2Line, RiDeleteBin2Line } from "react-icons/ri";

const CartContent = () => {
  const cartItems = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 4300,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 2,
      price: 5500,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Sneakers",
      size: "42",
      color: "White",
      quantity: 1,
      price: 6800,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Jacket",
      size: "XL",
      color: "Black",
      quantity: 1,
      price: 8900,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Dress",
      size: "S",
      color: "Pink",
      quantity: 1,
      price: 6200,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "Sweater",
      size: "M",
      color: "Gray",
      quantity: 3,
      price: 4500,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productId: 7,
      name: "Shorts",
      size: "L",
      color: "Green",
      quantity: 2,
      price: 3800,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productId: 8,
      name: "Hat",
      size: "One Size",
      color: "Black",
      quantity: 1,
      price: 2500,
      image: "https://picsum.photos/200?random=8",
    },
    {
      productId: 9,
      name: "Scarf",
      size: "One Size",
      color: "Purple",
      quantity: 1,
      price: 1800,
      image: "https://picsum.photos/200?random=9",
    },
    {
      productId: 10,
      name: "Socks",
      size: "M",
      color: "Multicolor",
      quantity: 5,
      price: 1200,
      image: "https://picsum.photos/200?random=10",
    },
    {
      productId: 11,
      name: "Blouse",
      size: "S",
      color: "White",
      quantity: 1,
      price: 3700,
      image: "https://picsum.photos/200?random=11",
    },
    {
      productId: 12,
      name: "Skirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 4100,
      image: "https://picsum.photos/200?random=12",
    },
    {
      productId: 13,
      name: "Coat",
      size: "L",
      color: "Beige",
      quantity: 1,
      price: 9500,
      image: "https://picsum.photos/200?random=13",
    },
    {
      productId: 14,
      name: "Gloves",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 2200,
      image: "https://picsum.photos/200?random=14",
    },
    {
      productId: 15,
      name: "Belt",
      size: "L",
      color: "Brown",
      quantity: 1,
      price: 1900,
      image: "https://picsum.photos/200?random=15",
    },
    {
      productId: 16,
      name: "Polo Shirt",
      size: "XL",
      color: "Blue",
      quantity: 2,
      price: 3500,
      image: "https://picsum.photos/200?random=16",
    },
    {
      productId: 17,
      name: "Sandals",
      size: "39",
      color: "Brown",
      quantity: 1,
      price: 5100,
      image: "https://picsum.photos/200?random=17",
    },
    {
      productId: 18,
      name: "Tie",
      size: "One Size",
      color: "Navy",
      quantity: 1,
      price: 2800,
      image: "https://picsum.photos/200?random=18",
    },
    {
      productId: 19,
      name: "Swimsuit",
      size: "M",
      color: "Black",
      quantity: 1,
      price: 4400,
      image: "https://picsum.photos/200?random=19",
    },
    {
      productId: 20,
      name: "Backpack",
      size: "One Size",
      color: "Gray",
      quantity: 1,
      price: 7500,
      image: "https://picsum.photos/200?random=20",
    },
  ];
  return (
    <div>
      {cartItems.map((i) => {
        return (
          <div
            key={i.productId}
            className="flex items-start justify-between py-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={i.image}
                alt={i.name}
                className="w-20 h-24 object-cover mr-4 rounded "
              />

              <div>
                <h3>{i.name}</h3>
                <p className="text-sm">size: {i.size} </p>
                color: <span style={{ color: i.color }}>{i.color}</span>
                <div className="flex items-center mt-2">
                  <button className="border rounded px-2 py-[1px] cursor-pointer outline-none text-xl font-medium  ">
                    -
                  </button>
                  <span className="mx-4">{i.quantity}</span>
                  <button className="border rounded px-2 py-[1px] cursor-pointer outline-none text-xl font-medium  ">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <p>PKR {i.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin2Line className="h-6 w-6 text-red-300 hover:text-red-500 cursor-pointer mt-2" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
