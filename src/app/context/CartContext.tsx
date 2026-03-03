"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

export interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: number) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [mounted, setMounted] = useState(false)

  // Load from localStorage (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart")
      if (stored) setCart(JSON.parse(stored))
    } catch {
      // ignore invalid JSON
    } finally {
      setMounted(true)
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart, mounted])

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => setCart([])

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}