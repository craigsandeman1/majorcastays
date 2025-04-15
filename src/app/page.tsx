import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[500px] flex items-center justify-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mallorca-hero.jpg"
            alt="Mallorca coastline at sunset"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Stay in Majorca
          </h1>
          <p className="text-xl text-white mb-8">
            Discover accommodation across the magical Majorca island, from beach resorts to
            peaceful mountain villas
          </p>

          {/* Search Form */}
          <form className="max-w-md mx-auto flex">
            <select className="flex-grow p-3 rounded-l-md border-0" defaultValue="">
              <option value="">
                Select Location
              </option>
              <option value="palma">Palma</option>
              <option value="alcudia">Alcudia</option>
              <option value="pollenca">Pollença</option>
              <option value="soller">Sóller</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations in Majorca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Palma */}
            <Link
              href="/palma"
              className="block relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/palma.jpg"
                alt="Palma"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Palma</h3>
                <p>
                  Majorca's vibrant capital city, home to the stunning cathedral
                  and charming old town.
                </p>
                <span className="mt-4 inline-block text-blue-100 font-semibold">
                  View Destination →
                </span>
              </div>
            </Link>

            {/* Alcudia */}
            <Link
              href="/alcudia"
              className="block relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/alcudia.jpg"
                alt="Alcudia"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Alcudia</h3>
                <p>
                  A picturesque coastal town with beautiful beaches and a
                  well-preserved medieval center.
                </p>
                <span className="mt-4 inline-block text-blue-100 font-semibold">
                  View Destination →
                </span>
              </div>
            </Link>

            {/* Pollença */}
            <Link
              href="/pollenca"
              className="block relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/pollenca.jpg"
                alt="Pollença"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Pollença</h3>
                <p>
                  A charming town with colorful houses, sun-drenched beaches and
                  a peaceful atmosphere.
                </p>
                <span className="mt-4 inline-block text-blue-100 font-semibold">
                  View Destination →
                </span>
              </div>
            </Link>

            {/* Sóller */}
            <Link
              href="/soller"
              className="block relative h-64 rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/soller.jpg"
                alt="Sóller"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sóller</h3>
                <p>
                  A scenic mountain town offering easy access to Majorca's
                  stunning mountain and coastal landscapes.
                </p>
                <span className="mt-4 inline-block text-blue-100 font-semibold">
                  View Destination →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Majorca Accommodation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Majorca Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Accommodation Types */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Luxury Villas</h3>
              <p className="text-gray-600 mb-4">
                Indulge in privacy and comfort with our selection of stunning villas. Perfect for families or groups looking for extra space and exclusivity.
              </p>
              <Link
                href="/villas"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore Villas
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Beachfront Apartments</h3>
              <p className="text-gray-600 mb-4">
                Wake up to stunning sea views from our selection of beachfront apartments. Ideal for couples or small families who want easy access to the beach.
              </p>
              <Link
                href="/apartments"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore Apartments
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Boutique Hotels</h3>
              <p className="text-gray-600 mb-4">
                Experience Majorca's hospitality at its finest with our handpicked selection of boutique hotels offering personalized service and unique character.
              </p>
              <Link
                href="/hotels"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore Hotels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest from Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/images/blog-1.jpg"
                  alt="Majorca on a Budget"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Majorca on a Budget: How to Experience the Island Without Breaking the Bank
                </h3>
                <p className="text-xs text-gray-500 mb-2">Apr 15, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover how to visit Majorca without breaking the bank! Tips on budget-friendly accommodation, free attractions, affordable food options, and transport for experiencing Majorca on a budget.
                </p>
                <Link
                  href="/blog/majorca-on-a-budget-experience-island"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/images/blog-2.jpg"
                  alt="Accessible Majorca"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Accessible Majorca: A Comprehensive Guide to Accessible Attractions
                </h3>
                <p className="text-xs text-gray-500 mb-2">Apr 14, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover wheelchair-friendly attractions in Majorca, including Palma Cathedral and accessible beaches. Tips for planning accessible travel and finding suitable accommodation.
                </p>
                <Link
                  href="/blog/accessible-majorca-guide-attractions"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/images/blog-3.jpg"
                  alt="Majorca with Children"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Majorca with Children: Family-Friendly Attractions and Accommodation Tips
                </h3>
                <p className="text-xs text-gray-500 mb-2">Apr 13, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Planning a family trip to Majorca? Discover the best kid-friendly attractions, beaches, and water parks, plus tips for finding great family accommodation.
                </p>
                <Link
                  href="/blog/majorca-with-children-family-friendly-attractions-accommodation"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
