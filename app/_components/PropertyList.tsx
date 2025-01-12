"use client";
import { useEffect, useState } from "react";
import PropertyCard, { Property } from "./PropertyCard";

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const response = await fetch(`/api/properties?page=${page}&limit=${limit}`);
      const data = await response.json();
      setProperties((prevProperties) => [...prevProperties, ...data.data]);
      setTotal(data.total);
      setLoading(false);
    };

    fetchProperties();
  }, [page, limit]);

  const handleShowMore = () => {
    if (!loading && page * limit < total) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 py-4 w-full justify-items-center">
        {properties.map((property) => (
          <PropertyCard key={property?.id} property={property} />
        ))}

        {loading &&
          Array.from({ length: limit }).map((_, index) => (
            <div
              key={index}
              className="w-80 h-[90%] flex flex-col space-y-2 p-3 shimmer-card"
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-xl animate-pulse"></div>
              <div className="flex flex-col space-y-0.5">
                <div className="w-3/4 h-4 bg-gray-200 animate-pulse"></div>
                <div className="w-1/2 h-3 bg-gray-200 animate-pulse"></div>
                <div className="w-1/3 h-3 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>

      {page * limit < total && (
        <button
          onClick={handleShowMore}
          disabled={loading}
          className="my-4 px-6 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition duration-200"
        >
          {loading ? "Loading..." : "Show More"}
        </button>
      )}
    </div>
  );
};

export default PropertyList;
