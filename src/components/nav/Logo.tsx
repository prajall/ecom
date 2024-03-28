"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import logoDark from "../../../public/logo-dark.svg";
import logoWhite from "../../../public/logo-white.svg";

const Logo = () => {
  const { theme } = useTheme();
  if (theme == "dark") return <Image width={40} src={logoWhite} alt="logo" />;
  else return <Image width={40} src={logoDark} alt="logo" />;
};

export default Logo;
