import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
export default function Footer() {
  return (
    <footer className="relative mt-10 bg-white text-black px-6 sm:px-10 md:px-20 lg:px-44 py-10">
      <div className="bg-black text-center rounded-lg p-6 sm:p-8 lg:p-10 mb-10">
        <h1 className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold">SHOP.CO</h1>
          <p className="mt-4 text-gray-600">
            We have clothes that suit your style and which you&apos;re proud to wear.
            From women to men.
          </p>
          <div className="flex gap-3 mt-6">
            <Link href="#" target="_blank">
            <AiFillTwitterCircle />
            </Link>
            <Link href="#" target="_blank">
             
              <FaFacebook />
            </Link>
            <Link href="#" target="_blank">
              
              <FaInstagramSquare />
            </Link>
            <Link href="#" target="_blank">
             
              <IoLogoGithub />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Help</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">FAQ</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Order</li>
            <li>Payment</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Resources</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Free Books</li>
            <li>Development Tutorials</li>
            <li>How-to Blogs</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300"></div>
      <div className="mt-6 text-sm text-gray-500">
        &copy; 2024 Seerat Fatima. All rights reserved.
      </div>
      <div className="flex justify-end -mt-5 ">
      <Image 
src="/image/Badge.png"
alt="proflie"
width={55}
height={30}
/>
<Image 
src="/image/Badge (1).png"
alt="proflie"
width={55}
height={30}
/>
<Image 
src="/image/Badge (2).png"
alt="proflie"
width={55}
height={30}
/>
<Image 
src="/image/Badge (3).png"
alt="proflie"
width={55}
height={30}
/>
<Image 
src="/image/Badge (4).png"
alt="proflie"
width={60}
height={30}
/>
      </div>
    </footer>
  );
}
