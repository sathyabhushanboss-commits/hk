export interface Service {
  slug: string;
  title: string;
  description: string;
  details?: string;
  vehicles?: string;
}

export const services: Service[] = [
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    description:
      "Reliable transportation for corporate events, meetings, employee travel and conferences.",
    details:
      "Daily employee pick-up and drop, offsites, client visits, conferences and team outings across Bengaluru — Whitefield, Electronic City, Outer Ring Road, Manyata and beyond. We plan routes and timings around your shifts and can provide multiple vehicles for large teams.",
    vehicles: "Toyota Crysta, Force Urbania, 33–50 seater AC buses",
  },
  {
    slug: "wedding-transportation",
    title: "Wedding Transportation",
    description:
      "Premium vehicles for wedding guest transport, baraat routes and grand arrivals.",
    details:
      "Coordinated guest pick-ups from hotels, railway stations and the airport, baraat and reception movements, and decorated cars for the couple. We schedule vehicles to your event timeline so no guest is left waiting.",
    vehicles: "Toyota Crysta, Force Urbania, AC 50 seater, Volvo",
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    description:
      "Comfortable, well-organised transport for group tours of any size.",
    details:
      "School and college excursions, office trips, religious tours and friends’ getaways with a single point of contact. Tell us your itinerary and group size and we will suggest the most comfortable and economical vehicle.",
    vehicles: "33, 40, 45 and 50 seater buses, Volvo coaches",
  },
  {
    slug: "family-trips",
    title: "Family Trips",
    description:
      "Safe and comfortable vehicles for family vacations and outings.",
    details:
      "Weekend drives to Mysore, Ooty or Coorg, temple visits and holiday trips with comfortable seating, ample luggage space and drivers who know the routes and the right places to stop.",
    vehicles: "Toyota Crysta, Force Urbania",
  },
  {
    slug: "outstation-travel",
    title: "Outstation Travel",
    description:
      "Dependable long-distance travel to destinations across Karnataka and beyond.",
    details:
      "One-way and round trips from Bengaluru to destinations across Karnataka, Kerala, Tamil Nadu, Goa and Andhra Pradesh, with experienced highway drivers and clear inclusions in every quote.",
    vehicles: "All vehicles — from Crysta to Volvo Multi-Axle",
  },
  {
    slug: "vehicle-rentals",
    title: "Vehicle Rentals",
    description:
      "A range of vehicles available for rental, from sedans to large coaches.",
    details:
      "Hourly, daily and multi-day rentals with driver for any requirement — local city use, events, shoots or guest movement. Pick the vehicle by group size and we take care of the rest.",
    vehicles: "Cars, vans, buses and coaches",
  },
  {
    slug: "luxury-bus-rentals",
    title: "Luxury Bus Rentals",
    description:
      "Premium coach rentals for large groups seeking comfort on the road.",
    details:
      "Volvo and Volvo Multi-Axle coaches with pushback seats, air-conditioning and large luggage bays for premium long-distance travel, corporate offsites and destination weddings.",
    vehicles: "Volvo, Volvo Multi-Axle, AC 50 seater",
  },
  {
    slug: "tempo-traveller-urbania-rentals",
    title: "Tempo Traveller / Urbania Rentals",
    description:
      "Mid-size vehicles ideal for small groups and family travel.",
    details:
      "Force Urbania with individual reclining seats, AC and generous legroom — a more comfortable alternative to a regular tempo traveller for mid-size groups.",
    vehicles: "Force Urbania",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description: "Timely, comfortable transfers to and from the airport.",
    details:
      "Kempegowda International Airport (BLR) pick-ups and drops with flight-time coordination and space for luggage. Ideal for families, business travellers and arriving wedding guests.",
    vehicles: "Toyota Crysta, Force Urbania",
  },
  {
    slug: "custom-tour-planning",
    title: "Custom Tour Planning",
    description:
      "Tailored itineraries and vehicle recommendations built around your group's needs.",
    details:
      "Not sure where to start? Share your dates, budget and interests and we will suggest a route, stops and the right vehicle — from a one-day temple circuit to a week across South India.",
    vehicles: "Any vehicle, matched to your group",
  },
];

export const homeServices = [
  { number: "01", title: "Corporate Travel", slug: "corporate-travel" },
  { number: "02", title: "Weddings & Events", slug: "wedding-transportation" },
  { number: "03", title: "Group Travel", slug: "group-tours" },
  { number: "04", title: "Outstation Journeys", slug: "outstation-travel" },
  { number: "05", title: "Family Getaways", slug: "family-trips" },
  { number: "06", title: "Custom Travel", slug: "custom-tour-planning" },
];
