import React from "react";
import products from "@/products";
import ProductCard from "./ProductCard";
import ProductLists from "./ProductLists";

const Mens = () => {
  const mensProducts = products.filter((product) =>
    product.category.includes("mens")
  );

  return (
    <ProductLists title="Men's Collection">
      {mensProducts.map((men) => {
        return <ProductCard Product={men} />;
      })}
    </ProductLists>
  );
};

export default Mens;
