import Image from "next/image"
import { notFound } from "next/navigation"
import { ProductsService } from "@/app/services/products-service"

interface ProductDetailProps {
  params: Promise<{
    productId: string
  }>
}

export default async function ProductDetail({
  params,
}: ProductDetailProps) {

  // ✅ unwrap params (IMPORTANT in Next 15)
  const { productId } = await params

  const id = Number(productId)

  if (!id || isNaN(id)) {
    notFound()
  }

  try {
    const product = await ProductsService.getProductById(id)

    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Image */}
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8">
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <p className="text-xl font-bold mt-4">
              ₹ {product.price}
            </p>

            <p className="text-gray-600 mt-6">
              {product.description}
            </p>
          </div>

        </div>
      </section>
    )
  } catch {
    notFound()
  }
}