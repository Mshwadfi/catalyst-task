"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div className="relative overflow-hidden w-full h-[300px] rounded-lg shadow-lg">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${activeImageIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ flexBasis: "100%", height: "300px" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={350}
              className="object-cover h-full"
              loading="eager"
              priority
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to image ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              activeImageIndex === index ? "bg-blue-500" : "bg-gray-400"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
