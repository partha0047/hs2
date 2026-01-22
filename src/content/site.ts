export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Home {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Property {
  id: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  bookingUrl?: string;
  airbnbUrl?: string;
}

export const siteConfig = {
  propertyName: "Siti Express",
  tagline: "Experience luxury and comfort in our carefully curated collection of premium accommodations.",
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Homestays", href: "/#rooms" },
    { label: "FAQ", href: "/#faq" },
  ] as NavLink[],

  features: [
    {
      title: "Multiple Booking Options",
      description: "Flexible booking options to suit your travel needs, from weekend getaways to extended stays.",
      icon: "calendar",
    },
    {
      title: "Best Vacation Spots",
      description: "Carefully selected locations in the most desirable destinations for an unforgettable experience.",
      icon: "map-pin",
    },
    {
      title: "Various Size Homes",
      description: "From cozy studios to spacious homes, find the perfect accommodation for your group size.",
      icon: "home",
    },
  ] as Feature[],

  homes: [
    {
      id: "premium-home",
      title: "Premium Home",
      description: "Our most popular home featuring premium amenities and exceptional comfort. Experience luxury at its finest.",
      image: "https://picsum.photos/800/1000?random=10",
      badge: "Featured",
    },
    {
      id: "special-home",
      title: "Special Home",
      description: "A unique space designed for those seeking something extraordinary. Premium amenities included.",
      image: "https://picsum.photos/800/1000?random=10",
      badge: "Special",
    },
    {
      id: "couples-home",
      title: "Couples Home",
      description: "Romantic retreats perfect for couples. Intimate spaces with luxurious touches throughout.",
      image: "https://picsum.photos/800/1000?random=10",
      badge: "Popular",
    },
  ] as Home[],

  testimonials: [
    {
      quote: "Our stay exceeded all expectations. The attention to detail and the serene atmosphere made it a truly memorable experience. We'll definitely be returning.",
      author: "Sarah & James",
      role: "Guests",
      avatar: "https://picsum.photos/400/400?random=30",
    },
  ] as Testimonial[],

  faqs: [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is from 3:00 PM onwards, and check-out time is before 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, most of our properties offer parking facilities. Please check the specific property details or contact us for more information about parking availability and any associated fees.",
    },
    {
      question: "Are pets allowed?",
      answer: "Pet policies vary by property. Some of our homes are pet-friendly, while others may have restrictions. Please check the property listing or contact us directly to confirm the pet policy for your chosen accommodation.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy depends on the booking platform and the specific property. Generally, free cancellation is available up to 48 hours before check-in. Please refer to your booking confirmation for specific cancellation terms.",
    },
    {
      question: "Do you provide WiFi and other amenities?",
      answer: "Yes, all our properties include high-speed WiFi, fully equipped kitchens, and essential amenities. Each property listing includes a complete list of amenities available at that specific location.",
    },
    {
      question: "How do I book a property?",
      answer: "You can book directly through our website by clicking on any property card, or use the Booking.com or Airbnb links provided on each property page. For direct bookings, please contact us through the contact form.",
    },
  ] as { question: string; answer: string }[],


  galleryImages: [
    { src: "https://picsum.photos/800/800?random=20", alt: "Living room with elegant furniture" },
    { src: "https://picsum.photos/800/800?random=21", alt: "Luxurious bathroom" },
    { src: "https://picsum.photos/800/800?random=22", alt: "Minimalist corner design" },
    { src: "https://picsum.photos/800/800?random=23", alt: "Modern bathroom sink" },
    { src: "https://picsum.photos/800/800?random=24", alt: "Bright room with natural light" },
  ] as GalleryImage[],

  properties: [
    {
      id: "premium-home",
      name: "Premium Home",
      title: "HARMONY APARTMENTS",
      description: "Our most luxurious offering, featuring spacious living areas, premium furnishings, and breathtaking views. Perfect for those who appreciate the finer things in life.",
      heroImage: "https://picsum.photos/1200/800?random=1",
      images: [
        "https://picsum.photos/1200/800?random=1",
        "https://picsum.photos/800/800?random=2",
        "https://picsum.photos/800/800?random=3",
        "https://picsum.photos/800/800?random=4",
        "https://picsum.photos/800/800?random=5",
        "https://picsum.photos/800/800?random=6",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "King-size bed",
        "Premium linens",
        "Full kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Air conditioning",
        "Private balcony",
        "Luxury bathroom",
      ],
      beds: 2,
      baths: 1,
      sqft: 1000,
      location: "VIZAG",
    },
    {
      id: "special-home",
      name: "Special Home",
      title: "ASAFJAHI TOWERS",
      description: "A unique space designed for those seeking something extraordinary. Premium amenities and thoughtful design create an unforgettable stay.",
      heroImage: "https://picsum.photos/1200/800?random=7",
      images: [
        "https://picsum.photos/1200/800?random=7",
        "https://picsum.photos/800/800?random=8",
        "https://picsum.photos/800/800?random=9",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Queen-size bed",
        "Designer furnishings",
        "Kitchenette",
        "High-speed WiFi",
        "Smart TV",
        "Air conditioning",
        "City views",
      ],
      beds: 1,
      baths: 1,
      sqft: 650,
      location: "HYDERABAD",
    },
    {
      id: "couples-home",
      name: "Couples Home",
      title: "URBAN OASIS",
      description: "Romantic retreats perfect for couples. Intimate spaces with luxurious touches throughout, designed for creating special memories.",
      heroImage: "https://picsum.photos/1200/800?random=7",
      images: [
        "https://picsum.photos/1200/800?random=7",
        "https://picsum.photos/800/800?random=8",
        "https://picsum.photos/800/800?random=9",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "King-size bed",
        "Premium linens",
        "Mini kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Air conditioning",
        "Romantic lighting",
        "Private terrace",
      ],
      beds: 1,
      baths: 1,
      sqft: 550,
      location: "GOA",
    },
    {
      id: "cozy-cottage",
      name: "Cozy Cottage",
      title: "CELSIAN CANOPY",
      description: "A charming cottage perfect for a peaceful getaway. Nestled in a quiet neighborhood with all the comforts of home.",
      heroImage: "https://picsum.photos/1200/800?random=11",
      images: [
        "https://picsum.photos/1200/800?random=11",
        "https://picsum.photos/800/800?random=12",
        "https://picsum.photos/800/800?random=13",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Comfortable queen bed",
        "Full kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Heating & AC",
        "Private garden",
        "Parking available",
        "Pet-friendly",
      ],
      beds: 1,
      baths: 1,
      sqft: 750,
      location: "COIMBATORE",
    },
    {
      id: "spacious-villa",
      name: "Spacious Villa",
      title: "MODEL CENTRUN",
      description: ". Features a large office area and beautiful outdoor space.",
      heroImage: "https://picsum.photos/1200/800?random=14",
      images: [
        "https://picsum.photos/1200/800?random=14",
        "https://picsum.photos/800/800?random=15",
        "https://picsum.photos/800/800?random=16",
        "https://picsum.photos/800/800?random=17",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Multiple bedrooms",
        "Large living room",
        "Full kitchen",
        "Dining area",
        "High-speed WiFi",
        "Smart TVs",
        "Air conditioning",
        "Private pool",
        "Outdoor terrace",
        "Parking",
      ],
      beds: 4,
      baths: 3,
      sqft: 2500,
      location: "GOA",
    },
    {
      id: "modern-loft",
      name: "Modern Loft",
      title: "APARAJITA HOMES",
      description: "Contemporary loft-style home with high ceilings and modern design. Perfect for urban living with style and comfort.",
      heroImage: "https://picsum.photos/1200/800?random=18",
      images: [
        "https://picsum.photos/1200/800?random=18",
        "https://picsum.photos/800/800?random=19",
        "https://picsum.photos/800/800?random=20",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "King-size bed",
        "Open-plan living",
        "Modern kitchen",
        "High-speed WiFi",
        "Smart home system",
        "Air conditioning",
        "City views",
        "Rooftop access",
      ],
      beds: 2,
      baths: 2,
      sqft: 1200,
      location: "VIJAYAWADA",
    },
    {
      id: "beach-house",
      name: "Beach House",
      title: "KING WOOD",
      description: "Beautiful beachfront home with stunning ocean views. Wake up to the sound of waves and enjoy direct beach access.",
      heroImage: "https://picsum.photos/1200/800?random=21",
      images: [
        "https://picsum.photos/1200/800?random=21",
        "https://picsum.photos/800/800?random=22",
        "https://picsum.photos/800/800?random=23",
        "https://picsum.photos/800/800?random=24",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Ocean views",
        "Beach access",
        "Full kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Air conditioning",
        "Outdoor deck",
        "BBQ area",
        "Parking",
      ],
      beds: 3,
      baths: 2,
      sqft: 1800,
      location: "THIRUVANANTHAPURAM",
    },
    {
      id: "mountain-retreat",
      name: "Mountain Retreat",
      title: "GODREJ CENTRAL",
      description: "Peaceful mountain home surrounded by nature. Perfect for those seeking tranquility and beautiful natural scenery.",
      heroImage: "https://picsum.photos/1200/800?random=25",
      images: [
        "https://picsum.photos/1200/800?random=25",
        "https://picsum.photos/800/800?random=26",
        "https://picsum.photos/800/800?random=27",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Mountain views",
        "Fireplace",
        "Full kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Heating system",
        "Private balcony",
        "Hiking trails nearby",
        "Parking",
      ],
      beds: 2,
      baths: 2,
      sqft: 1400,
      location: "MUMBAI",
    },
    {
      id: "urban-penthouse",
      name: "Urban Penthouse",
      title: "SAFDARJANG ENCLAVE",
      description: "Luxurious penthouse with panoramic city views. Modern amenities and elegant design in the heart of the city.",
      heroImage: "https://picsum.photos/1200/800?random=28",
      images: [
        "https://picsum.photos/1200/800?random=28",
        "https://picsum.photos/800/800?random=29",
        "https://picsum.photos/800/800?random=30",
        "https://picsum.photos/800/800?random=31",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Panoramic views",
        "Luxury furnishings",
        "Gourmet kitchen",
        "High-speed WiFi",
        "Smart home system",
        "Air conditioning",
        "Private terrace",
        "Concierge service",
        "Parking",
      ],
      beds: 3,
      baths: 3,
      sqft: 2200,
      location: "NEW-DELHI",
    },
    {
      id: "countryside-manor",
      name: "Countryside Manor",
      title: "GODREJ WOODMANE ESTATE",
      description: "Elegant countryside manor with traditional charm and modern comforts. Perfect for large families or events.",
      heroImage: "https://picsum.photos/1200/800?random=32",
      images: [
        "https://picsum.photos/1200/800?random=32",
        "https://picsum.photos/800/800?random=33",
        "https://picsum.photos/800/800?random=34",
        "https://picsum.photos/800/800?random=35",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Multiple bedrooms",
        "Large dining room",
        "Full kitchen",
        "High-speed WiFi",
        "Multiple TVs",
        "Heating & AC",
        "Large garden",
        "Outdoor seating",
        "Parking",
      ],
      beds: 5,
      baths: 4,
      sqft: 3500,
      location: "BENGALURU",
    },
    {
      id: "countryside-manor",
      name: "Countryside Manor",
      title: "GODREJ PALMGROVE",
      description: "Elegant countryside manor with traditional charm and modern comforts. Perfect for large families or events.",
      heroImage: "https://picsum.photos/1200/800?random=32",
      images: [
        "https://picsum.photos/1200/800?random=32",
        "https://picsum.photos/800/800?random=33",
        "https://picsum.photos/800/800?random=34",
        "https://picsum.photos/800/800?random=35",
      ],
      bookingUrl: "https://www.booking.com",
      airbnbUrl: "https://www.airbnb.com",
      amenities: [
        "Multiple bedrooms",
        "Large dining room",
        "Full kitchen",
        "High-speed WiFi",
        "Multiple TVs",
        "Heating & AC",
        "Large garden",
        "Outdoor seating",
        "Parking",
      ],
      beds: 5,
      baths: 4,
      sqft: 3500,
      location: "CHENNAI",
    }
  ] as Property[],
};
