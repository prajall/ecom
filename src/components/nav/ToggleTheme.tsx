"use client";
import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  if (theme == "light") {
    return (
      <button
        onClick={() => {
          setTheme("dark");
        }}
        title="Switch to dark mode"
      >
        <IoMoonOutline size={"25"} />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          setTheme("light");
        }}
        title="Switch to light mode"
      >
        <IoMdSunny size={"25"} />
      </button>
    );
  }
};

export default ToggleTheme;
