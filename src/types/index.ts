export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'cuts' | 'beard' | 'rituals';
  description: string;
  price: number;
  duration: string;
  includes: string[];
  image?: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  isPopular?: boolean;
  features: string[];
  duration: string;
  recommendedFor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
  service: string;
  date: string;
  avatar: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'cuts' | 'beard' | 'atelier';
  tag: string;
  imageUrl: string;
  span?: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  specialRequests: string;
}
