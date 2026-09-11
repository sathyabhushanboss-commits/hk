export interface Service {
  slug: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    description:
      "Reliable transportation for corporate events, meetings, employee travel and conferences.",
  },
  {
    slug: "wedding-transportation",
    title: "Wedding Transportation",
    description:
      "Premium vehicles for wedding guest transport, baraat routes and grand arrivals.",
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    description:
      "Comfortable, well-organised transport for group tours of any size.",
  },
  {
    slug: "family-trips",
    title: "Family Trips",
    description:
      "Safe and comfortable vehicles for family vacations and outings.",
  },
  {
    slug: "outstation-travel",
    title: "Outstation Travel",
    description:
      "Dependable long-distance travel to destinations across Karnataka and beyond.",
  },
  {
    slug: "vehicle-rentals",
    title: "Vehicle Rentals",
    description:
      "A range of vehicles available for rental, from sedans to large coaches.",
  },
  {
    slug: "luxury-bus-rentals",
    title: "Luxury Bus Rentals",
    description:
      "Premium coach rentals for large groups seeking comfort on the road.",
  },
  {
    slug: "tempo-traveller-urbania-rentals",
    title: "Tempo Traveller / Urbania Rentals",
    description:
      "Mid-size vehicles ideal for small groups and family travel.",
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description: "Timely, comfortable transfers to and from the airport.",
  },
  {
    slug: "custom-tour-planning",
    title: "Custom Tour Planning",
    description:
      "Tailored itineraries and vehicle recommendations built around your group's needs.",
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
