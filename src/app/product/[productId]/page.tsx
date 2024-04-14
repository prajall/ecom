"use client";
import React, { useState } from "react";
import Image from "next/image";
import product from "@/products";
import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  const sizes = ["S", "M", "L"];

  const handleClick = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row gap-4 py-20 ">
      <div className=" lg:w-1/2">
        <Image
          src={require(`../../../../public/products/${product[7].image}`)}
          alt="YK Disney Girls Pink Moans Printed Dress"
          className=" w-full max-w-[500px] mx-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col  mt-6">
        <h3 className="text-2xl font-bold">
          YK Disney Girls Pink Moans Printed Dress
        </h3>
        <p className="text-gray-700 mt-4 text-lg">
          $80.00 <del>$100.00</del>
        </p>

        <div className="mt-6">
          <p className="text-gray-700 mt-2">
            Colored tunic, Orange, black, Green, willow with a high quality
            fined tuned fabrics
          </p>
        </div>
        <p className="text-md font-semibold mt-4">Sizes</p>

        <div className="flex gap-2 mt-1">
          {sizes.map((size) => (
            <button
              key={size}
              className={` p-2 w-9 h-9 rounded-md border border-black ${
                selectedSize === size
                  ? "bg-black text-white"
                  : " hover:bg-zinc-200"
              }`}
              onClick={() => handleClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <button>
            <BuyNow />
          </button>
          <button>
            <AddToCart />
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;
