"use client";
import React, { useRef } from "react";
import { Player } from "@lordicon/react";
import { useState, useEffect } from "react";
import bag from "@/animatedIcons/bag.json";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useTheme } from "next-themes";

const BuyNow = () => {
  const playerRef = useRef<Player>(null);
  const [hoverCart, setHoverCart] = useState(false);
  const [iconColor, setIconColor] = useState("#f3f2f3");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme == "dark") {
      setIconColor("#000000");
    } else if (theme == "light") {
      setIconColor("#f3f2f3");
    }
    if (hoverCart) {
      playerRef.current?.playFromBeginning();
    }
  }, [hoverCart]);

  return (
    <MaxWidthWrapper>
      <Button
        className="flex gap-1 w-40"
        onMouseEnter={() => setHoverCart(true)}
        onMouseLeave={() => setHoverCart(false)}
      >
        Buy Now
        <Player icon={bag} ref={playerRef} colorize={iconColor} />
      </Button>
    </MaxWidthWrapper>
  );
};

export default BuyNow;
