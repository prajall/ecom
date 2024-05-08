"use client";
import React, { useState } from "react";
import Image from "next/image";
import products from "@/products";
import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams } from "next/navigation";
<<<<<<< HEAD
=======
import dummyProducts from "@/products";
>>>>>>> 9ab6dd659e4a28914306044f96024ab6de0af47c

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  const sizes = ["S", "M", "L"];

  const handleClick = (size: string) => {
    setSelectedSize(size);
  };

  const productId = useParams().productId;
<<<<<<< HEAD
  const product = products.find((product) => product.id === productId);
=======
  const product = dummyProducts.find((product) => product.id === productId);
  console.log(product);
>>>>>>> 9ab6dd659e4a28914306044f96024ab6de0af47c

  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row gap-4 py-20 ">
      <div className=" lg:w-1/2">
<<<<<<< HEAD
        <img
          src={product?.image}
          className=" w-full aspect-[3/4] "
          alt="tshirt"
=======
        <Image
          src={require(`../../../../public/products/${product?.image}`)}
          alt="YK Disney Girls Pink Moans Printed Dress"
          className="  w-[400px] mx-auto rounded-lg"
>>>>>>> 9ab6dd659e4a28914306044f96024ab6de0af47c
        />
      </div>
      <div className="flex flex-col  mt-6">
        <h3 className="text-2xl font-bold">{product?.name}</h3>
        <p className="text-gray-700 mt-4 text-lg">Rs {product?.price}</p>

        <div className="mt-6">
          <p className="text-gray-700 mt-2">{product?.underText}</p>
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
        <div className="flex gap-4 mt-10 ">
          <AddToCart />

          <BuyNow />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;
