import ProductCard from "./ProductCard"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface ProductGridProps {
  products?: Product[]
  title?: string
}

export default function ProductGrid({
  products = [],
  title = "Our Products",
}: ProductGridProps) {

  if (!products.length) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            No Products Found
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Please check back later or try a different category.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Optional Section Title */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <div className="w-16 h-1 bg-gray-900 mt-3 rounded-full" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  )
}