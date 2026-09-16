export interface Destination {
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    slug: "mysore",
    name: "Mysore",
    description:
      "The city of palaces, known for its royal heritage, gardens and the illuminated Mysore Palace.",
    bestFor: "Family trips, heritage tours",
    image: "/images/mysore.png",
  },

  {
    slug: "krs",
    name: "KRS",
    description:
      "The Krishna Raja Sagara dam and Brindavan Gardens, a favourite family day-trip destination.",
    bestFor: "Family outings, day trips",
    image: "/images/krs.png",
  },

  {
    slug: "srirangapatna",
    name: "Srirangapatna",
    description:
      "A historic island town on the Kaveri river, home to Tipu Sultan's fort and summer palace.",
    bestFor: "Heritage and history tours",
    image: "/images/srirangapatna.png",
  },

  {
    slug: "dandeli",
    name: "Dandeli",
    description:
      "A forested getaway in the Western Ghats known for its rivers and wildlife.",
    bestFor: "Adventure groups, weekend getaways",
    image: "/images/dandeli.png",
  },

  {
    slug: "wayanad",
    name: "Wayanad",
    description:
      "Rolling hills, misty valleys and plantations across the Kerala border.",
    bestFor: "Nature lovers, family trips",
    image: "/images/wayanad.png",
  },

  {
    slug: "udupi",
    name: "Udupi",
    description:
      "A temple town on the coast, known for its cuisine and nearby beaches.",
    bestFor: "Temple visits, coastal getaways",
    image: "/images/udupi.png",
  },

  {
    slug: "sringeri",
    name: "Sringeri",
    description:
      "A serene temple town on the banks of the Tunga river in the Western Ghats.",
    bestFor: "Pilgrimage and quiet retreats",
    image: "/images/sringeri.png",
  },

  {
    slug: "chikkamagaluru",
    name: "Chikkamagaluru",
    description:
      "Coffee country in the Western Ghats, with rolling estates and hill views.",
    bestFor: "Weekend getaways, group tours",
    image: "/images/chikkamangaluru.png",
  },

  {
    slug: "gokarna",
    name: "Gokarna",
    description:
      "A quieter coastal town on Karnataka's coastline with beaches and temples.",
    bestFor: "Beach trips, small group travel",
    image: "/images/gokarna.png",
  },

  {
    slug: "nanjangud",
    name: "Nanjangud",
    description:
      "A temple town near Mysore known for the Srikanteshwara Temple.",
    bestFor: "Pilgrimage trips",
    image: "/images/nanjangud.png",
  },

  {
    slug: "chikkaballapur",
    name: "Chikkaballapur",
    description:
      "Hills and heritage sites close to Bengaluru, ideal for short trips.",
    bestFor: "Day trips, short getaways",
    image: "/images/chikkabalapura.png",
  },
];