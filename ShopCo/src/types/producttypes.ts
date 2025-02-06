export type Discount = {
    amount: number;
    percentage: number;
  };
  
  export type Product = {
    _id: number;
    name: string;
    srcUrl: string;
    gallery?: string[];
    price: number;
    discount: Discount;
    rating: number;
    description: string;
  };