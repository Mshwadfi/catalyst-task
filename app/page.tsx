"use client"
import CategoryFilter from "./_components/CategoryFilter";
import PropertyList from "./_components/PropertyList";
import { useState } from "react"; // Import useState to manage selectedCategory

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-start gap-6 px-8 sm:px-14">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        {/* <ImageCarousel images={images} />
        <ImageCarousel images={images} />
        <ImageCarousel images={images} />
        <ImageCarousel images={images} /> */}
        <PropertyList />
      </div>
    </>
  );
}
