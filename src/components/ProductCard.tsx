"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCard {
  id: string;
  image: string;
  name: string;
  underText: string;
  price: number;
}

interface ProductProp {
  Product: ProductCard;
}

const ProductCard: React.FC<ProductProp> = ({ Product }) => {
  const { image, name, price, underText, id } = Product;

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
    <Link
      href={`/product/${id}`}
      className="w-60 p-4 group rounded-md relative bg-gray-50 dark:bg-zinc-900"
    >
      <div className="overflow-hidden">
        <Image
          src={require(`../../public/products/${image}`)}
          className="w-52 h-52 mb-2 rounded-md mx-auto group-hover:scale-110 duration-300"
          alt="tshirt"
          width={170}
          height={170}
        />
      </div>
      <div className="h-20">
        <h3 className="font-semibold text-md mt-4 mb-2" title={name}>
          {shortName}
        </h3>
        <p className="text-muted-foreground text-xs mb-4 " title={underText}>
          {underText}
        </p>
      </div>
      <p className="my-3">Rs {price}</p>

      <div className="tools absolute top-4 group-hover:fle hidden right-4">
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
      {/* </div> */}
    </Link>
  );
};

export default ProductCard;
