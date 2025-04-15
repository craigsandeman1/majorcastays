import Link from "next/link";
import Image from "next/image";
import { Share2, Bookmark, User, Home, Wifi, Car, Coffee, Tv, Ban, Waves, ArrowRight, CheckCircle2 } from "lucide-react";

type PropertyAmenities = {
  wifi: boolean;
  parking: boolean;
  kitchen: boolean;
  tv: boolean;
  airConditioning: boolean;
  cityView: boolean;
  washingMachine: boolean;
  // Optional amenities that may differ between properties
  balcony?: boolean;
  terrace?: boolean;
  petsAllowed?: boolean;
  dishwasher?: boolean;
};

type PropertyImage = {
  id: string;
  url: string;
};

type PropertyDescription = {
  id: string;
  type: "heading" | "paragraph";
  content: string;
};

type Property = {
  id: string;
  name: string;
  description: PropertyDescription[];
  location: string;
  type: string;
  rating: number;
  reviews: number;
  guests: string;
  images: PropertyImage[];
  amenities: PropertyAmenities;
  bookingUrl: string;
};

// Note: In a real application, this data would come from a database
const getPropertyData = (id: string): Property => {
  const properties: Record<string, Property> = {
    "palma-luxury-apartment": {
      id: "palma-luxury-apartment",
      name: "Palma Luxury Apartment",
      description: [
        {
          id: "palma-heading-1",
          type: "heading",
          content: "Welcome to Palma Luxury Apartment: Your Stylish Retreat in the Heart of Palma!"
        },
        {
          id: "palma-para-1",
          type: "paragraph",
          content: "Nestled in the vibrant center of Palma, this luxury apartment is your perfect home base for exploring the magnificent capital of Majorca. Just a short walk from the iconic La Seu Cathedral (500m) and the picturesque Paseo Marítimo (800m), you'll find yourself surrounded by history, culture, and Mediterranean charm."
        },
        {
          id: "palma-para-2",
          type: "paragraph",
          content: "This delightful apartment boasts two elegant bedrooms, perfect for a restful night after a day of exploration. With free high-speed WiFi to keep you connected and a large smart TV for those cozy evenings in, you'll feel right at home. The fully equipped modern kitchen, complete with a refrigerator, dishwasher, and washing machine, makes it easy to whip up a delicious meal or two. And let's not forget the private balcony with stunning city views that greet you every morning!"
        },
        {
          id: "palma-para-3",
          type: "paragraph",
          content: "Plus, with secure underground parking, you can easily explore all the hidden gems around Majorca without a worry. Whether you're planning to visit the historic Old Town, relax on the nearby beaches, or enjoy the vibrant nightlife, you're in for a treat!"
        },
        {
          id: "palma-para-4",
          type: "paragraph",
          content: "So why wait? Come and experience the magic of Majorca while staying at one of the best apartments in Palma!"
        }
      ],
      location: "Calle San Miguel, Palma, 07002, Spain",
      type: "Apartment",
      rating: 9.8,
      reviews: 36,
      guests: "2-4",
      images: [
        {
          id: "palma-luxury-main",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414516515.jpg"
        },
        {
          id: "palma-luxury-living",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503095.jpg"
        },
        {
          id: "palma-luxury-bedroom",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503133.jpg"
        },
        {
          id: "palma-luxury-kitchen",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503125.jpg"
        },
        {
          id: "palma-luxury-bathroom",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503132.jpg"
        }
      ],
      amenities: {
        wifi: true,
        parking: true,
        kitchen: true,
        tv: true,
        airConditioning: true,
        balcony: true,
        cityView: true,
        washingMachine: true,
        dishwasher: true,
        petsAllowed: false
      },
      bookingUrl: "https://www.booking.com/hotel/es/palma-luxury-apartment.en-gb.html?selected_currency=EUR&lang=en-gb&group_adults=2&group_children=0&no_rooms=1&aid=2438897&no_rooms=1&group_adults=2"
    },
    "cathedral-view-suite": {
      id: "cathedral-view-suite",
      name: "Cathedral View Suite",
      description: [
        {
          id: "cathedral-heading-1",
          type: "heading",
          content: "Welcome to Cathedral View Suite: Your Luxury Retreat in Palma!"
        },
        {
          id: "cathedral-para-1",
          type: "paragraph",
          content: "Located in the prestigious heart of Palma, this exquisite holiday home offers unparalleled views of the magnificent La Seu Cathedral. Just steps away from the historic old town and a short stroll to the picturesque marina (600m), you'll be perfectly positioned to experience the best of Majorca's captivating capital."
        },
        {
          id: "cathedral-para-2",
          type: "paragraph",
          content: "This spacious suite features one sumptuous bedroom with a luxury en-suite bathroom, ideal for couples seeking a romantic getaway. With complimentary WiFi and a premium entertainment system, you can stay connected or unwind after a day of exploration. The chef's kitchen includes top-of-the-line appliances and everything you need to prepare gourmet meals, which can be enjoyed on your private terrace with those breathtaking cathedral views."
        },
        {
          id: "cathedral-para-3",
          type: "paragraph",
          content: "We provide secure parking for guests who wish to explore the island, though with the city's best restaurants, boutiques, and cultural sites at your doorstep, you may find little reason to venture far from this perfect urban oasis."
        },
        {
          id: "cathedral-para-4",
          type: "paragraph",
          content: "Experience the elegance and charm of Palma from the comfort of the Cathedral View Suite - where luxury meets location."
        }
      ],
      location: "Plaza de la Seu, Palma, 07001, Spain",
      type: "Holiday Home",
      rating: 9.6,
      reviews: 48,
      guests: "1-2",
      images: [
        {
          id: "cathedral-main",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503095.jpg"
        },
        {
          id: "cathedral-living",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503133.jpg"
        },
        {
          id: "cathedral-bedroom",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503125.jpg"
        },
        {
          id: "cathedral-kitchen",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414516515.jpg"
        },
        {
          id: "cathedral-bathroom",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/414503132.jpg"
        }
      ],
      amenities: {
        wifi: true,
        parking: true,
        kitchen: true,
        tv: true,
        airConditioning: true,
        terrace: true,
        cityView: true,
        washingMachine: true,
        petsAllowed: false,
      },
      bookingUrl: "https://www.booking.com/hotel/es/cathedral-view-suite.en-gb.html?selected_currency=EUR&lang=en-gb&group_adults=2&group_children=0&no_rooms=1&aid=2438897&no_rooms=1&group_adults=2"
    }
  };

  return properties[id] || properties["palma-luxury-apartment"];
};

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = getPropertyData(params.id);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/palma" className="text-blue-600 hover:underline capitalize">Palma</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">{property.name}</span>
          </nav>
        </div>

        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="capitalize bg-gray-100 px-2 py-1 rounded-full flex items-center">
                  {property.type}
                </span>
                <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded-full">
                  <span>{property.rating}</span>
                  <span className="ml-1">({property.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md">
                <Bookmark className="h-4 w-4" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Property Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 row-span-2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={property.images[0].url}
                  alt={property.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                    View all photos
                  </span>
                </div>
              </div>
            </div>
            {property.images.slice(1, 5).map((image) => (
              <div key={image.id} className="relative h-[192px] rounded-lg overflow-hidden cursor-pointer group">
                <Image
                  src={image.url}
                  alt={`${property.name} - ${image.id}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Property Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2">
            {/* Key Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">Key Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <User className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-medium">Guests</h3>
                  <p className="text-sm text-gray-600">{property.guests} people</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Home className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-medium">Type</h3>
                  <p className="text-sm text-gray-600 capitalize">{property.type}</p>
                </div>
              </div>
            </div>

            {/* About This Property */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Property</h2>
              <div className="prose max-w-none">
                {property.description.map((section) => (
                  section.type === "heading" ? (
                    <h3 key={section.id} className="text-xl font-semibold mb-3">{section.content}</h3>
                  ) : (
                    <p key={section.id} className="mb-4">{section.content}</p>
                  )
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-gray-600 mb-4">{property.location}</p>
              <div className="rounded-lg overflow-hidden h-64 relative">
                <Image
                  src="/images/palma.jpg"
                  alt="Map location"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Facilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Internet */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                    Internet
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 ml-10">WiFi is available</p>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>Free high-speed WiFi throughout the property</span>
                    </li>
                  </ul>
                </div>

                {/* Parking */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-2" />
                    Parking
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 ml-10">Private parking available</p>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>Secure underground parking</span>
                    </li>
                  </ul>
                </div>

                {/* Kitchen */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Coffee className="h-5 w-5 text-blue-600 mr-2" />
                    Kitchen
                  </h3>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>Fully equipped kitchen</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span>Refrigerator, dishwasher, microwave</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span>Coffee maker and cooking essentials</span>
                    </li>
                  </ul>
                </div>

                {/* Entertainment */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Tv className="h-5 w-5 text-blue-600 mr-2" />
                    Entertainment
                  </h3>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>Large flat-screen smart TV</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span>Streaming services available</span>
                    </li>
                  </ul>
                </div>

                {/* House Rules */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Ban className="h-5 w-5 text-blue-600 mr-2" />
                    House Rules
                  </h3>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>No smoking</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span>No parties or events</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span>{property.amenities.petsAllowed ? "Pets allowed" : "No pets allowed"}</span>
                    </li>
                  </ul>
                </div>

                {/* Views */}
                <div className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <Waves className="h-5 w-5 text-blue-600 mr-2" />
                    Views
                  </h3>
                  <ul className="space-y-2 ml-10">
                    <li className="flex items-center text-gray-700">
                      <span>{property.amenities.cityView ? "City view" : "Garden view"}</span>
                    </li>
                    {property.amenities.balcony && (
                      <li className="flex items-center text-gray-700">
                        <span>Private balcony</span>
                      </li>
                    )}
                    {property.amenities.terrace && (
                      <li className="flex items-center text-gray-700">
                        <span>Private terrace</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Info */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
              <p className="mb-4 text-gray-600">Contact for pricing</p>

              <div className="space-y-4 mb-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold">Property Highlights</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Wifi className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-4 w-4 text-blue-600 mr-2" />
                    <span>Free Parking</span>
                  </div>
                  {property.amenities.cityView && (
                    <div className="flex items-center">
                      <Waves className="h-4 w-4 text-blue-600 mr-2" />
                      <span>City View</span>
                    </div>
                  )}
                </div>
              </div>

              <a
                href={property.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
              >
                Book Now <ArrowRight className="h-4 w-4 ml-1" />
              </a>

              <p className="text-sm text-gray-500 mt-4 text-center">
                You'll be redirected to our booking partner
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-semibold mb-2">Why book with Majorca Stays?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                    <span className="text-sm">Best prices guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                    <span className="text-sm">Verified property information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                    <span className="text-sm">Secure booking through our trusted partner</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
