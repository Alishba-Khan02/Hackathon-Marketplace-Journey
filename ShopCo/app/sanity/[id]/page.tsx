"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { useCart } from "../../context/CartContext"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "../../../components/ui/layout/Radio"
import { Label } from "@/components/ui/label"
import { Skeleton } from "../../../components/ui/layout/Skeleton "

type Product = {
  name: string
  description: string
  price: number
  discountPercent: number
  priceWithoutDiscount: number
  sizes: string[]
  colors: string[]
  imageUrl: string
  _id: string
}

// interface Props {
//   params: {
//     name: string
//   }
// }

export default function ProductPage({ params }: { params: { id: string } }) {
  const {id} = params
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [SelectedColor, setSelectedColor] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const { dispatch } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == "${id}"] {
          name,
          description,
          price,
          discountPercent,
          priceWithoutDiscount,
          sizes,
          colors,
          "imageUrl": image.asset->url,
          _id,
        }`
        const fetchedProduct: Product[] = await client.fetch(query)
        console.log(fetchedProduct);
        if (fetchedProduct && fetchedProduct.length > 0) {
          setProduct(fetchedProduct[0])
          if (fetchedProduct[0].sizes?.length) {
            setSelectedSize(fetchedProduct[0].sizes[0])
          }
          if (fetchedProduct[0].colors?.length) {
            setSelectedColor(fetchedProduct[0].colors[0])
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setIsLoading(false)
      }
    }


    fetchProduct()
  },    [id]
  )

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product._id,
          title: product.name,
          price: product.price,
          image: product.imageUrl,
        },
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-4 sm:p-6">
        <div className="container mx-auto">
          <div className="w-full rounded-lg p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <Skeleton className="aspect-square w-full rounded-lg" />
            </div>
            <div className="md:w-1/2 space-y-4">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-10 w-full max-w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <p className="text-lg text-muted-foreground">Product not found</p>
      </div>
    )
  }

  const discountedPrice = product.price
  const originalPrice = product.priceWithoutDiscount
  const discountPercent = product.discountPercent

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="container mx-auto">
        <div className="w-full rounded-lg p-6 flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative aspect-square">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="mt-2 text-muted-foreground">{product.description}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                {originalPrice > discountedPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-medium text-green-600">{discountPercent}% OFF</span>
                  </>
                )}
              </div>
            </div>

            {product.sizes?.length > 0 && (
              <div className="space-y-4">
                <Label>Size</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Label
                      key={size}
                      className="border cursor-pointer rounded-md p-2 px-4 flex items-center gap-2 [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                    >
                      <RadioGroupItem value={size} className="sr-only" />
                      {size}
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}
{product.sizes?.length > 0 && (
              <div className="space-y-4">
                <Label>Colors</Label>
                <RadioGroup value={SelectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Label
                      key={color}
                      className="border cursor-pointer rounded-md p-2 px-4 flex items-center gap-2 [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                    >
                      <RadioGroupItem value={color} className="sr-only" />
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

