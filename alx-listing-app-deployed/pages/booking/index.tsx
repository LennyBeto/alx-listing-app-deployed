// pages/booking/index.tsx
import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";
import React from "react";

const BookingPage = () => {
  // Example booking details (would normally come from API or context)
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    imageUrl: "/villa.jpg", // place inside /public
    rating: 4.76,
    reviewsCount: 345,
    startDate: "24 August 2024",
    startTime: "1 PM",
    totalNights: 3,
    bookingFee: 65,
    price: 7500,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Booking Form + Cancellation */}
        <div className="lg:col-span-2">
          <BookingForm />

          {/* Cancellation Policy appears inside booking flow */}
          <CancellationPolicy />
        </div>

        {/* Right Side: Order Summary */}
        <div>
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
