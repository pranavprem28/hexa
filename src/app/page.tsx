import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="w-full">

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"   // add this image in public/images
          alt="Hexa Collection"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Elevate Your Everyday
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            Discover premium essentials crafted for performance,
            simplicity, and modern living.
          </p>

          <div className="mt-10 flex gap-6">
            <Link
              href="/products"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

   
 

{/* Season Collection Section */}
<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900">
        New Season Collection
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Discover curated essentials designed to redefine comfort,
        sophistication, and modern living.
      </p>
    </div>

    {/* Featured Banner */}
    <div className="relative h-[400px] rounded-3xl overflow-hidden mb-16 group">
      <Image
        src="/images/fashion.jpg"
        alt="Season Collection Banner"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
        <h3 className="text-4xl font-bold mb-4">
          The Future of Style
        </h3>
        <Link
          href="/products"
          className="bg-white text-black px-6 py-3 w-fit rounded-full font-medium hover:bg-gray-200 transition"
        >
          Explore Collection
        </Link>
      </div>
    </div>

    {/* Collection Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <Link href="/products" className="group">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <Image
            src="/images/minimal essential.jpg"
            alt="Minimal Essentials"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4 className="text-xl font-semibold">Minimal Essentials</h4>
          </div>
        </div>
      </Link>

      {/* Card 2 */}
      <Link href="/products" className="group">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <Image
            src="/images/urban.jpg"
            alt="Urban Collection"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4 className="text-xl font-semibold">Urban Collection</h4>
          </div>
        </div>
      </Link>

      {/* Card 3 */}
      <Link href="/products" className="group">
        <div className="relative h-80 rounded-2xl overflow-hidden">
          <Image
            src="/images/premium.png"
            alt="Premium Comfort"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4 className="text-xl font-semibold">Premium Comfort</h4>
          </div>
        </div>
      </Link>

    </div>

  </div>
</section>

    </main>
  )
}