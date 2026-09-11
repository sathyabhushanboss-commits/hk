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
    name: "Toyota Crysta",
    tagline: "Comfortable Small-Group Travel",
    idealFor: "Small families, airport transfers, business trips",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "urbania",
    name: "Urbania",
    tagline: "Premium Mid-Size Group Travel",
    idealFor: "Corporate groups, weddings, mid-size outings",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "33-seater",
    name: "33 Seater",
    tagline: "Comfortable Group Journeys",
    idealFor: "Small group tours and outstation trips",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "40-seater",
    name: "40 Seater",
    tagline: "Spacious Group Transportation",
    idealFor: "Corporate events and family group tours",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "45-seater",
    name: "45 Seater",
    tagline: "Large Group Comfort",
    idealFor: "Large corporate groups and school/college tours",
    image:
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "volvo",
    name: "Volvo",
    tagline: "Premium Group Travel",
    idealFor: "Long-distance outstation journeys in comfort",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "volvo-multi-axle",
    name: "Volvo Multi-Axle",
    tagline: "Premium Long-Distance Coach",
    idealFor: "Extended outstation and multi-day journeys",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "non-ac-50-seater",
    name: "Non-AC 50 Seater",
    tagline: "Practical Large-Group Transport",
    idealFor: "Budget-conscious large group travel",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "azad",
    name: "Azad",
    tagline: "Reliable Group Travel",
    idealFor: "Group tours and outstation travel",
    image:
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ac-50-seater",
    name: "AC 50 Seater",
    tagline: "Comfortable Large-Group Travel",
    idealFor: "Corporate groups, weddings, large tours",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
  },
];
