export interface Property {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    imageUrl: string;
    hostId: string;
    amenities: string[];
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
  }
  
  export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    checkIn: string;
    checkOut: string;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    guests: number;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    isHost: boolean;
  }