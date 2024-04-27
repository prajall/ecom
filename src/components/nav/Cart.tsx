import React from "react";
import { IoCartOutline } from "react-icons/io5";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Cart = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <IoCartOutline size={30} />
        </SheetTrigger>
        <SheetContent>Cart Items</SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
