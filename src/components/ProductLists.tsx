import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { link } from "fs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";

const ProductLists = ({
  title,
  link,
  children,
}: {
  children: React.ReactNode;
  title: string;
  link: string;
}) => {
  console.log(title);
  return (
    <MaxWidthWrapper className=" py-20">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-6 ">{title}</h2>
        <Link href={`/category/${link}`}>
          <Button variant="link">
            See all collection <MdOutlineKeyboardArrowRight />{" "}
          </Button>
        </Link>
      </div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {children}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductLists;