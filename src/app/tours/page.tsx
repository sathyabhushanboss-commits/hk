import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsAppLink } from "@/components/UI";

export const metadata: Metadata = {
  title: "Tour Packages — Karnataka & South India",
  description:
    "Custom tour packages to Mysore, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna, Nanjangud and Chikkaballapur, with vehicle options to suit any group size.",
};

const tours = [
  {
    name: "Mysore, KRS & Srirangapatna",
    description: "A heritage circuit covering the Mysore Palace, KRS dam and Srirangapatna fort.",
    idealFor: "Families, heritage groups",
    duration: "1–2 days",
    vehicles: "Crysta, Urbania, 33/40 Seater",
    image: "https://images.unsplash.com/photo-1600100736537-2f1a3b3e9b0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dandeli Adventure",
    description: "A forested Western Ghats getaway known for its rivers and wildlife.",
    idealFor: "Adventure groups, friends",
    duration: "2–3 days",
    vehicles: "Urbania, 33 Seater, Volvo",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wayanad Getaway",
    description: "Rolling hills and plantations across the Kerala border.",
    idealFor: "Families, nature lovers",
    duration: "2–3 days",
    vehicles: "Crysta, Urbania, 40 Seater",
    image: "https://images.unsplash.com/photo-1580289142485-08fa2b76ce7f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Udupi Coastal Trip",
    description: "Temple visits and coastal cuisine on Karnataka's western coast.",
    idealFor: "Pilgrimage groups, families",
    duration: "2 days",
    vehicles: "Urbania, Volvo, 45 Seater",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sringeri & Chikkamagaluru",
    description: "Quiet temple town and coffee-estate country in the Western Ghats.",
    idealFor: "Small groups, weekend trips",
    duration: "2–3 days",
    vehicles: "Crysta, Urbania, 33 Seater",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Gokarna Beach Trip",
    description: "A quieter coastal getaway with beaches and temples.",
    idealFor: "Small groups, friends",
    duration: "2–3 days",
    vehicles: "Urbania, 33/40 Seater",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nanjangud & Chikkaballapur",
    description: "Short pilgrimage and hill-side day trips close to Bengaluru.",
    idealFor: "Day-trip groups",
    duration: "1 day",
    vehicles: "Crysta, Urbania",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Go further."
        image="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-white">
                  <div className="relative h-48">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-burgundy-dark">{t.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-burgundy-dark/65">
                      {t.description}
                    </p>
                    <dl className="mt-4 space-y-1 text-xs text-burgundy-dark/50">
                      <div><dt className="inline font-semibold">Ideal for: </dt><dd className="inline">{t.idealFor}</dd></div>
                      <div><dt className="inline font-semibold">Suggested duration: </dt><dd className="inline">{t.duration}</dd></div>
                      <div><dt className="inline font-semibold">Vehicle options: </dt><dd className="inline">{t.vehicles}</dd></div>
                    </dl>
                    <div className="mt-5">
                      <WhatsAppLink
                        message={`Hello H K Tours & Travels,\n\nI would like a custom quote for the ${t.name} package.\n\nTravel Date:\nTravellers:\nPickup:\n\nPlease share options.`}
                        className="inline-flex rounded-full bg-burgundy px-5 py-2.5 text-xs font-semibold text-cream hover:bg-maroon"
                      >
                        Get a Custom Quote
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
