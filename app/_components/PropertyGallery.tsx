"use client";

const mockImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
];

import Image from "next/image";

const PropertyGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-2 h-[60vh]">
      <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
        <Image
          src={mockImages[0]}
          alt="Property main image"
          fill
          sizes="50vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="relative">
        <Image
          src={mockImages[1]}
          alt="Property image"
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="relative rounded-tr-xl overflow-hidden">
        <Image
          src={mockImages[2]}
          alt="Property image"
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="relative">
        <Image
          src={mockImages[1]}
          alt="Property image"
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
      <div className="relative rounded-br-xl overflow-hidden">
        <Image
          src={mockImages[2]}
          alt="Property image"
          fill
          sizes="25vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PropertyGallery;
