// components/OrderSummary.tsx
import React from "react";
import Image from "next/image";
import { FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";

type BookingDetails = {
  propertyName: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  startDate: string;
  startTime: string;
  totalNights: number;
  bookingFee: number;
  price: number;
};

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({
  bookingDetails,
}) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      {/* Property Image + Info */}
      <div className="mt-4">
        <div className="relative w-full h-56 rounded-lg overflow-hidden">
          <Image
            src={bookingDetails.imageUrl}
            alt={bookingDetails.propertyName}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
            <FaStar className="text-yellow-400" />
            <span className="font-medium text-black">{bookingDetails.rating}</span>
            <span className="text-gray-500">
              ({bookingDetails.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Booking Info */}
      <div className="flex flex-wrap gap-2 text-sm mt-3">
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg">
          <FaCalendarAlt className="text-gray-500" /> {bookingDetails.startDate}
        </span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg">
          <FaClock className="text-gray-500" /> {bookingDetails.startTime}
        </span>
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg">
          <MdNightsStay className="text-gray-500" /> {bookingDetails.totalNights} Nights
        </span>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-gray-500">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>Subtotal</p>
          <p>${bookingDetails.price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <p>Grand Total</p>
          <p>
            ${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
