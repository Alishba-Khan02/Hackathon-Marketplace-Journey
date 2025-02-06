// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// type CartItem = {
//   id: number;
//   name: string;
//   size: string;
//   color: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     { id: 1, name: "Gradient Graphic T-shirt", image: "/image/Frame 4.png", size: "Large", color: "White", price: 145, quantity: 1 },
//     { id: 2, name: "Checkered Shirt", image: "/image/Frame 34.png", size: "Medium", color: "Red", price: 180, quantity: 1 },
//     { id: 3, name: "Skinny Fit Jeans", image: "/image/Frame 33.png", size: "Large", color: "Blue", price: 240, quantity: 1 },
//   ]);

//   const discountPercentage: number = 20;
//   const deliveryFee: number = 15;

//   const updateQuantity = (id: number, action: "increase" | "decrease") => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//         };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   const deleteItem = (id: number) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//   };

//   const subtotal: number = cartItems.reduce(
//     (acc: number, item: CartItem) => acc + item.price * item.quantity,
//     0
//   );
//   const discount: number = (subtotal * discountPercentage) / 100;
//   const total: number = subtotal - discount + deliveryFee;

//   return (
//     <div className="p-4 lg:p-8 animate-slideBottom">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 relative">
//                 <button
//                   className="absolute top-2 right-2 text-red-500 text-lg -mt-6"
//                   onClick={() => deleteItem(item.id)}
//                 >
//                   <Image
//                     src="/image/delete.png"
//                     alt="delete"
//                     width={20}
//                     height={15}
//                   />
//                 </button>
//                 <div className="flex items-center gap-4 w-full">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-md object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Size: {item.size}, Color: {item.color}
//                     </p>
//                     <p className="text-lg font-bold">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-2 mt-2 lg:mt-8">
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "decrease")}
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "increase")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${subtotal}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount ({discountPercentage}%)</span>
//               <span className="text-red-500">-${discount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span>${deliveryFee}</span>
//             </div>
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>${total}</span>
//             </div>
//           </div>
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Add promo code"
//               className="w-full px-4 py-2 border rounded-md mb-4"
//             />
//             <button className="w-full bg-black text-white py-2 rounded-md">
//               Go to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;







"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, X } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Cart() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id })
      return
    }
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <img src="/image/Frame.png" alt="cart" width={24} className="-mt-2"/>
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {state.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart ({state.items.length} items)</SheetTitle>
        </SheetHeader>
        {state.items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Add items to your cart to checkout</p>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-4">
            <div className="flex-1 overflow-auto py-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b">
                  <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="font-medium leading-none">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
