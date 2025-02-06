"use client";
import { useState } from "react";

const Testimonials = () => {
  const reviews = [
    {
      stars: 5,
      name: "Sarah M.",
      verified: true,
      review:
        "I&apos;m blown away by the quality and style of the clothes I received from ShopCo. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.",
    },
    {
      stars: 5,
      name: "Alex K.",
      verified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable.",
    },
    {
      stars: 5,
      name: "James L.",
      verified: true,
      review:
        "As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      stars: 4,
      name: "Emily T.",
      verified: true,
      review:
        "ShopCo offers a wonderful collection! The delivery was quick, but I wish there were more color options for some designs.",
    },
    {
      stars: 5,
      name: "Michael B.",
      verified: true,
      review:
        "Amazing quality! I bought a few items for my vacation, and they were perfect for the occasion. Highly recommend ShopCo.",
    },
    {
      stars: 4,
      name: "Linda H.",
      verified: true,
      review:
        "I love the designs and fits! Customer service was helpful when I needed to exchange an item. Overall, a great experience.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" py-8 px-4 relative">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Happy Customers
      </h2>
      <div className="relative overflow-hidden">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
          onClick={handlePrev}
        >
          ←
        </button>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] bg-white p-6 rounded-lg shadow-md border"
            >
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg mr-1">
                  {"★".repeat(review.stars)}
                </span>
                <span className="text-green-500 text-sm ml-2">
                  {review.verified && "✔"}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-4">{review.review}</p>
              <div className="font-bold text-orange-500 text-sm">
                {review.name}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
