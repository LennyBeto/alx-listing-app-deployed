// components/property/ReviewSection.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ propertyId: string | number }> = ({
  propertyId,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return (
      <p className="text-gray-500">
        No reviews yet. Be the first to leave one!
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          {/* Review User */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src={review.avatar}
                alt={review.name}
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`${
                      starIndex < review.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Comment */}
          <p className="mt-2 text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
