import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { WhatsAppLink } from "@/components/UI";

export const metadata: Metadata = {
  title: "Tour Packages — Karnataka & South India | H K Tours & Travels",
  description:
    "Explore tour packages from Bengaluru to Mysore, KRS, Srirangapatna, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna, Nanjangud and Chikkaballapur with H K Tours & Travels.",
};

const tours = [
  {
    name: "Mysore, KRS & Srirangapatna",
    description:
      "A heritage circuit covering Mysore Palace, KRS and the historic town of Srirangapatna.",
    idealFor: "Families, heritage groups",
    duration: "1–2 days",
    vehicles: "Crysta, Urbania, 33/40 Seater",
    image: "/images/mysore.png",
  },
  {
    name: "Dandeli Adventure",
    description:
      "A forested Western Ghats getaway known for its rivers, wildlife and adventure activities.",
    idealFor: "Adventure groups, friends",
    duration: "2–3 days",
    vehicles: "Urbania, 33 Seater, Volvo",
    image: "/images/dandeli.png",
  },
  {
    name: "Wayanad Getaway",
    description:
      "A refreshing journey through the hills, forests and plantations of Wayanad.",
    idealFor: "Families, nature lovers",
    duration: "2–3 days",
    vehicles: "Crysta, Urbania, 40 Seater",
    image: "/images/wayanad.png",
  },
  {
    name: "Udupi Coastal Trip",
    description:
      "Experience famous temples, beautiful beaches and coastal Karnataka cuisine.",
    idealFor: "Pilgrimage groups, families",
    duration: "2 days",
    vehicles: "Urbania, Volvo, 45 Seater",
    image: "/images/udupi.png",
  },
  {
    name: "Sringeri & Chikkamagaluru",
    description:
      "A peaceful combination of Sringeri's spiritual heritage and Chikkamagaluru's coffee country.",
    idealFor: "Small groups, weekend trips",
    duration: "2–3 days",
    vehicles: "Crysta, Urbania, 33 Seater",
    image: "/images/sringeri.png",
  },
  {
    name: "Gokarna Beach Trip",
    description:
      "A relaxing coastal getaway featuring beautiful beaches, temples and scenic surroundings.",
    idealFor: "Small groups, friends",
    duration: "2–3 days",
    vehicles: "Urbania, 33/40 Seater",
    image: "/images/gokarna.png",
  },
  {
    name: "Nanjangud & Chikkaballapur",
    description:
      "Convenient pilgrimage and hill-side trips from Bengaluru, ideal for short getaways.",
    idealFor: "Day-trip groups",
    duration: "1 day",
    vehicles: "Crysta, Urbania",
    image: "/images/nanjangud.png",
  },
];

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Go further."
        image="/images/image.png"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Section Heading */}
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy">
                Explore South India
              </p>

              <h2 className="font-display text-3xl text-burgundy-dark md:text-4xl">
                Travel beyond the ordinary.
              </h2>

              <p className="mt-4 text-sm leading-7 text-burgundy-dark/65 md:text-base">
                Discover carefully planned journeys across Karnataka and
                South India with comfortable vehicles, experienced drivers
                and flexible travel options.
              </p>
            </div>
          </Reveal>

          {/* Tour Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 3) * 0.08}
              >
                <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={`${t.name} tour package`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Duration */}
                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-burgundy-dark backdrop-blur-sm">
                      {t.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="font-display text-xl text-burgundy-dark">
                      {t.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-burgundy-dark/65">
                      {t.description}
                    </p>

                    {/* Details */}
                    <dl className="mt-5 space-y-2 text-xs text-burgundy-dark/55">

                      <div>
                        <dt className="inline font-semibold text-burgundy-dark/80">
                          Ideal for:{" "}
                        </dt>
                        <dd className="inline">
                          {t.idealFor}
                        </dd>
                      </div>

                      <div>
                        <dt className="inline font-semibold text-burgundy-dark/80">
                          Duration:{" "}
                        </dt>
                        <dd className="inline">
                          {t.duration}
                        </dd>
                      </div>

                      <div>
                        <dt className="inline font-semibold text-burgundy-dark/80">
                          Vehicles:{" "}
                        </dt>
                        <dd className="inline">
                          {t.vehicles}
                        </dd>
                      </div>

                    </dl>

                    {/* WhatsApp CTA */}
                    <div className="mt-6">
                      <WhatsAppLink
                        message={`Hello H K Tours & Travels,

I would like a custom quote for the ${t.name} package.

Travel Date:
Travellers:
Pickup Location:

Please share the available vehicle options and package details.`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-burgundy px-5 py-3 text-xs font-semibold text-cream transition-colors duration-300 hover:bg-maroon"
                      >
                        Get a Custom Quote
                      </WhatsAppLink>
                    </div>

                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}