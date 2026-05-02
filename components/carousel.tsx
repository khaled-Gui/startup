import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {  Star } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Badge } from "lucide-react";
//import { title } from "process";

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1247,
    seller: "TechGear Pro",
    trustScore: 92,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 856,
    seller: "Fashion Forward",
    trustScore: 85,
    category: "Clothing",
  },
  {
    id: 3,
    name: "Smart Home Security Camera",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 2103,
    seller: "SecureHome Tech",
    trustScore: 96,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Organic Coffee Beans 2lb",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 743,
    seller: "Mountain Roasters",
    trustScore: 89,
    category: "Food",
  },
  {
    id: 5,
    name: "Yoga Mat Premium Quality",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 512,
    seller: "FitLife Essentials",
    trustScore: 83,
    category: "Sports",
  },
  {
    id: 6,
    name: "LED Desk Lamp with USB Charging",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 328,
    seller: "Office Solutions",
    trustScore: 78,
    category: "Home & Garden",
  },
]
function TrustBadge({ score }: { score: number }) {
  const getScoreData = (score: number) => {
    if (score >= 90)
      return {
        color: "bg-emerald-50 border-emerald-200 text-emerald-800",
        icon: "🛡️",
        label: "Excellent",
        barColor: "bg-emerald-500",
      }
    if (score >= 80)
      return {
        color: "bg-blue-50 border-blue-200 text-blue-800",
        icon: "✅",
        label: "Very Good",
        barColor: "bg-blue-500",
      }
    if (score >= 70)
      return {
        color: "bg-amber-50 border-amber-200 text-amber-800",
        icon: "⚠️",
        label: "Good",
        barColor: "bg-amber-500",
      }
    return {
      color: "bg-red-50 border-red-200 text-red-800",
      icon: "❌",
      label: "Poor",
      barColor: "bg-red-500",
    }
  }

  const scoreData = getScoreData(score)

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${scoreData.color}`}>
      <span className="text-sm">{scoreData.icon}</span>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">Trust Score</span>
          <span className="text-sm font-bold">{score}%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${scoreData.barColor} transition-all duration-300`}
              style={{ width: `${score}%` }}
            />
          </div>
          <span className="text-xs opacity-75">{scoreData.label}</span>
        </div>
      </div>
    </div>
  )
}

export default function CarouselDemo() {
  return (
    <div className="flex  items-center justify-center  md:px-10 py-10 ">
      <div>
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div>
            <h1 className="font-medium text-5xl text-bold text-center ">Marcketplace</h1>
            <p className="mt-2 text-pretty text-lg text-muted-foreground leading-snug">
              A Curated Collection of AI-generated Abstract 3D Shapes
            </p>
          </div>
          <Button className="max-sm:hidden" size="sm" variant="outline">
            <Link href="/products">المزيد...</Link>
          </Button>
        </div>
        <Carousel
          className="mt-6 w-full max-w-screen-lg flex flex-col items-center justify-center"
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent>
            {products.map((product, index) => (

              <CarouselItem
                className="basis-1/1 md:basis-1/4 lg:basis-1/4 "
                key={index}
              >
             { /*  <div className="flex flex-col items-start gap-4">
                  <div className="relative mb-5 aspect-4/5 w-full overflow-hidden rounded-xl sm:mb-6">
                    <Image
                      height={300}
                      width={250}
                      className="rounded-lg object-cover"
                      src={image.image}
                      alt={image.title ?? "AI-generated abstract 3D shape"}
                    />
                  </div>
                  <div className="px-1">
                    <span className="font-medium text-[22px] tracking-[-0.015em]">
                      {image.title}
                    </span>
                    <p className="mt-1 max-w-[25ch] text-[17px] text-muted-foreground">
                      {image.description}
                    </p>
                     <Button variant="default" size="sm">
                      <Link href="https://www.fffuel.co/dddepth/">View all</Link>
                    </Button>
                  </div>
                </div>*/}
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                 <CardContent className="p-4">
        <div className="relative mb-3">
      <Image
                      height={300}
                      width={250}
                      className="rounded-lg object-cover"
                      src={product.image}
                      alt={product.name ?? "AI-generated abstract 3D shape"}
                    />
                  </div>
          {product.originalPrice && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </Badge>
          )}

      

        <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        <div className="text-xs text-gray-600 mb-3">
          by <span className="text-blue-600 hover:underline">{product.seller}</span>
        </div>

        <div className="mb-3">
          <TrustBadge score={product.trustScore} />
        </div>

        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Add to Cart</Button>
      </CardContent>
      </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex items-center justify-between sm:justify-end">
            <div className="flex items-center justify-end gap-1.5">
              <CarouselPrevious className="-left-10 max-md:static max-md:translate-y-0" />
              <CarouselNext className="-right-10 max-md:static max-md:translate-y-0" />
            </div>

            <Button className="sm:hidden" size="sm" variant="outline">
              <Link href="https://www.fffuel.co/dddepth/">View all</Link>
            </Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
