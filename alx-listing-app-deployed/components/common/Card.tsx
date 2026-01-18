'use client'

import React from 'react'
import { FaStar, FaBath, FaBed, FaUsers } from 'react-icons/fa'
import Image from 'next/image'
import { CardProps } from '@/interfaces'

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
  discountText = '',
}) => {
  return (
    <div className="relative bg-black rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.015] duration-300">
      {/* Image */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Discount Badge */}
        {isDiscounted && (
          <span className="absolute top-2 left-2 bg-teal-400 text-white text-xs px-2 py-1 rounded-md font-semibold">
            {discountText}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 text-white">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs mb-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-white bg-opacity-10 border border-white border-opacity-20 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base truncate">{title}</h3>

        {/* Location */}
        <p className="text-sm text-gray-400">{location}</p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold text-lg">{price}</span>
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-400" />
            {rating.toFixed(1)}
          </div>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
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
      </div>
    </div>
  )
}

export default Card
