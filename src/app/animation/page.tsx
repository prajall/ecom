import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import React from "react";

const Animation = () => {
  return (
    <div className="flex">
      <div className="mb-2 ">
        <AddToCart />
      </div>
      <BuyNow />
    </div>
  );
};

export default Animation;
