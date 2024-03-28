"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    redirect("/");
  }

  const googleLogin = async () => {
    signIn("google", { redirect: false });
  };

  return (
    <MaxWidthWrapper className="w-full flex items-center justify-center mt-[35vh]">
      
      <Button variant="outline" onClick={googleLogin} className="px-20 py-6">
        <FcGoogle size={25} className="mx-2" />
        Continue with google
      </Button>
      <form action="handleLogin">
        
      </form>
    </MaxWidthWrapper>
  );
};

export default Login;
