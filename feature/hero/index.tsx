import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative   text-white bg-[url('https://res.cloudinary.com/dk5mfu099/image/upload/v1756204776/photo-1542838132-92c53300491e_ujzzfa.jpg')] bg-center bg-cover bg-no-repeat min-h-[650px]  overflow-hidden">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="max-w-3xl mt-10">
          <h1 className="text-4xl md:text-6xl  mb-6  poppins  leading-tight">
            Fresh Groceries
            <span className="text-yellow-300 ml-2">Delivered</span>
          </h1>
          <p className="text-xl md:text-[22px] mb-8 text-green-100">
            Discover farm-fresh fruits, quality produce, and everyday essentials
            at unbeatable prices. Shop with ease and enjoy freshness delivered
            straight to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl h-full">
              Shop Now
            </Button>
            <Button className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 h-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
