"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSection from "@/components/common/FilterSection";
import Card from "@/components/common/Card";
import { HERO_IMAGE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = [
  "All",
  "Top Villa",
  "Free Reschedule",
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book",
];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🥄 Fetch properties from API when page loads
  useEffect(() => {
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
      );
      setProperties(response.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Oops! Could not load properties.");
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, []);

  // 🧹 Filter listings dynamically
  const filteredListings = properties.filter((property) =>
    activeFilter === "All" ? true : property.category.includes(activeFilter)
  );

  return (
    <>
      {/* 🖼 Hero Section */}
      <section className="relative max-w-7xl mx-auto mt-6 h-[60vh] md:h-[75vh] lg:h-[80vh] rounded-3xl overflow-hidden px-4">
        <Image
          src={HERO_IMAGE}
          alt="Scenic nature view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Find your favorite <br /> place here!
          </h1>
          <p className="mt-4 text-base md:text-lg lg:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* 🧩 Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <FilterSection
          filters={filters}
          activeFilter={activeFilter}
          onSelect={setActiveFilter}
        />
      </section>

      {/* 🏡 Listings Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((property: PropertyProps, index) => (
              <Card
                key={index}
                image={property.image}
                title={property.name}
                location={`${property.address.city}, ${property.address.country}`}
                price={`$${property.price}/n`}
                rating={property.rating}
                tags={property.category}
                guests={parseInt(property.offers.occupants.split("-")[0]) || 1}
                beds={parseInt(property.offers.bed)}
                baths={parseInt(property.offers.shower)}
                isDiscounted={!!property.discount}
                discountText={
                  property.discount ? `${property.discount}% off` : ""
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* ➕ Show More Button Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition">
          Show more
        </button>
        <p className="mt-2 text-sm text-gray-500">Click to see more listings</p>
      </section>
    </>
  );
};

export default Home;
