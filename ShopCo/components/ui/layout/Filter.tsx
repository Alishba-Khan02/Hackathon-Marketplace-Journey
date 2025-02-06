"use client";
import Image from "next/image";
import { useState } from "react";

export default function Filter() {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState(""); 

  const colors = ["green", "red", "yellow", "blue", "black", "pink"];

  return (
    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md">
      <div className="flex gap-16">
           <h2 className="text-2xl font-bold mb-6">Filters</h2> 
          <div> <Image
              src="/image/frame 19.png"
              alt="Travel"
              width={24}
              height={24}
            /></div></div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <ul className="space-y-2">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Price</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={priceRange[0]}
            min="0"
            max="500"
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-16 p-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            value={priceRange[1]}
            min="0"
            max="500"
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-16 p-1 border rounded"
          />
        </div>
      </div>
<div className="mb-6">
  <h3 className="text-lg font-medium mb-2">Colors</h3>
  <div className="grid grid-cols-5 gap-2">
    {colors.map((color) => (
      <button
        key={color}
        className={`w-8 h-8 rounded-full border-2 ${
          selectedColor === color ? "border-black" : "border-gray-200"
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    ))}
  </div>
  {selectedColor && (
    <p className="mt-4 text-sm">Selected Color: {selectedColor}</p>
  )}
</div>



      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Dress Style</h3>
        <ul className="space-y-2">
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <li key={style}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-sm">{style}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
        Apply Filter
      </button>
    </div>
  );
}
