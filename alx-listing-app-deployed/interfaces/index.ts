// Props for reusable Card component
export interface CardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  tags?: string[];
  guests: number;
  beds: number;
  baths: number;
  isDiscounted?: boolean;
  discountText?: string;
}

// Props for reusable Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description: string;
  amenities: string[];
  reviews: Review[];
}
