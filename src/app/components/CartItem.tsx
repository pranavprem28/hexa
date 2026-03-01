"use client"
import { useCart } from "../context/CartContext"

export default function CartItem({ item }: any) {
  const { removeFromCart } = useCart()

  return (
    <div className="flex items-center justify-between 
                    border border-gray-200 
                    rounded-lg px-6 py-5 mb-4 
                    bg-white shadow-sm hover:shadow-md transition">

      {/* Product Info */}
      <div>
        <p className="text-gray-900 font-semibold text-lg">
          {item.title}
        </p>

        {item.price && (
          <p className="text-sm text-gray-600 mt-1">
            ₹ {item.price}
          </p>
        )}
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-sm font-medium text-red-500 hover:text-red-600 transition"
      >
        Remove
      </button>

    </div>
  )
}