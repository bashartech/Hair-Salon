import { ServiceItem, PricingPlan, TestimonialItem, GalleryPhoto } from '../types';

import heroImg from '../assets/images/hero_master_barber_1791296790923.jpg';
import aboutImg from '../assets/images/about_craftsman_barber_1791296809393.jpg';
import beardServiceImg from '../assets/images/service_beard_grooming_1791296826426.jpg';
import interiorImg from '../assets/images/salon_interior_luxury_1791296843908.jpg';
import precisionCutImg from '../assets/images/gallery_precision_cut_1791296858154.jpg';

export const ASSETS = {
  hero: heroImg,
  about: aboutImg,
  serviceBeard: beardServiceImg,
  interior: interiorImg,
  precisionCut: precisionCutImg,
};

export const SALON_INFO = {
  name: "VALENTI",
  fullName: "VALENTI Atelier Grooming & Barber",
  tagline: "Where Refinement Meets Confidence",
  established: "2014",
  phone: "+92 300 1234567",
  whatsappNumber: "923001234567",
  email: "concierge@valenti-atelier.com",
  address: "Suite 14, The Grand Arcade, Embassy Boulevard",
  city: "Downtown District",
  hours: {
    weekdays: "10:00 AM – 10:00 PM",
    sunday: "12:00 PM – 8:00 PM"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "classic-cut",
    number: "01",
    title: "Classic Atelier Cut",
    category: "cuts",
    description: "Architectural precision cut tailored to your facial symmetry, hairline, and daily styling lifestyle.",
    price: 35,
    duration: "45 min",
    includes: ["Consultation & structural analysis", "Shampoo & clarifying rinse", "Matte pomade styling finish"],
    popular: true,
  },
  {
    id: "skin-fade",
    number: "02",
    title: "Razor Skin Fade",
    category: "cuts",
    description: "Surgical low, mid, or high fade with seamless foil transitions, crisp temples, and clean perimeter edge-up.",
    price: 40,
    duration: "50 min",
    includes: ["Zero-gap taper blend", "Hot lather foil neckline finish", "Scalp cooling tonic"],
    image: precisionCutImg,
    popular: true,
  },
  {
    id: "beard-sculpting",
    number: "03",
    title: "Beard Sculpting & Contour",
    category: "beard",
    description: "Master freehand beard shaping, neck straight-razor detailing, and cold-pressed botanical oil steam finish.",
    price: 30,
    duration: "35 min",
    includes: ["Symmetric length tapering", "Japanese straight razor line-up", "Organic cedarwood balm"],
    image: beardServiceImg,
  },
  {
    id: "hair-and-beard",
    number: "04",
    title: "The Executive Hair & Beard",
    category: "rituals",
    description: "Our harmonious dual grooming session. A full master cut combined with bespoke beard sculpting.",
    price: 65,
    duration: "75 min",
    includes: ["Signature haircut & edge", "Complete beard architecture", "Dual warm towel compress"],
    popular: true,
  },
  {
    id: "scalp-styling",
    number: "05",
    title: "Scalp Therapy & Restyle",
    category: "cuts",
    description: "Deep clarifying scalp detox, pressure point stimulation, and bespoke styling for events or everyday impact.",
    price: 35,
    duration: "40 min",
    includes: ["Tea tree exfoliation scrub", "Acupressure temple massage", "Tailored styling session"],
  },
  {
    id: "signature-ritual",
    number: "06",
    title: "The Valenti Signature Ritual",
    category: "rituals",
    description: "The definitive gentleman ritual: precision haircut, straight-razor hot lather shave, facial steam, and massage.",
    price: 95,
    duration: "90 min",
    includes: ["Master haircut of choice", "3-step hot towel straight shave", "Herbal steam & facial recovery", "Single malt whiskey or espresso"],
    popular: true,
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "essential",
    name: "THE ESSENTIAL",
    subtitle: "Regular maintenance for the modern gentleman",
    price: 35,
    duration: "45 mins",
    recommendedFor: "Bi-weekly upkeep",
    features: [
      "Consultation & bone structure analysis",
      "Precision scissor or fade cut",
      "Herbal shampoo & clarifying rinse",
      "Neck straight razor clean-up",
      "Custom matte clay or cream styling",
      "Hot botanical neck towel"
    ]
  },
  {
    id: "signature",
    name: "THE SIGNATURE",
    subtitle: "Our most requested comprehensive transformation",
    price: 55,
    duration: "70 mins",
    isPopular: true,
    recommendedFor: "Signature monthly standard",
    features: [
      "Master tailored haircut & razor taper",
      "Artisanal beard sculpting & razor line",
      "Invigorating tea tree scalp wash",
      "Dual steaming hot herbal towels",
      "Cold-pressed organic beard elixir",
      "Bespoke event-ready styling finish",
      "Complimentary espresso or cold craft brew"
    ]
  },
  {
    id: "atelier-complete",
    name: "THE ATELIER COMPLETE",
    subtitle: "The non-compromise luxury sanctuary experience",
    price: 85,
    duration: "95 mins",
    recommendedFor: "Milestones, events & complete recharge",
    features: [
      "Senior Master Barber dedicated session",
      "Bespoke haircut & surgical taper",
      "Full 3-step hot lather straight razor shave",
      "Aromatherapy facial steam & cold compress",
      "Deep acupressure scalp & neck massage",
      "Full beard restoration & balm treatment",
      "Private grooming suite & premium beverage"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Daniel Rothstein",
    title: "Managing Director, Sovereign Equity",
    quote: "The best grooming experience I have encountered in London or New York. The precision on the taper is surgical, and the atmosphere feels like an exclusive private club rather than a busy salon.",
    rating: 5,
    service: "The Signature Experience",
    date: "Regular Client · 3 Years",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-2",
    name: "Ahmed Al-Mansoor",
    title: "Creative Director & Architect",
    quote: "Valenti understands proportion and face geometry at a level most barbers never study. You don't just leave with a haircut; you leave with an elevated posture. Truly second to none.",
    rating: 5,
    service: "The Executive Hair & Beard",
    date: "Regular Client · 2 Years",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-3",
    name: "James Montgomery",
    title: "Private Wealth Consultant",
    quote: "Every single visit feels like a ritual of mindfulness and precision. From the warm cedarwood towels to the straight-razor finish, the craftsmanship speaks for itself.",
    rating: 5,
    service: "The Valenti Signature Ritual",
    date: "Regular Client · 4 Years",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  }
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Surgical Skin Fade & Texture",
    category: "cuts",
    tag: "Taper & Fade",
    imageUrl: precisionCutImg,
    span: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    id: "gal-2",
    title: "Master Barbering Craftsmanship",
    category: "atelier",
    tag: "Artisan Heritage",
    imageUrl: heroImg,
    span: "col-span-12 md:col-span-6 lg:col-span-8",
  },
  {
    id: "gal-3",
    title: "Hot Towel Beard Detailing",
    category: "beard",
    tag: "Beard Architecture",
    imageUrl: beardServiceImg,
    span: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    id: "gal-4",
    title: "Private Atelier Grooming Suite",
    category: "atelier",
    tag: "Atmosphere",
    imageUrl: interiorImg,
    span: "col-span-12 md:col-span-6 lg:col-span-6",
  },
  {
    id: "gal-5",
    title: "Straight Razor Mastery",
    category: "atelier",
    tag: "Precision Tools",
    imageUrl: aboutImg,
    span: "col-span-12 md:col-span-12 lg:col-span-12",
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Facial Architecture",
    description: "We don't use standard clipper guards blindly. Every line, taper, and part is calibrated to your bone structure, jawline, and natural crown growth."
  },
  {
    number: "02",
    title: "Master Guild Artisans",
    description: "Our resident barbers average over a decade of high-end European grooming experience, mastering both classic scissor-over-comb and modern surgical fades."
  },
  {
    number: "03",
    title: "Private Club Sanctuary",
    description: "Spacious private stations, acoustic tranquility, bespoke leather seating, and complimentary single malt or pour-over espresso during your appointment."
  },
  {
    number: "04",
    title: "Apothecary Grade Care",
    description: "Every tonic, shave oil, pomade, and conditioning wash is formulated with pure cold-pressed botanicals, cedarwood, and sandalwood extracts."
  }
];
