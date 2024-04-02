"use client";
import React from "react";
import products from "@/products";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

const NewProduct = () => {
  return (
    <MaxWidthWrapper className="mt-20 pt-20">
      <h2 className="text-lg font-semibold mb-6 ">New Collections</h2>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => {
          return <ProductCard key={index} Product={product} />;
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default NewProduct;
