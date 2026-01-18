import { useState } from "react";
import Image from "next/image";
import {
  FaStar,
  FaMapMarkerAlt,
  FaUsers,
  FaSave,
  FaShareAlt,
  FaChevronDown,
  FaChevronUp,
  FaBed,
  FaBath,
  FaSwimmingPool,
  FaWifi,
  FaRegSnowflake,
  FaHotTub,
  FaParking,
  FaCarSide,
  FaCoffee,
} from "react-icons/fa";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Flex container for the left (details) and right (buttons) sections */}
      <div className="flex justify-between items-start">
        {/* Left section */}
        <div>
          <h1 className="text-4xl font-bold">{property.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-lg">{property.rating}</span>
            <span className="text-gray-500">
              ({property.reviews.length} reviews)
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mt-2">
            <FaMapMarkerAlt className="text-gray-600" />
            <span className="text-lg">
              {property.address.city}, {property.address.country}
            </span>
          </div>

          {/* Type of property */}
          <div className="flex items-center space-x-2 mt-2">
            <FaUsers className="text-gray-600" />
            <span className="text-lg">{property.category.join(", ")}</span>
          </div>
        </div>

        {/* Right section - Save and Share buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center bg-gray-200 p-2 rounded-md hover:bg-gray-300">
            <FaSave className="mr-2" /> {/* Save icon */}
            <span>Save</span>
          </button>
          <button className="flex items-center bg-gray-200 p-2 rounded-md hover:bg-gray-300">
            <FaShareAlt className="mr-2" /> {/* Share icon */}
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="w-full h-96 relative">
          <Image
            src={property.image}
            alt={`Image of ${property.name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="flex mt-6 space-x-4">
        <div className="flex items-center bg-gray-100 p-3 rounded-full">
          <FaBed className="mr-2 text-gray-600" /> {/* Bed icon */}
          <span>{property.offers.bed} Bedrooms</span>
        </div>
        <div className="flex items-center bg-gray-100 p-3 rounded-full">
          <FaBath className="mr-2 text-gray-600" /> {/* Bath icon */}
          <span>{property.offers.shower} Bathrooms</span>
        </div>
        <div className="flex items-center bg-gray-100 p-3 rounded-full">
          <FaUsers className="mr-2 text-gray-600" /> {/* Users icon */}
          <span>{property.offers.occupants} guests</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Description</h2>
        <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-sm">
          <p className="text-gray-700">
            {showFullDescription
              ? property.description
              : `${property.description.substring(0, 150)}...`}
          </p>
          <button
            onClick={toggleDescription}
            className="text-blue-500 mt-2 flex items-center"
          >
            {showFullDescription ? (
              <>
                <span>Read less</span> <FaChevronUp className="ml-2" />
              </>
            ) : (
              <>
                <span>Read more</span> <FaChevronDown className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {property.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              {/* Icon Placeholder for various amenities */}
              {amenity === "Pool" && (
                <FaSwimmingPool className="text-blue-500 mr-3" />
              )}
              {amenity === "Wifi" && <FaWifi className="text-gray-600 mr-3" />}
              {amenity === "Air Conditioning" && (
                <FaRegSnowflake className="text-blue-400 mr-3" />
              )}
              {amenity === "Hot Tub" && (
                <FaHotTub className="text-purple-500 mr-3" />
              )}
              {amenity === "Parking" && (
                <FaParking className="text-gray-600 mr-3" />
              )}
              {amenity === "Bathtub" && (
                <FaBath className="text-gray-600 mr-3" />
              )}{" "}
              {/* Updated to FaBath */}
              {amenity === "Car Side" && (
                <FaCarSide className="text-gray-600 mr-3" />
              )}
              {amenity === "Bedroom" && (
                <FaBed className="text-gray-600 mr-3" />
              )}
              {amenity === "Coffee Maker" && (
                <FaCoffee className="text-gray-600 mr-3" />
              )}
              <span className="text-lg">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
