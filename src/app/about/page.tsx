import Image from "next/image"
import { Truck, ShieldCheck, Sparkles } from "lucide-react"

export const metadata = {
  title: "About - Hexa",
}

export default function AboutPage() {
  return (
    <section className="w-full">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
          Redefining Everyday Shopping
        </h1>
        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Hexa, we combine thoughtful design, premium quality, and modern
          technology to deliver a seamless ecommerce experience built for the
          next generation of shoppers.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hexa was created with a simple mission — to make online shopping
            effortless, elegant, and enjoyable. We focus on clean design,
            intuitive experiences, and carefully curated products that add
            value to everyday life.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From product discovery to checkout, every detail is crafted to
            deliver performance, speed, and trust.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-80 w-full rounded-2xl overflow-hidden group shadow-md">
          <Image
            src="/images/brnd.webp"
            alt="Hexa Brand Experience"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-16">
            Why Choose Hexa
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <Truck className="mx-auto mb-6 text-gray-900" size={32} />
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Fast & Reliable Delivery
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Efficient logistics and real-time tracking ensure your orders
                arrive on time, every time.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <ShieldCheck className="mx-auto mb-6 text-gray-900" size={32} />
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Secure Payments
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Advanced encryption and secure gateways protect every
                transaction.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <Sparkles className="mx-auto mb-6 text-gray-900" size={32} />
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every product is selected with care to meet high standards of
                design and durability.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          To create a modern ecommerce ecosystem where simplicity meets
          sophistication — empowering customers with quality products,
          seamless experiences, and dependable service.
        </p>
      </div>

    </section>
  )
}