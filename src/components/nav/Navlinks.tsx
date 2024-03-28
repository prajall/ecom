import Link from "next/link";
import React from "react";
import Search from "./Search";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navlinks = () => {
  return (
    <>
      <div className=" hidden lg:flex gap-4 mx-auto ">
        <Link href="/">Home</Link>
        <Link href="/" className="flex items-center gap-1">
          Shop {<MdOutlineKeyboardArrowDown />}{" "}
        </Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact us</Link>
      </div>
    </>
  );
};

export default Navlinks;
