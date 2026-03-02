export class ProductsService {
  private static API = "https://fakestoreapi.com"

  static async getProducts() {
    try {
      const res = await fetch(`${this.API}/products`, { cache: "no-store" })
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

      const res = await fetch(`${this.API}/products/${numericId}`, { cache: "no-store" })
      if (!res.ok) return null
      return await res.json()
    } catch (error) {
      console.error("Fetch failed:", error)
      return null
    }
  }
}