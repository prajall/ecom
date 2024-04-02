//@ts-ignore
"use client";
import React from "react";
import Loader from "@/components/Loader";
import { useTheme } from "next-themes";

const page = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-full mx-auto flex items-center top-0 -z-20 fixed">
      <Loader />
    </div>
  );
};

export default page;
