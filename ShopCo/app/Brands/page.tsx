"use client";
import { useState } from "react";
import Filter from "@/components/ui/layout/Filter";
import Image from "next/image";

export default function Brands() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative animate-slideLeft">
      <div className="flex justify-between items-center p-4">

        <button
          className="md:hidden flex items-center justify-center text-2xl"
          onClick={toggleFilter}
        >
           <div> <Image
              src="/image/frame 19.png"
              alt="Travel"
              width={24}
              height={24}
              
            /></div>
        
        </button>
        <div
          className={`md:flex ${isFilterOpen ? "block" : "hidden"} p-4 md:pl-16`}
        >
          <Filter />
        </div>
        
        <div className="w-full">
          <section className="p-6 mb-8 md:mb-48">
            <h2 className="text-3xl md:text-5xl font-bold pt-3 mb-6 text-center md:text-left">
              Casual
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full max-w-sm mx-auto">
                <Image
                  src="/image/Frame 4.png"
                  alt="Travel"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 3.png"
                  alt="Health"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$240</span>
                <span className="line-through text-gray-500 pl-3 pr-1">$260</span>
                <span className="text-xs text-red-500 bg-red-100 rounded-lg">-20%</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 1.png"
                  alt="Sport"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full max-w-sm mx-auto">
                <Image
                  src="/image/Frame 33.png"
                  alt="Travel"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 34.png"
                  alt="Health"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$240</span>
                <span className="line-through text-gray-500 pl-3 pr-1">$260</span>
                <span className="text-xs text-red-500 bg-red-100 rounded-lg">-20%</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 38.png"
                  alt="Sport"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full max-w-sm mx-auto">
                <Image
                  src="/image/Frame 32 (1).png"
                  alt="Travel"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 33 (1).png"
                  alt="Health"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$240</span>
                <span className="line-through text-gray-500 pl-3 pr-1">$260</span>
                <span className="text-xs text-red-500 bg-red-100 rounded-lg">-20%</span>
              </div>
              <div className="w-full max-w-sm mx-auto relative">
                <Image
                  src="/image/Frame 34 (1).png"
                  alt="Sport"
                  width={295}
                  height={150}
                  className="transition-all duration-200 ease-in-out hover:shadow-lg"
                />
                <h3 className="text-sm font-semibold pt-3">T-SHIRT WITH TAPE DETAILS</h3>
                <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-full h-[19px]">
                  ★★★★☆ <span className="text-black"> (4.5/5)</span>
                </div>
                <span className="text-black font-bold">$120</span>
              </div>
            </div>
          </section>
        </div>
      </div>
<div className="flex flex-wrap justify-center items-center gap-2 mt-12 md:mt-56">
  <button
    className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
    disabled
  >
    Previous
  </button>
  <div className="flex gap-1 flex-wrap">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((page, index) => (
      <button
        key={index}
        className={`px-3 py-1 md:px-4 md:py-2 rounded-md ${
          page === 1
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        }`}
      >
        {page}
      </button>
    ))}
  </div>
  <button
    className="px-3 py-1 md:px-4 md:py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
    disabled
  >
    Next
  </button>
</div>
    </div>
  );
}
