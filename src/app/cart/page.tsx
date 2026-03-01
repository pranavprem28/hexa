"use client"

import Image from "next/image"
import { useCart } from "../context/CartContext"

export default function CartPage() {
  const {
    cart,
    totalPrice,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart()

  if (!cart.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-black">
      <h1 className="text-2xl font-semibold mb-8">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-6 gap-6"
        >
          {/* Left Section: Image + Info */}
          <div className="flex items-center gap-5">
            
     {/* Product Image */}
<div className="w-28 h-28 bg-gray-50 rounded-xl 
                flex items-center justify-center 
                overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    width={120}
    height={520}
    className="object-contain h-50"
  />
</div>
            {/* Product Info */}
            <div>
              <p className="font-medium text-gray-900">
                {item.title}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ₹ {item.price} × {item.quantity}
              </p>
            </div>
          </div>

          {/* Right Section: Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className="mt-10 text-right">
        <p className="text-xl font-bold">
          Total: ₹ {totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  )
}