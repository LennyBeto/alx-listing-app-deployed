import { PropertyProps } from "@/interfaces";

// App info
export const APP_NAME = 'ALX Listing App';

// API config (can be overridden by environment variables)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Placeholder asset paths
export const PLACEHOLDER_IMAGE = '/assets/placeholder.jpg';

// Common listing tags
export const LISTING_TAGS = ['Top Villa', 'Self Checkin', 'Free Reschedule'];

// Currency settings
export const CURRENCY_SYMBOL = '$';

// UI text
export const UI_TEXT = {
  reserveNow: 'Reserve now',
  bookNow: 'Book now',
  details: 'View details',
  loading: 'Loading...',
  noListings: 'No listings found.',
};

export const HERO_IMAGE = "/images/hero-bg.png";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/images/villa.png",
    discount: 0,
    description: "A beautiful villa with breathtaking ocean views.",
    amenities: ["Pool", "Wifi", "Air Conditioning"],
    reviews: [
      { name: "John Doe", avatar: "/avatars/john.jpg", rating: 5, comment: "Amazing stay! The villa was pristine and the view was out of this world!" },
      { name: "Jane Smith", avatar: "/avatars/jane.jpg", rating: 4, comment: "Great place, but the WiFi could have been faster." }
    ]
  },
  {
    id: "2",
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/images/mountain.png",
    discount: 30,
    description: "Cozy mountain retreat with a fireplace.",
    amenities: ["Fireplace", "Mountain View"],
    reviews: [
      { name: "Alice Walker", avatar: "/avatars/alice.jpg", rating: 4, comment: "Great location but a bit too cold during the night." }
    ]
  },
  {
    id: "3",
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/images/mountain.png",
    discount: 0,
    description: "A secluded desert retreat, ideal for a peaceful getaway.",
    amenities: ["Pet Friendly", "Wifi"],
    reviews: [
      { name: "Michael Brown", avatar: "/avatars/michael.jpg", rating: 5, comment: "Perfect escape for a quiet weekend. The surroundings were beautiful." }
    ]
  },
  {
    id: "4",
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "/images/city.png",
    discount: 15,
    description: "A luxurious penthouse with stunning city views.",
    amenities: ["Free WiFi", "24h Checkin"],
    reviews: [
      { name: "Sarah Taylor", avatar: "/avatars/sarah.jpg", rating: 5, comment: "The best view of the city! We felt like VIPs staying here." },
      { name: "Chris Evans", avatar: "/avatars/chris.jpg", rating: 4, comment: "Great location and amazing amenities!" }
    ]
  },
  {
    id: "5",
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "/images/riverside.png",
    discount: 20,
    description: "Charming riverside cabin with a private dock and free kayaks.",
    amenities: ["Private Dock", "Free Kayaks"],
    reviews: [
      { name: "David Green", avatar: "/avatars/david.jpg", rating: 4, comment: "Great location for nature walks, but the cabin could use some updates." }
    ]
  },
  {
    id: "6",
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "/images/modern.png",
    discount: 0,
    description: "Luxury beachfront villa with a private pool and personal chef.",
    amenities: ["Private Pool", "Chef Service"],
    reviews: [
      { name: "Olivia Johnson", avatar: "/avatars/olivia.jpg", rating: 5, comment: "Luxurious stay with excellent service. The chef was amazing!" }
    ]
  },
  {
    id: "7",
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "/images/lakeside.png",
    discount: 10,
    description: "A cozy chalet by the lake, perfect for hiking and nature lovers.",
    amenities: ["Hiking Trails", "Lakeside View"],
    reviews: []
  },
  {
    id: "8",
    name: "Tropical Garden Villa",
    address: { state: "Ubud", city: "Bali", country: "Indonesia" },
    rating: 4.80,
    category: ["Tropical", "Garden", "Self Checkin"],
    price: 2700,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "/images/tropical.png",
    discount: 25,
    description: "A charming villa nestled in a tropical garden, offering peace and privacy.",
    amenities: ["Self Checkin", "Free Parking"],
    reviews: [
      { name: "Lucas Wong", avatar: "/avatars/lucas.jpg", rating: 5, comment: "Loved the tropical garden! Very private and serene." }
    ]
  },
  {
    id: "9",
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/images/urban.png",
    discount: 0,
    description: "Trendy urban loft in the heart of Berlin.",
    amenities: ["Free WiFi", "City Center"],
    reviews: [
      { name: "Lucas Martin", avatar: "/avatars/lucas.jpg", rating: 4, comment: "Great for city access, but a bit small for longer stays." }
    ]
  },
  {
    id: "10",
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/images/forest.png",
    discount: 40,
    description: "Secluded cabin with a hot tub, perfect for winter getaways.",
    amenities: ["Hot Tub", "Secluded"],
    reviews: [
      { name: "Charlotte White", avatar: "/avatars/charlotte.jpg", rating: 5, comment: "Amazing cabin in the woods! The hot tub was a bonus after a day of skiing." }
    ]
  },
  {
    id: "11",
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "/images/cliffside.png",
    discount: 50,
    description: "Stunning cliffside villa with an infinity pool and panoramic sea views.",
    amenities: ["Infinity Pool", "Sea View"],
    reviews: [
      { name: "Sophia Brown", avatar: "/avatars/sophia.jpg", rating: 5, comment: "The view was just breathtaking. We felt like we were living in a dream." }
    ]
  }
];
