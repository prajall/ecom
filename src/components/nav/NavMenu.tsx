"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import Cart from "./Cart";
import Profile from "./Profile";
import SearchComponent from "./Search";

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
