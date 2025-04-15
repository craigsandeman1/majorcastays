import Link from "next/link";
import Image from "next/image";
import { Search, CheckCircle2 } from "lucide-react";

export default function PalmaPage() {
  // This would come from a database in a real application
  const accommodations = [
    {
      id: "palma-luxury-apartment",
      name: "Palma Luxury Apartment",
      location: "Calle San Miguel, Palma, 07002, Spain",
      type: "Apartment",
      rating: 9.8,
      reviews: 36,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414516515.jpg"
    },
    {
      id: "cathedral-view-suite",
      name: "Cathedral View Suite",
      location: "Plaza de la Seu, Palma, 07001, Spain",
      type: "Holiday Home",
      rating: 9.6,
      reviews: 48,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503095.jpg"
    },
    {
      id: "old-town-apartment",
      name: "Old Town Apartment",
      location: "Carrer de Sant Feliu, Palma, 07012, Spain",
      type: "Apartment",
      rating: 9.4,
      reviews: 27,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503133.jpg"
    },
    {
      id: "palma-bay-hotel",
      name: "Palma Bay Hotel",
      location: "Paseo Marítimo, Palma, 07014, Spain",
      type: "Hotel",
      rating: 9.2,
      reviews: 104,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503125.jpg"
    },
    {
      id: "santa-catalina-loft",
      name: "Santa Catalina Loft",
      location: "Calle Sant Magí, Palma, 07013, Spain",
      type: "Apartment",
      rating: 9.0,
      reviews: 19,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503132.jpg"
    },
    {
      id: "plaza-mayor-guest-house",
      name: "Plaza Mayor Guest House",
      location: "Plaza Mayor, Palma, 07001, Spain",
      type: "Guest House",
      rating: 8.9,
      reviews: 31,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503130.jpg"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Accommodation in Palma</h1>

        <h2 className="text-2xl font-bold mt-8 mb-4">Palma Stays</h2>
        <h3 className="text-xl mb-6">Explore Palma Accommodations</h3>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/palma" className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            All
          </Link>
          <Link href="/palma/holiday-home" className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Holiday Home
          </Link>
          <Link href="/palma/apartment" className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Apartment
          </Link>
          <Link href="/palma/villa" className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Villa
          </Link>
          <Link href="/palma/hotel" className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Hotel
          </Link>
          <Link href="/palma/guest-house" className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Guest House
          </Link>
        </div>

        {/* Filter properties section */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h3 className="font-semibold mb-4">Filter Properties</h3>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name"
                  className="w-full p-2 border rounded-md pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="md:w-32">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-6 md:mt-0">
                Search
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium mb-2">Amenities</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="wifi" className="rounded" />
                <label htmlFor="wifi">WiFi</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="parking" className="rounded" />
                <label htmlFor="parking">Parking</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="breakfast" className="rounded" />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="tv" className="rounded" />
                <label htmlFor="tv">TV</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="pet-friendly" className="rounded" />
                <label htmlFor="pet-friendly">Pet Friendly</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="laundry" className="rounded" />
                <label htmlFor="laundry">Laundry</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="private-bathroom" className="rounded" />
                <label htmlFor="private-bathroom">Private Bathroom</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="hot-tub" className="rounded" />
                <label htmlFor="hot-tub">Hot Tub</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="sea-view" className="rounded" />
                <label htmlFor="sea-view">Sea View</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="garden" className="rounded" />
                <label htmlFor="garden">Garden</label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-medium mb-2">Minimum Rating</h4>
            <input
              type="range"
              min="0"
              max="10"
              defaultValue="0"
              step="0.1"
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>0</span>
              <span>10</span>
            </div>
          </div>

          <div className="mt-4">
            <button className="bg-gray-50 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm">
              Reset Filters
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          Showing {accommodations.length} of {accommodations.length} accommodations
        </div>

        {/* Accommodation listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations.map((accommodation) => (
            <Link
              key={accommodation.id}
              href={`/property/${accommodation.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48">
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-xs font-semibold capitalize">
                  {accommodation.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{accommodation.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{accommodation.location}</p>
                <div className="flex items-center">
                  <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2">
                    <span>{accommodation.rating}</span>
                  </div>
                  <span className="text-gray-600 text-xs">({accommodation.reviews} reviews)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Destination description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Palma</h2>
          <p className="text-gray-700 mb-4">
            Palma is Majorca's vibrant capital city, home to a stunning cathedral, rich history, and charming old town streets.
          </p>
          <p className="text-gray-700 mb-8">
            The city blends beautiful architecture, modern shopping districts, and Mediterranean culture to create a unique destination
            that attracts visitors from around the world. From the impressive La Seu Cathedral to the historic Arab Quarter and the bustling
            Paseo Marítimo waterfront promenade, Palma offers something for every traveler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Cultural Heritage</h3>
              <p className="text-gray-700 text-sm">
                Palma boasts a rich cultural heritage with its Gothic cathedral, historic palaces, and Arab influences that reflect the city's diverse history.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Shopping & Dining</h3>
              <p className="text-gray-700 text-sm">
                Explore upscale boutiques, local markets, and a vibrant culinary scene ranging from traditional Spanish tapas to international cuisine.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Beaches & Marina</h3>
              <p className="text-gray-700 text-sm">
                Enjoy beautiful beaches just minutes from the city center, alongside the impressive marina filled with luxury yachts and waterfront restaurants.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">What Palma Offers</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Historic Cathedral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Old Town Streets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Art Galleries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Waterfront Dining</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm">Shopping Districts</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Hotels</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Luxurious hotels with stunning views and premium amenities.
              </p>
              <Link
                href="/palma/hotel"
                className="text-blue-600 text-sm hover:underline"
              >
                View Hotels
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Apartments</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Modern self-catering apartments perfect for independent travelers.
              </p>
              <Link
                href="/palma/apartment"
                className="text-blue-600 text-sm hover:underline"
              >
                View Apartments
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Guest Houses</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Charming guest houses offering a more personal experience.
              </p>
              <Link
                href="/palma/guest-house"
                className="text-blue-600 text-sm hover:underline"
              >
                View Guest Houses
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">About Palma</h2>
            <p className="text-gray-700 mb-4">
              Palma is the capital and largest city of the Balearic Islands, located on the south coast of Majorca. With a rich history dating back to the Roman era, the city has been shaped by various civilizations including the Moors and Christians, creating a unique cultural blend evident in its architecture and traditions.
            </p>
            <p className="text-gray-700">
              The city combines historical charm with modern amenities, offering visitors beautiful beaches, excellent shopping, world-class restaurants, and a vibrant nightlife. Whether you're looking for a cultural city break, a beach holiday, or a combination of both, Palma provides the perfect base to explore Majorca.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
