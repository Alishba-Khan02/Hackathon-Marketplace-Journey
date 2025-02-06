import { Button } from "@/components/ui/button";
import Image from "next/image";
import Caurosel from '@/components/ui/layout/caurosel'
export default function Home() {
  return (
    <div className="bg-white pt-5 w-full min-h-screen relative">
  <div className="relative bg-[#F2F0F1] flex flex-col lg:flex-col items-center text-center w-full px-4 lg:px-0">

  <div className="flex flex-col items-center lg:absolute lg:top-0 lg:left-[550px] lg:-translate-x-1/2 lg:translate-y-1/2 z-10">
    <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 sm:-mt-12">
      FIND CLOTHES THAT MATCH YOUR STYLE
    </h1>
    <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of
      style.
    </p>
    <Button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-full w-36 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
      Shop Now
    </Button>
    <div className="flex mt-6 gap-4 justify-between items-center">
      <div>
        <h3 className="text-black text-xl font-bold">200+</h3>
        <p className="text-black text-sm">International Brands</p>
      </div>
      <div>
        <h3 className="text-black text-xl font-bold">2,000+</h3>
        <p className="text-black text-sm">High-Quality Products</p>
      </div>
      <div>
        <h3 className="text-black text-xl font-bold">30,000+</h3>
        <p className="text-black text-sm">Happy Customers</p>
      </div>
    </div>
  </div>


  <div className=" sm:h-[400px] md:h-[500px] lg:h-[600px]">
    <Image
      src="/image/Rectangle 2.png"
      alt="profile"
      layout="responsive"
      width={1640}
      height={900}
      className="object-cover flex justify-center"
    />
  </div>
</div>


<div className="bg-black py-8 h-auto flex flex-wrap justify-center gap-8 animate-slideTop">
  {["Group (1)", "zara-logo-1 1", "gucci-logo-1 1", "prada-logo-1 1", "Group"].map(
    (logo, index) => (
      <div
        key={index}
        className="flex justify-center w-[80px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[250px]"
      >
        <Image
          src={`/image/${logo}.png`}
          alt={logo}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    )
  )}
</div>

      <section className="p-6 animate-slideLeft">
        <h2 className="text-4xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "Frame 32", price: "$120", rating: "4.5/5" },
            { img: "Frame 33", price: "$240", discount: "-20%", oldPrice: "$260", rating: "4.5/5" },
            { img: "Frame 34", price: "$120", rating: "4.5/5" },
            { img: "Frame 38", price: "$130", discount: "-20%", oldPrice: "$160", rating: "4.5/5" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/image/${item.img}.png`}
                alt={item.img}
                width={295}
                height={150}
                className="rounded shadow-md"
              />
              <h3 className="text-sm font-semibold mt-3 text-center">
                T-SHIRT WITH TAPE DETAILS
              </h3>
              <div className="stars flex items-center text-yellow-400 text-lg gap-1">
                ★★★★☆ <span className="text-black">({item.rating})</span>
              </div>
              <div className="text-black font-bold mt-2">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="line-through text-gray-500 pl-2">
                      {item.oldPrice}
                    </span>
                    <span className="text-xs text-red-500 bg-red-100 rounded-lg px-1 ml-2">
                      {item.discount}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"outline"} className="rounded-full px-6 py-2">
            View All
          </Button>
        </div>
      </section>
      <section className="p-6 animate-slideRight">
        <h2 className="text-4xl font-bold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "Frame 32 (1)", price: "$212", discount: "-20%", oldPrice: "$232", rating: "4.5/5" },
            { img: "Frame 33 (1)", price: "$145", rating: "4.5/5" },                                    
            { img: "Frame 34 (1)", price: "$80", rating: "4.5/5" },                                      
            { img: "Frame 38 (1)", price: "$210", rating: "4.5/5" },                                            
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/image/${item.img}.png`}
                alt={item.img}
                width={295}
                height={150}
                className="rounded shadow-md"
              />
              <h3 className="text-sm font-semibold mt-3 text-center">
                {item.img.includes("1") ? "VERTICAL STRIPED SHIRT" : "T-SHIRT WITH TAPE DETAILS"}
              </h3>
              <div className="stars flex items-center text-yellow-400 text-lg gap-1">
                ★★★★☆ <span className="text-black">({item.rating})</span>
              </div>
              <div className="text-black font-bold mt-2">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="line-through text-gray-500 pl-2">
                      {item.oldPrice}
                    </span>
                    <span className="text-xs text-red-500 bg-red-100 rounded-lg px-1 ml-2">
                      {item.discount}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"outline"} className="rounded-full px-6 py-2">
            View All
          </Button>
        </div>
      </section>
        <div className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8 rounded-[40px] mx-auto max-w-7xl">
  <h2 className="text-center text-5xl md:text-3xl font-bold mb-8">
    Browse by Dress Style
  </h2>
  <div className="flex flex-wrap gap-4 justify-center md:gap-6">
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 11.png"
        alt="Casual"
        width={407}
        height={289}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Casual</span>
      </div>
    </div>
    <div className="relative rounded-lg overflow-hidden w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 13.png"
        alt="Formal"
        width={507}
        height={289}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Formal</span>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap gap-4 justify-center md:gap-6 mt-6">
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 12.png"
        alt="Party"
        width={407}
        height={289}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Party</span>
      </div>
    </div>
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 14.png"
        alt="Gym"
        width={407}
        height={289}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Gym</span>
      </div>
    </div>
  </div>

</div>
<Caurosel/>
      </div>
  );
}
