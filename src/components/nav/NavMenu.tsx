"use client";
import Profile from "./Profile";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import SearchComponent from "./Search";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./Cart";
import ToggleTheme from "./ToggleTheme";

const NavMenu = () => {
  const { data: session } = useSession();

  const sessionData = {
    name: session?.user?.name || "",
    image: session?.user?.image || "",
    email: session?.user?.email || "",
  };

  return (
    <div className="flex items-center gap-4">
      <SearchComponent />
      <ToggleTheme />
      {!session?.user && (
        <div className="flex">
          <Link href={"/login"}>
            <Button variant="default" className="rounded-full">
              Login
            </Button>
          </Link>
        </div>
      )}
      {session?.user && (
        <div className="flex gap-4">
          <Cart />
          <Profile user={sessionData} />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
