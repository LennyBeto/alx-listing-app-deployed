"use client";

import React from "react";
import { FaStar, FaBath, FaBed, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  image,
  title,
  location,
  price,
  rating,
  tags = [],
  guests,
  beds,
  baths,
  isDiscounted = false,
  discountText = "",
}) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden transition hover:scale-[1.015] duration-300 shadow-sm">
      {/* 🖼 Property Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* 🔖 Discount Badge */}
        {isDiscounted && (
          <span className="absolute top-2 left-2 bg-teal-400 text-white text-xs px-2 py-1 rounded-md font-semibold">
            {discountText}
          </span>
        )}
      </div>

      {/* 📄 Content Section */}
      <div className="p-4">
        {/* 🏷 Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#F9F9F9] text-[#161117] bg-opacity-10 border border-white border-opacity-20 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 🏠 Title & ⭐ Rating */}
        <div className="flex justify-between items-start">
          <h3
            className="font-semibold text-[#161117] text-base truncate"
            title={title}
          >
            {title}
          </h3>
          {rating && (
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <FaStar />
              {rating.toFixed(1)}
            </div>
          )}
        </div>

        {/* 📍 Location */}
        <p className="text-sm text-[#929292] mt-1">{location}</p>

        {/* 💲 Price & Property Specs */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-3 text-xs text-gray-400 border p-1 rounded-xl">
            <div className="flex items-center gap-1">
              <FaUsers />
              <span>{guests}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBed />
              <span>{beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBath />
              <span>{baths}</span>
            </div>
          </div>
          <span className="font-semibold text-lg">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
