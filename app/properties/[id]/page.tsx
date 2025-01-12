import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled if needed (e.g., if they rely on window or other client-side APIs)
const PropertyGallery = dynamic(() => import("@/app/_components/PropertyGallery"), { ssr: false });
const PropertyInfo = dynamic(() => import("@/app/_components/PropertyInfo"), { ssr: false });
const ReservationFormWrapper = dynamic(() => import("@/app/_components/ReservationFormWrapper"), { ssr: false });

// Mock properties data (in a real app, this would come from an API/database)
const properties = [
  {
    id: "1",
    title: "Luxury Villa with Ocean View",
    location: "Malibu, California",
    price: 850,
    rating: 4.98,
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    location: "New York City, New York",
    price: 450,
    rating: 4.85,
  },
];

// Required for static export
export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

const PropertyDetails = () => {
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // Don't render the page until the client-side code has been initialized
  if (!isClient) return null;


  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Gallery */}
        <PropertyGallery />
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-6">
          <div className="md:col-span-4">
            {/* Property Info */}
            <PropertyInfo />
          </div>
          <div className="md:col-span-3">
            {/* Reservation Form */}
            <ReservationFormWrapper date={{ from: new Date(), to: undefined }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;
