export class ProductsService {

  static async getProducts() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" })

      if (!res.ok) return []

      return await res.json()
    } catch (error) {
      console.error("Fetch failed:", error)
      return []
    }
  }

  static async getProductById(id: string | number) {
    try {
      const numericId = Number(id)
      if (!numericId || isNaN(numericId)) return null

      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      const res = await fetch(`${baseUrl}/api/products/${numericId}`, { cache: "no-store" })

      if (!res.ok) return null
      return await res.json()
    } catch (error) {
      console.error("Fetch failed:", error)
      return null
    }
  }
}