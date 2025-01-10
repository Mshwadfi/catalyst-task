"use client";

import { Home, Building2, Tent, Warehouse, Trees, Palmtree, Mountain, Ship } from "lucide-react";

const categories = [
  { label: "All", icon: Home },
  { label: "Apartments", icon: Building2 },
  { label: "Camping", icon: Tent },
  { label: "Barns", icon: Warehouse },
  { label: "Countryside", icon: Trees },
  { label: "Tropical", icon: Palmtree },
  { label: "Mountains", icon: Mountain },
  { label: "Boats", icon: Ship },
];

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <div className="pt-24 pb-6 overflow-x-auto">
      <div className="flex items-center justify-center gap-2 p-1 min-w-max overflow-hidden">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              onClick={() => onSelectCategory(category.label)}
              className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${
                  selectedCategory === category.label
                    ? "text-neutral-800 border-b-2 border-neutral-800"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
