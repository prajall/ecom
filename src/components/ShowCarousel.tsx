import React from "react";
import Image from "next/image";
import homepageImage from "../../public/homepageImage.png";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FaArrowRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShowCarousel = () => {
  return (
    <MaxWidthWrapper>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="shadow-lg h-full">
          <CarouselItem className="px-10 bg-gray-100 text-gray-950">
            {/* <MaxWidthWrapper className="flex w-full lg:items-center"> */}
            <div className="flex lg:items-center">
              <div className="left lg:w-1/2 py-[25vh] lg:mt-0 ">
                <h3 className="text-4xl">Classic Exclusive</h3>
                <h2 className="text-5xl font-bold my-4">Women's collection</h2>
                <h3 className="text-4xl">Upto 40% off</h3>
                <Button variant="default" className="mt-6">
                  Shop Now <FaArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="w-1/2 hidden lg:flex justify-center mt-5 ">
                <Image src={homepageImage} height={500} alt="homepageImage" />
              </div>
            </div>
            {/* </MaxWidthWrapper> */}
          </CarouselItem>
          <CarouselItem>
            <MaxWidthWrapper className="flex w-full lg:items-center">
              <div className="left lg:w-1/2 py-[25vh] lg:mt-0 ">
                <h3 className="text-4xl">Classic Exclusive</h3>
                <h2 className="text-5xl font-bold my-4">Women's collection</h2>
                <h3 className="text-4xl">Upto 40% off</h3>
                <Button variant="default" className="mt-6 bg-slate-800 ">
                  Shop Now <FaArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="w-1/2 hidden lg:flex justify-center mt-5 ">
                <Image src={homepageImage} height={500} alt="homepageImage" />
              </div>
            </MaxWidthWrapper>
          </CarouselItem>
          <CarouselItem>
            <MaxWidthWrapper className="flex w-full lg:items-center">
              <div className="left lg:w-1/2 py-[25vh] lg:mt-0 ">
                <h3 className="text-4xl">Classic Exclusive</h3>
                <h2 className="text-5xl font-bold my-4">Women's collection</h2>
                <h3 className="text-4xl">Upto 40% off</h3>
                <Button variant="default" className="mt-6">
                  Shop Now <FaArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="w-1/2 hidden lg:flex justify-center mt-5 ">
                <Image src={homepageImage} height={500} alt="homepageImage" />
              </div>
            </MaxWidthWrapper>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </MaxWidthWrapper>
  );
};

export default ShowCarousel;
