import Image from "next/image";
import homepageImage from "../../public/homepageImage.png";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FaArrowRight } from "react-icons/fa";
import ShowCarousel from "@/components/ShowCarousel";
import SearchComponent from "@/components/nav/Search";
import axios from "axios";

export default async function Home() {
  try {
    const data = await axios.post("http://localhost:3000/api/getproduct/", {
      data: "this is data",
    });
    // console.log(data);
    console.log("data fetched", data.data);
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <main className="">
        <ShowCarousel />
      </main>
    </>
  );
}
