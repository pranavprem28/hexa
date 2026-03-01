"use client"

import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"

interface Product {
  id: number
  title: string
  price: number
  image: string
  category?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-5 border border-gray-100 
                    shadow-sm hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-2">

      <Link href={`/products/${product.id}`} className="block">

        {/* Image */}
        <div className="bg-gray-50 rounded-xl flex items-center justify-center 
                        h-48 overflow-hidden relative">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="object-contain h-40 transition-transform duration-500 
                       group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm font-medium text-gray-800 
                       line-clamp-2 leading-snug 
                       group-hover:text-black transition-colors">
          {product.title}
        </h3>
      </Link>

      {/* Price */}
      <p className="text-lg font-semibold text-gray-900 mt-2">
        ₹ {product.price.toLocaleString()}
      </p>

      {/* Button */}
      <div className="mt-4">
        <AddToCartButton product={product} />
      </div>

    </div>
  )
}