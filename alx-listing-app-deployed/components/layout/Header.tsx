import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import {
  FaHome,
  FaBuilding,
  FaMountain,
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaCampground,
  FaTree,
  FaWarehouse,
  FaCity,
  FaHouseUser,
  FaWater,
  FaTractor,
  FaHotel,
  FaLandmark,
} from "react-icons/fa";
import { FaTreeCity, FaSuitcaseRolling } from "react-icons/fa6";

const Header: React.FC = () => {
  const [location, setLocation] = useState("");

  const categories = [
    { name: "Rooms", icon: <FaHome size={20} /> },
    { name: "Mansion", icon: <FaBuilding size={20} /> },
    { name: "Countryside", icon: <FaMountain size={20} /> },
    { name: "Villa", icon: <FaUmbrellaBeach size={20} /> },
    { name: "Tropical", icon: <FaTree size={20} /> },
    { name: "New", icon: <FaWarehouse size={20} /> },
    { name: "Amazing pool", icon: <FaSwimmingPool size={20} /> },
    { name: "Beach house", icon: <FaUmbrellaBeach size={20} /> },
    { name: "Island", icon: <FaWater size={20} /> },
    { name: "Camping", icon: <FaCampground size={20} /> },
    { name: "Apartment", icon: <FaCity size={20} /> },
    { name: "House", icon: <FaHouseUser size={20} /> },
    { name: "Lakefront", icon: <FaWater size={20} /> },
    { name: "Farm house", icon: <FaTractor size={20} /> },
    { name: "Treehouse", icon: <FaTreeCity size={20} /> },
    { name: "Cabins", icon: <FaHotel size={20} /> },
    { name: "Castles", icon: <FaLandmark size={20} /> },
    { name: "Lakeside", icon: <FaWater size={20} /> },
  ];

  return (
    <header className="w-full border-b">
      {/* ✅ Top banner */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm flex flex-wrap justify-center items-center gap-2 px-4">
        <FaSuitcaseRolling className="text-white text-lg" />
        <span className="text-xs sm:text-sm">
          Overseas trip? Get the latest information on travel guides
        </span>
        <button className="bg-black text-white text-xs px-3 py-1 rounded-full">
          More Info
        </button>
      </div>

      {/* ✅ Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* ✅ Logo Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="ALX Logo"
            width={60}
            height={20}
            priority
          />
        </div>

        {/* ✅ Search Bar (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-4 bg-white border border-[#F6F6F6] rounded-full px-4 py-2 shadow-sm flex-grow max-w-3xl mx-4">
          <div className="flex items-center gap-2 flex-1">
            <FiMapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <span className="text-gray-300">|</span>

          <div className="flex items-center gap-2 flex-1">
            <FiCalendar className="text-gray-500" />
            <input
              type="text"
              placeholder="Check in"
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <span className="text-gray-300">|</span>

          <div className="flex items-center gap-2 flex-1">
            <FiCalendar className="text-gray-500" />
            <input
              type="text"
              placeholder="Check out"
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <span className="text-gray-300">|</span>

          <div className="flex items-center gap-2 flex-1">
            <FiUsers className="text-gray-500" />
            <input
              type="text"
              placeholder="People"
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <button className="bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition">
            <FiSearch size={18} />
          </button>
        </div>

        {/* ✅ Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 text-sm">
            Sign in
          </button>
          <button className="px-4 py-2 border rounded-full hover:bg-gray-100 text-sm">
            Sign up
          </button>
        </div>
      </div>

      {/* ✅ Categories (horizontally scrollable on small screens) */}
      <div className="overflow-x-auto border-t border-[#F6F6F6]">
        <div className="flex gap-6 px-4 py-3 whitespace-nowrap max-w-7xl mx-auto text-sm text-gray-700">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[70px] cursor-pointer hover:text-emerald-600"
            >
              {cat.icon}
              <span className="mt-1">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
