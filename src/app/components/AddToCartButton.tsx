"use client"

import { useCart } from "../context/CartContext"

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        })
      }
      className="w-full bg-gray-900 text-white py-2 rounded-lg 
                 hover:bg-gray-700 transition"
    >
      Add to Cart
    </button>
  )
}