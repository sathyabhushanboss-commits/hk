export interface FleetVehicle {
  slug: string;
  name: string;
  tagline: string;
  idealFor: string;
  image: string;
}

export const fleet: FleetVehicle[] = [
  {
    slug: "toyota-crysta",
    name: "Toyota Innova Crysta",
    tagline: "Comfortable Small-Group Travel",
    idealFor: "Small families, airport transfers, business trips",
    image: "/images/fleet/crysta1.webp",
  },
  {
    slug: "urbania",
    name: "Force Urbania",
    tagline: "Premium Mid-Size Group Travel",
    idealFor: "Corporate groups, weddings, mid-size outings",
    image: "/images/fleet/urbania1.webp",
  },
  {
    slug: "33-seater",
    name: "33 Seater",
    tagline: "Comfortable Group Journeys",
    idealFor: "Small group tours and outstation trips",
    image: "/images/fleet/33-seater1.webp",
  },
  {
    slug: "40-seater",
    name: "40 Seater",
    tagline: "Spacious Group Transportation",
    idealFor: "Corporate events and family group tours",
    image: "/images/fleet/40-seater1.webp",
  },
  {
    slug: "45-seater",
    name: "45 Seater",
    tagline: "Large Group Comfort",
    idealFor: "Large corporate groups and school/college tours",
    image: "/images/fleet/45-seater1.webp",
  },
  {
    slug: "volvo",
    name: "Volvo",
    tagline: "Premium Group Travel",
    idealFor: "Long-distance outstation journeys in comfort",
    image: "/images/fleet/volvo1.webp",
  },
  {
    slug: "volvo-multi-axle",
    name: "Volvo Multi-Axle",
    tagline: "Premium Long-Distance Coach",
    idealFor: "Extended outstation and multi-day journeys",
    image: "/images/fleet/volvo-multi-axle1.webp",
  },
  {
    slug: "non-ac-50-seater",
    name: "Non-AC 50 Seater",
    tagline: "Practical Large-Group Transport",
    idealFor: "Budget-conscious large group travel",
    image: "/images/fleet/non-ac-50-seater1.webp",
  },
  {
    slug: "azad",
    name: "Azad",
    tagline: "Reliable Group Travel",
    idealFor: "Group tours and outstation travel",
    image: "/images/fleet/azad-2-1.webp",
  },
  {
    slug: "ac-50-seater",
    name: "AC 50 Seater",
    tagline: "Comfortable Large-Group Travel",
    idealFor: "Corporate groups, weddings, large tours",
    image: "/images/fleet/ac-50-seater1.webp",
  },
];
