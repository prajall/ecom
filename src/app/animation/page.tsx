import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Animation = () => {
  return (
    <MaxWidthWrapper className="flex gap-2 mt-40 ">
      <div className="mb-2 ">
        <BuyNow />
      </div>
      <AddToCart />
    </MaxWidthWrapper>
  );
};

export default Animation;
