"use client";

import { useState } from "react";
import { User, Star, Medal, Waves, CookingPot, Wifi, CircleParking, MapPin } from "lucide-react";
import { LatLngExpression } from "leaflet";
import MapComponent from "./MapComponent";

const PropertyInfo = () => {
  const [showMap, setShowMap] = useState(false);
  const lat = 51;
  const long = -0.9;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coordinates, setCoordinates] = useState<LatLngExpression>([lat, long]);

  const handleLocationClick = () => {
    setShowMap(!showMap);
    setCoordinates([64.0259, 118.7798]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Luxury Villa with Ocean View</h1>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <Star size={16} />
            <span>4.98</span>
          </div>
          <span>·</span>
          <span className="underline">28 reviews</span>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Medal size={16} />
            <span>Superhost</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-2" onClick={handleLocationClick}>
            <MapPin className="cursor-pointer" />
            <span className="underline">Malibu, California</span>
          </div>
        </div>
      </div>
      <hr className="border-t border-neutral-200" />

      {showMap && (
        <div className="mt-4">
          <MapComponent />
        </div>
      )}

      <hr className="border-t border-neutral-200" />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <User size={24} />
          <div>
            <h2 className="font-semibold">Hosted by Sarah</h2>
            <p className="text-neutral-500">Superhost · 5 years hosting</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-neutral-200" />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">About this place</h2>
        <p className="text-neutral-600 leading-relaxed">
          Nestled in the hills of Malibu, this stunning villa offers breathtaking ocean views and modern luxury. Perfect for those seeking a peaceful retreat while remaining close to the city&apos;s attractions. The space features high-end finishes, an infinity pool, and expansive outdoor living areas.
        </p>
      </div>

      <hr className="border-t border-neutral-200" />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">What this place offers</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Waves />
            <span>Ocean view</span>
          </div>
          <div className="flex items-center gap-2">
            <CookingPot />
            <span>Kitchen</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi />
            <span>Wifi</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleParking />
            <span>Free parking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
