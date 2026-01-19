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

// Review interface
export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

// Address interface
export interface Address {
  state?: string;
  city: string;
  country: string;
}

// Offers interface
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

// Property interface
export interface PropertyProps {
  id: string | number;          //  added id
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: number;            // optional number
  description?: string;
  amenities?: string[];
  reviews?: Review[];           // optional
}
