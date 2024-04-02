"use client";
import React, { useState } from "react";
import tshirt from "../../../public/products/tshirt2.jpg";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface ProductCard {
  image: string;
  name: string;
  underText: string;
  price: number;
}

interface ProductProp {
  Product: ProductCard;
}

const ProductCard: React.FC<ProductProp> = ({ Product }) => {
  const { image, name, price, underText } = Product;

  const [isFav, setIsFav] = useState(false);

  let shortName = name;
  if (name.length > 45) {
    shortName = name.substring(0, 45) + "...";
  }
  let shortUnderText = underText;
  if (underText.length > 45) {
    shortUnderText = underText.substring(0, 45) + "...";
  }

  return (
    <div className="w-48 p-2 group rounded-md relative bg-white ">
      <Image
        src={require(`../../public/products/${image}`)}
        className="w-44 h-44 mb-2 rounded-md "
        alt="tshirt"
        width={140}
        height={140}
      />
      <div className="h-20">
        <h3 className="font-semibold text-md mt-4 mb-2" title={name}>
          {shortName}
        </h3>
        <p className="text-muted-foreground text-xs mb-4 " title={underText}>
          {underText}
        </p>
      </div>
      <p className="my-3">Rs {price}</p>

      <div className="tools absolute top-4 group-hover:flex hidden right-4">
        {!isFav && (
          <span className="cursor-pointer animate-pulse">
            <FaRegHeart size="16" />
          </span>
        )}
        {isFav && (
          <span className="cursor-pointer ">
            <FaHeart color="#f00" size={16} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
