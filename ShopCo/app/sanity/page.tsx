// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// type Product = {
//   _id:string
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating: number;
//   tags: string[];
//   sizes: string[];
//   imageUrl: string;
// };

// export default async function Home() {
//   const query = `*[_type == "product"]{
//   _id,
//     name,
//     description,
//     price,
//     discountPercentage,
//     priceWithoutDiscount,
//     rating,
//     tags,
//     sizes,
//     "imageUrl": image.asset->url
//   }`;

//   const products: Product[] = await client.fetch(query);
//   console.log("Products Data:", products);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-8">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="product-card w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
//           >
//             {product.imageUrl && (
//               <div className="relative">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   width={500}
//                   height={500}
//                   className="object-cover w-full h-64"
//                 />
//               </div>
//             )}
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
//                 {product.name}
//               </h2>
//               <p className="text-gray-600 mt-2">{product.description.substring(0, 100)}...</p>
              
//               <div className="flex items-center justify-between mt-4">
//                 <p className="text-xl font-bold text-blue-600">
//                   ${product.price}
//                 </p>
//                 {product.discountPercentage > 0 && (
//                   <p className="text-sm line-through text-gray-500">
//                     ${product.priceWithoutDiscount}
//                   </p>
//                 )}
//               </div>
              
//               <div className="flex items-center mt-2">
//                 <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating))}</span>
//                 <p className="text-sm text-gray-500 ml-2">{product.rating} / 5</p>
//               </div>

//               <div className="tags flex flex-wrap gap-2 mt-4">
//                 {product.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//                 Add to Cart
//               </button> */}
//                                 <Link href={`/sanity/${product._id}`}>
//                     <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//                       VIEW DETAILS
//                     </button>
//                   </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
};

export default async function Home() {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    tags,
    sizes,
    "imageUrl": image.asset->url
  }`;

  let products: Product[] = [];
  let error = false;

  try {
    products = await client.fetch(query);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    error = true;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Products</h1>

      {error ? (
        <p className="text-center text-red-500 text-lg">Failed to load products. Please try again later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products?.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="product-card w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {product.imageUrl ? (
                  <div className="relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.name || "Product Image"}
                      width={500}
                      height={500}
                      className="object-cover w-full h-64"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {product.description ? `${product.description.substring(0, 100)}...` : "No description available"}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-bold text-blue-600">${product.price}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm line-through text-gray-500">${product.priceWithoutDiscount}</p>
                    )}
                  </div>
                  <div className="tags flex flex-wrap gap-2 mt-4">
                    {product.tags?.length > 0 ? (
                      product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs">No tags available</span>
                    )}
                  </div>
                  <div className="sizes flex flex-wrap gap-2 mt-4">
                    <p className="text-sm font-semibold text-gray-600">Sizes:</p>
                    {product.sizes?.length > 0 ? (
                      product.sizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                        >
                          {size}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 text-xs py-1">Not available</span>
                    )}
                  </div>
                  <Link href={`/sanity/${product._id}`}>
                    <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}









// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   rating?: number; // Optional since it wasn't in the second version
//   tags: string[];
//   sizes: string[];
//   imageUrl: string;
// };

// export default async function Home() {
//   const query = `*[_type == "products"]{
//     _id,
//     name,
//     description,
//     price,
//     discountPercentage,
//     priceWithoutDiscount,
//     rating,
//     tags,
//     sizes,
//     "imageUrl": image.asset->url
//   }`;

//   let products: Product[] = [];
//   let error = false;

//   try {
//     products = await client.fetch(query);
//   } catch (err) {
//     console.error("Failed to fetch products:", err);
//     error = true;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-8">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Products</h1>

//       {error ? (
//         <p className="text-center text-red-500 text-lg">Failed to load products. Please try again later.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div
//                 key={product._id}
//                 className="product-card w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
//               >
//                 {product.imageUrl ? (
//                   <div className="relative">
//                     <Image
//                       src={product.imageUrl}
//                       alt={product.name || "Product Image"}
//                       width={500}
//                       height={500}
//                       className="object-cover w-full h-64"
//                       loading="lazy"
//                     />
//                   </div>
//                 ) : (
//                   <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
//                     <p className="text-gray-500">No Image Available</p>
//                   </div>
//                 )}
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
//                     {product.name}
//                   </h2>
//                   <p className="text-gray-600 mt-2">
//                     {product.description
//                       ? `${product.description.substring(0, 100)}...`
//                       : "No description available"}
//                   </p>
//                   <div className="flex items-center justify-between mt-4">
//                     <p className="text-xl font-bold text-blue-600">${product.price}</p>
//                     {product.discountPercentage > 0 && (
//                       <p className="text-sm line-through text-gray-500">${product.priceWithoutDiscount}</p>
//                     )}
//                   </div>
//                   {product.rating && (
//                     <div className="flex items-center mt-2">
//                       <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating))}</span>
//                       <p className="text-sm text-gray-500 ml-2">{product.rating} / 5</p>
//                     </div>
//                   )}
//                   <div className="tags flex flex-wrap gap-2 mt-4">
//                     {product.tags?.length > 0 ? (
//                       product.tags.map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
//                         >
//                           {tag}
//                         </span>
//                       ))
//                     ) : (
//                       <span className="text-gray-400 text-xs">No tags available</span>
//                     )}
//                   </div>
//                   <div className="sizes flex flex-wrap gap-2 mt-4">
//                     <p className="text-sm font-semibold text-gray-600">Sizes:</p>
//                     {product.sizes?.length > 0 ? (
//                       product.sizes.map((size, idx) => (
//                         <span
//                           key={idx}
//                           className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
//                         >
//                           {size}
//                         </span>
//                       ))
//                     ) : (
//                       <span className="text-gray-400 text-xs">Not available</span>
//                     )}
//                   </div>
//                   <Link href={`/sanity/${product._id}`}>
//                     <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//                       VIEW DETAILS
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No products found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
