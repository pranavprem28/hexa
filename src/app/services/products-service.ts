import { ServiceBase } from "./service-base"

export class ProductsService extends ServiceBase {

  static async getProducts() {
    const response = await fetch(this.getUrl("/products"), {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return await response.json()
  }

  static async getProductById(id: string | number) {
    const numericId = Number(id)

    if (!numericId || isNaN(numericId)) {
      throw new Error("Invalid product ID")
    }

    const response = await fetch(
      this.getUrl(`/products/${numericId}`),
      {
        next: { revalidate: 120 },
      }
    )

    if (!response.ok) {
      throw new Error(`Product with ID ${numericId} not found`)
    }

    return await response.json()   // ✅ FIXED
  }
}