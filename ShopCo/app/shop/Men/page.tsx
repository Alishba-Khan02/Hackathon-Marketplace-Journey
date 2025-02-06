import Image from "next/image";
import { Button } from "@/components/ui/button";

const Men = () => {
    return (
      <div className="py-8 px-4 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 animate-slideLeft">
  <div className="flex flex-col lg:flex-row lg:space-x-72">
    
    
    <div className="flex lg:flex-col mb-5 mt-3 gap-2 lg:w-1/3 w-full lg:space-x-44 -ml-[34px]">
      <img
        src="/image/image 1.png"
        alt="Product Thumbnail"
        className="w-36 sm:w-40 md:w-48 lg:w-28 h-28 sm:h-28 md:h-28 lg:h-28 ml-7 lg:ml-44 object-cover rounded-lg border cursor-pointer hover:border-black"
      />
      <img
        src="/image/image 5.png"
        alt="Product Thumbnail"
        className="w-36 sm:w-40 md:w-48 lg:w-28 h-28 sm:h-28 md:h-28 lg:h-28 object-cover rounded-lg border cursor-pointer hover:border-black"
      />
      <img
        src="/image/image 6.png"
        alt="Product Thumbnail"
        className="w-32 sm:w-40 md:w-28 lg:w-28 h-28 sm:h-16 md:h-32 mr-28 lg:h-32 object-cover rounded-lg border cursor-pointer hover:border-black"
      />
    </div>
    
   
    <div className="flex flex-col lg:flex-row  lg:space-x-8 ">
      <div className="lg:w-1/2 w-full lg:-ml-40 sm:ml-36 ">
        <img
          src="/image/image 1 (1).png"
          alt="Product Main"
          className="w-full sm:w-[300px] md:w-[250px] lg:w-[330px] mr-72 object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg"
        />
      </div>
      
      
      <div className="lg:w-1/2 w-full flex flex-col justify-center mb-80 lg:mb-60">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        <div className="flex items-center -mb-2">
          <span className="text-yellow-500 text-lg">★★★★☆</span>
          <span className="ml-2 text-sm text-gray-600">4.5/5</span>
        </div>
        <div className="flex items-center -mb-4">
          <span className="text-2xl font-bold text-green-600 mr-2">$260</span>
          <span className="line-through text-gray-500 mr-2">$300</span>
          <span className="text-red-500 text-sm">-40%</span>
        </div>
        <p className="text-gray-700 -mb-1">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

        <div className="mb-4">
          <p className="font-semibold mb-5">Choose Color:</p>
          <div className="flex gap-4">
            <span className="w-6 h-6 bg-green-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-6 h-6 bg-gray-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-6 h-6 bg-blue-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-semibold mb-2">Choose Size:</p>
          <div className="flex gap-4">
            <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">Small</button>
            <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">Medium</button>
            <button className="border rounded-lg px-4 py-1 bg-black text-white">Large</button>
            <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">X-Large</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>
            <span className="px-4">1</span>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
    
    </div>

            <section className="p-56 -mt-96  -ml-12 ">
              <div className="flex justify-center space-x-2 md:space-x-96 gap-8">
        <h2 className="text-sm font-bold  text-center pt-3 ">Product</h2>
        <h3 className="text-sm font-semibold  pt-3">rating-Reweis</h3>
       
        <h3 className="text-sm font-semibold  pt-3"> Faqs</h3>
  

          </div>
       
      </section>
      
  <div className="border-b-2 bg-black mx-6 sm:mx-20 -mt-56"></div>

<div className="flex justify-between gap-16 mt-9">
  <h4 className="text-black font-bold text-lg lg:ml-40 sm:ml-11">
    All Reviews <span className="text-xs text-gray-600 ">(451)</span>
  </h4>

  <div className="flex items-center lg:px-16">
    <div>
      <Image
        src="/image/Frame 19.png"
        alt="Product Thumbnail"
        width={58}
        height={58}
      />
    </div>

    <div className="bg-gray-200 px-6 py-4 lg:rounded-full hidden lg:block">
      <select className="bg-gray-200 ">
        <option>Latest</option>
      </select>
    </div>

    
    <div className="">
      <Button className="bg-black text-white lg:mr-20 sm:mr-10 lg:px-4  py-6 rounded-full hover:bg-gray-800 ">
        Write a Review
      </Button>
    </div>
  </div>
</div>

  <div className="animate-slideRight">
   

<div className="flex flex-wrap gap-6 justify-center pt-5 ">
  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lgborder border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
      I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
    
  </div>
  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
      I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div></div>
</div>
</div>
<div className="flex justify-center pt-6 ">
<Button className="bg-white text-black px-6 py-2 font-medium text-base rounded-[62px] hover:bg-gray-100 w-[230px] h-[52px] ">Load More Reviews</Button>
</div>
<section className="p-6 animate-slideBottom">
  <h2 className="text-3xl md:text-5xl font-bold text-center pt-3 mb-8">You might also like</h2>
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
    
    <div className="flex flex-col items-center w-full md:w-auto">
      <Image
        src="/image/Frame 2.png"
        alt="Travel"
        width={295}
        height={150}
        className="w-full md:w-auto transition-all duration-200 ease-in-out hover:shadow-lg"
      />
      <h3 className="text-sm font-semibold text-center pt-3">Polo with Contrast Trims</h3>
      <div className="stars flex items-center text-yellow-400 text-lg gap-1">
        ★★★★☆ <span className="text-black">(4.0/5)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-black font-bold">$212</span>
        <span className="line-through text-gray-500">$242</span>
        <span className="text-xs text-red-500 bg-red-100 rounded-lg px-2">-20%</span>
      </div>
    </div>

 
    <div className="flex flex-col items-center w-full md:w-auto">
      <Image
        src="/image/Frame 3.png"
        alt="Health"
        width={295}
        height={150}
        className="w-full md:w-auto transition-all duration-200 ease-in-out hover:shadow-lg"
      />
      <h3 className="text-sm font-semibold text-center pt-3">Gradient Graphic T-shirt</h3>
      <div className="stars flex items-center text-yellow-400 text-lg gap-1">
        ★★★★ <span className="text-black">(3.5/5)</span>
      </div>
      <span className="text-black font-bold">$145</span>
    </div>

    <div className="flex flex-col items-center w-full md:w-auto">
      <Image
        src="/image/Frame 1.png"
        alt="Sport"
        width={295}
        height={150}
        className="w-full md:w-auto transition-all duration-200 ease-in-out hover:shadow-lg"
      />
      <h3 className="text-sm font-semibold text-center pt-3">Polo with Tipping Details</h3>
      <div className="stars flex items-center text-yellow-400 text-lg gap-1">
        ★★★★☆ <span className="text-black">(4.5/5)</span>
      </div>
      <span className="text-black font-bold">$180</span>
    </div>

 
    <div className="flex flex-col items-center w-full md:w-auto">
      <Image
        src="/image/Frame 38.png"
        alt="Health and Fitness"
        width={295}
        height={150}
        className="w-full md:w-auto transition-all duration-200 ease-in-out hover:shadow-lg"
      />
      <h3 className="text-sm font-semibold text-center pt-3">Black Striped T-shirt</h3>
      <div className="stars flex items-center text-yellow-400 text-lg gap-1">
        ★★★★☆ <span className="text-black">(5.0/5)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-black font-bold">$120</span>
        <span className="line-through text-gray-500">$150</span>
        <span className="text-xs text-red-500 bg-red-100 rounded-lg px-2">-30%</span>
      </div>
    </div>
  </div>
</section>

<div className="flex justify-center mt-6  animate-pulse">
<Button variant={"outline"} className="rounded-[64px] w-[218px] h-[52px]">View All</Button>
</div>
  </div>
    );
  };
  export  default Men;