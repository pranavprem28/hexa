"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useCart } from "@/app/context/CartContext"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const { totalItems } = useCart()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
          onClick={closeMobile}
        >
          Hexa
        </Link>

        {/* Desktop Search */}
        <div className="flex-1 max-w-md hidden md:flex">
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm
              text-gray-900 placeholder:text-gray-600
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/products" className="hover:text-black transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative hover:text-black transition">
            Cart
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/cart" className="relative text-sm font-medium text-gray-900">
            Cart
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-900 hover:bg-gray-100 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm
                text-gray-900 placeholder:text-gray-600
                focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            <Link
              href="/products"
              onClick={closeMobile}
              className="block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 transition"
            >
              Products
            </Link>

            <Link
              href="/about"
              onClick={closeMobile}
              className="block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMobile}
              className="block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-100 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}