import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalPayment, setTotalPayment] = useState(price * 7); // Assume 7 nights by default

  const calculateTotal = () => {
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights =
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24);
    setTotalPayment(price * nights);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-sm mx-auto">
      <h3 className="text-xl font-semibold">{`$${price}/night`}</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-sm">Check-in</label>
        <div className="flex items-center border p-2 mt-2 rounded-md">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input
            type="date"
            className="w-full border-none outline-none"
            value={checkInDate}
            onChange={(e) => {
              setCheckInDate(e.target.value);
              calculateTotal();
            }}
          />
        </div>
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-sm">Check-out</label>
        <div className="flex items-center border p-2 mt-2 rounded-md">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <input
            type="date"
            className="w-full border-none outline-none"
            value={checkOutDate}
            onChange={(e) => {
              setCheckOutDate(e.target.value);
              calculateTotal();
            }}
          />
        </div>
      </div>

      {/* Pricing Details */}
      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <span>$50 x 7 nights</span>
          <span>${price * 7}</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Weekly discounts</span>
          <span>- $88</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Service fee</span>
          <span>$33</span>
        </div>
        <div className="flex justify-between text-sm mt-2 font-semibold">
          <span>Total payment</span>
          <span>${totalPayment}</span>
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full mt-6 bg-green-500 text-white py-2 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
