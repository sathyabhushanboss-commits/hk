export const business = {
  name: "H K Tours and Travels",
  shortName: "H K Tours & Travels",
  tagline: "SAFE JOURNEY • HAPPY JOURNEY • MEMORABLE JOURNEY",
  phone: "093421 59337",
  phoneDial: "09342159337",
  phoneIntl: "+919342159337",
  addressLines: [
    "Vinayakanagara West,",
    "38, Andrahalli Main Road,",
    "Opp. Andhra Bank,",
    "D Group Employees Layout,",
    "Bengaluru, Karnataka – 560091",
  ],
  addressSingleLine:
    "Vinayakanagara West, 38, Andrahalli Main Road, Opp. Andhra Bank, D Group Employees Layout, Bengaluru, Karnataka – 560091",
  rating: 4.7,
  reviewCount: 40,
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
};

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.phoneIntl.replace("+", "")}?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "Hello H K Tours & Travels,\n\nI would like to enquire about a trip.\n\nPlease share vehicle options and quotation.",
  fleet: (vehicle: string) =>
    `Hello H K Tours & Travels,\n\nI am interested in hiring the ${vehicle}.\n\nTravel Date:\nTravellers:\nPickup:\nDestination:\n\nPlease share availability and quotation.`,
  destination: (destination: string) =>
    `Hello H K Tours & Travels,\n\nI am planning a trip to ${destination}.\n\nPlease share package and vehicle options.`,
  corporate:
    "Hello H K Tours & Travels,\n\nI need transportation for a corporate requirement.\n\nPlease contact me regarding vehicle options and quotation.",
  wedding:
    "Hello H K Tours & Travels,\n\nI need transportation for a wedding.\n\nPlease share your vehicle options and quotation.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
