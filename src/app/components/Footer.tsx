"use client"

import Link from "next/link"
import { ArrowUp, Instagram, Twitter, Facebook, Mail } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-24 relative">

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-16">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Hexa
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
            A premium ecommerce experience crafted with performance,
            elegance, and modern design principles.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm">
            {["Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-6">
            Newsletter
          </h4>
          <p className="text-sm text-neutral-400 mb-4">
            Subscribe to get special offers, free giveaways, and updates.
          </p>

          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-neutral-800 border border-neutral-700 text-sm focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-r-lg text-sm font-medium hover:bg-neutral-200 transition"
            >
              <Mail size={16} />
            </button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-6">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-neutral-400">
            <p>support@hexa.com</p>
            <p>+91 98765 43210</p>
            <p>Bangalore, India</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">

          <p>© {new Date().getFullYear()} Hexa. All rights reserved.</p>

          {/* Payment Methods */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="bg-neutral-800 px-3 py-1 rounded text-[10px]">VISA</span>
            <span className="bg-neutral-800 px-3 py-1 rounded text-[10px]">Mastercard</span>
            <span className="bg-neutral-800 px-3 py-1 rounded text-[10px]">UPI</span>
          </div>
        </div>
      </div>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  )
}