import { ProductsService } from "../services/products-service"
import ProductList from "../components/ProductList"
export const dynamic = "force-dynamic"

export default async function Products() {
  const products = await ProductsService.getProducts()

  if (!products || !Array.isArray(products) || products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No products available right now.
      </div>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <ProductList products={products} />
    </section>
  )
}