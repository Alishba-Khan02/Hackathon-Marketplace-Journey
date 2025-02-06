import React from "react";
import CategoriesSection from "@/components/shoppage/filters/CategoriesSection";
import ColorsSection from "@/components/shoppage/filters/ColorSection";
import DressStyleSection from "@/components/shoppage/filters/DressStyleSec";
import PriceSection from "@/components/shoppage/filters/PriceSection";
import SizeSection from "@/components/shoppage/filters/SizeSec";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;