import React from "react";
import { IoIosCall, IoLogoInstagram } from "react-icons/io";
import { RiMetaFill, RiTwitterFill, RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      heading: "Shop",

      links: [
        {
          to: "#",
          name: "Men's top wear",
        },
        {
          to: "#",
          name: "Women's top wear",
        },
        {
          to: "#",
          name: "Men's bottom wear",
        },
        {
          to: "#",
          name: "Women's bottom wear",
        },
      ],
    },
    {
      heading: "Support",

      links: [
        {
          to: "#",
          name: "Contact us",
        },
        {
          to: "#",
          name: "About us",
        },
        {
          to: "#",
          name: "FAQs",
        },
        {
          to: "#",
          name: "Features",
        },
      ],
    },

    {
      heading: "Follow us",
      followus: true,
      links: [
        {
          to: "#",
          name: <RiMetaFill className="h-5 w-5" />,
        },
        {
          to: "#",
          name: <IoLogoInstagram className="h-5 w-5" />,
        },
        {
          to: "#",
          name: <RiTwitterXLine className="h-5 w-5" />,
        },
      ],
    },
  ];

  const date = new Date();
  const currYear = date.getFullYear();

  console.log(currYear);

  return (
    <footer className="border-t py-12 bg-pink-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-4">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about products, exclusive events, and online
            offers.
          </p>
          <p className="text-gray-500 mb-4">
            Sign up and get 10% off on your first order.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-red-300 rounded-l-md focus:outline-none  focus:ring-pink-300 transition-all"
              required
            />

            <button
              className=" bg-pink-300 text-white px-6 py-2 text-sm rounded-r-md font-semibold hover:bg-pink-400 transition cursor-pointer"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        {footerData.map((i, index) => {
          return (
            <div key={index}>
              <h3 className="text-lg text-gray-800 mb-4">{i.heading}</h3>

              {!i.followus ? (
                <ul className="space-y-2 text-gray-600">
                  {i.links.map((items, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={items.to}
                          className="hover:text-pink-400 transition-colors"
                        >
                          {items.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <>
                  <div
                    className="flex items-center space-x-4 mb-4 "
                    key={index}
                  >
                    {i.links.map((items, index) => {
                      return (
                        <a
                          className="hover:text-pink-400"
                          href={items.to}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {items.name}
                        </a>
                      );
                    })}
                  </div>
                  <h3 className="text-lg text-gray-800 mb-4">{"Call us"}</h3>
                  <span className="text-gray-700">
                    {<FiPhoneCall className="inline-block mr-2" />} 0348246101
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="container  mx-auto mt-12 px-4 lg:px-0 border-t  pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          {currYear},{" "}
          <a
            href="https://muhammadzuhaib.vercel.app"
            target="_blank"
            className="text-pink-300 hover:text-pink-400"
          >
            Muhammad Zohaib.
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
