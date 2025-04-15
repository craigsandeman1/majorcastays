"use client";

import { useState } from "react";
import { Loader2, Upload, Check, AlertCircle } from "lucide-react";
import Link from "next/link";

type Property = {
  id?: string;
  name: string;
  type: string;
  town: string;
  location: string;
  rating?: number;
  reviews?: number;
  description: string;
  guests?: string;
  images: string[];
  amenities: Record<string, boolean>;
  bookingUrl: string;
  [key: string]: any;
};

type ImportResult = {
  success: boolean;
  message: string;
  properties: Property[];
  errors?: string[];
  towns: string[];
};

export default function ImportPage() {
  const [jsonData, setJsonData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonData(e.target.value);
  };

  const processJson = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      // Parse the JSON data
      const data = JSON.parse(jsonData);
      const properties: Property[] = Array.isArray(data) ? data : [data];
      const processedProperties: Property[] = [];
      const errors: string[] = [];
      const towns = new Set<string>();

      // Process each property
      properties.forEach((property, index) => {
        try {
          // Generate an ID if not provided
          if (!property.id) {
            property.id = `property-${Date.now()}-${index}`;
          }

          // Extract town if not provided
          if (!property.town && property.location) {
            const locationParts = property.location.split(',');
            if (locationParts.length >= 2) {
              property.town = locationParts[1].trim();
            } else {
              property.town = "Unknown";
            }
          }

          // Add town to the set
          towns.add(property.town);

          // Ensure amenities exist
          if (!property.amenities) {
            property.amenities = {};
          }

          // Append affiliate link if not already present
          if (property.bookingUrl && !property.bookingUrl.includes("aid=2438897")) {
            const separator = property.bookingUrl.includes("?") ? "&" : "?";
            property.bookingUrl = `${property.bookingUrl}${separator}aid=2438897`;
          }

          // Ensure images is an array
          if (!property.images) {
            property.images = [];
          } else if (!Array.isArray(property.images)) {
            property.images = [property.images];
          }

          processedProperties.push(property);
        } catch (err) {
          errors.push(`Error processing property at index ${index}: ${(err as Error).message}`);
        }
      });

      // Save properties to local storage for demo purposes
      // In a real app, this would be an API call to save to a database
      const existingProperties = JSON.parse(localStorage.getItem("majorcastays_properties") || "[]");
      const updatedProperties = [...existingProperties, ...processedProperties];
      localStorage.setItem("majorcastays_properties", JSON.stringify(updatedProperties));

      setResult({
        success: true,
        message: `Successfully processed ${processedProperties.length} properties with ${errors.length} errors.`,
        properties: processedProperties,
        errors: errors.length > 0 ? errors : undefined,
        towns: Array.from(towns)
      });
    } catch (err) {
      setResult({
        success: false,
        message: `Failed to parse JSON: ${(err as Error).message}`,
        properties: [],
        towns: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Property Import Tool</h1>
        <p className="text-gray-600">
          Import properties from JSON format. The system will automatically categorize them based on their town and append the affiliate link.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Import Properties</h2>
          <div className="mb-4">
            <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-1">
              Paste JSON Data
            </label>
            <textarea
              id="json-input"
              className="w-full h-96 p-3 border rounded-md font-mono text-sm"
              value={jsonData}
              onChange={handleJsonChange}
              placeholder={`[
  {
    "name": "Villa Example",
    "type": "Villa",
    "town": "Palma",
    "location": "Example Street, Palma, 07001, Spain",
    "description": "A beautiful villa in Palma...",
    "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    "amenities": {
      "wifi": true,
      "parking": true
    },
    "bookingUrl": "https://www.booking.com/hotel/es/example.html"
  }
]`}
            ></textarea>
          </div>
          <button
            onClick={processJson}
            disabled={isLoading || !jsonData.trim()}
            className={`w-full py-2 px-4 rounded-md flex items-center justify-center ${
              isLoading || !jsonData.trim()
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Processing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-5 w-5" />
                Import Properties
              </>
            )}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Import Results</h2>
          {result ? (
            <div>
              <div
                className={`p-4 mb-4 rounded-md flex items-start ${
                  result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                }`}
              >
                {result.success ? (
                  <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium">{result.message}</p>
                  {result.errors && result.errors.length > 0 && (
                    <ul className="mt-2 list-disc list-inside text-sm">
                      {result.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {result.success && (
                <>
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Detected Towns:</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.towns.map((town) => (
                        <span
                          key={town}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {town}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Imported Properties:</h3>
                    <div className="max-h-96 overflow-y-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">Name</th>
                            <th className="text-left py-2 px-3">Town</th>
                            <th className="text-left py-2 px-3">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.properties.map((property) => (
                            <tr key={property.id} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-3">{property.name}</td>
                              <td className="py-2 px-3">{property.town}</td>
                              <td className="py-2 px-3">{property.type}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href="/"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      View Site
                    </Link>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center p-8 text-gray-500">
              <p>No data imported yet. Paste JSON data and click Import to see results.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
