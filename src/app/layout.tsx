import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { CartProvider } from "./context/CartContext"

export const metadata = {
  title: "Hexa",
  description: "A minimal ecommerce experience built with Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}