import { ProductsService } from "../services/products-service"
import ProductList from "../components/ProductList"

export const revalidate = 60

export default async function Products() {
  const products = await ProductsService.getProducts()

  return (
    <>
  
      <ProductList products={products} />
    </>
  )
}