import { ServiceBase } from "./service-base"

export class ProductsService extends ServiceBase {

  static async getProducts() {
    try {
      const response = await fetch(this.getUrl("/products"), {
        cache: "no-store",
      })

      if (!response.ok) {
        console.error("API Error:", response.status)
        return []   // DO NOT THROW
      }

      return await response.json()
    } catch (error) {
      console.error("Fetch failed:", error)
      return []   // DO NOT THROW
    }
  }

  static async getProductById(id: string | number) {
    try {
      const numericId = Number(id)

      if (!numericId || isNaN(numericId)) {
        return null   // DO NOT THROW
      }

      const response = await fetch(
        this.getUrl(`/products/${numericId}`),
        { cache: "no-store" }
      )

      if (!response.ok) {
        return null   // DO NOT THROW
      }

      return await response.json()
    } catch (error) {
      console.error("Fetch failed:", error)
      return null   // DO NOT THROW
    }
  }
}