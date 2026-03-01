"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useCart } from "../context/CartContext"
import { Search } from "lucide-react"

export default function Navbar() {
  const { totalItems } = useCart()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          Hexa
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:flex">
          <div className="relative w-full">
            <Search
              size={26}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-300 border border-gray-800 rounded-full py-2 pl-9 pr-4 text-sm 
              text-gray-900 placeholder:text-gray-600 
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-600">

          <Link href="/products" className="hover:text-gray-900 transition">
            Products
          </Link>

          <Link href="/about" className="hover:text-gray-900 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-gray-900 transition">
            Contact
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative hover:text-gray-900 transition"
          >
            Cart

            {/* 👇 Prevent hydration mismatch */}
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  )
}