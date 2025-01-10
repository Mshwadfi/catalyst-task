'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface Property {
  id: string;
  name: string;
  price: number;
  location: string;
  images: string[];
  rating: number;
}

interface PropertyCardProps {
  property: Property;
}

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    alt: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    alt: "image2",
  },
];

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, name, location, price, rating } = property;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imgs.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  return (
    <div className="group cursor-pointer space-y-4 w-64">
      <div className="relative h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={imgs[currentImageIndex].src}
          alt={name}
          fill
          priority
          className="object-cover"
        />

        {(
          <>
            {currentImageIndex >= 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/70 opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {currentImageIndex < imgs.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/70 opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </>
        )}
      </div>

      <Link href={`/properties/${id}`} className="block space-y-1">
        <div>
          <div className="flex justify-between">
            <h3 className="font-semibold">{name}</h3>
            <div className="flex items-center gap-1 ">
              <Star size={16} />
              <span>{rating || 4.8}</span>
            </div>
          </div>
          <p className="text-neutral-500">{location}</p>
          <p>
            <span className="font-semibold">${price}</span> night
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
