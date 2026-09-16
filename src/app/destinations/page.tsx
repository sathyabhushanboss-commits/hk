import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { destinations } from "@/data/destinations";
import { WhatsAppLink } from "@/components/UI";
import { whatsappMessages } from "@/data/business";

export const metadata: Metadata = {
  title: "Destinations — Mysore, Dandeli, Wayanad, Gokarna & More",
  description:
    "Explore popular destinations from Bengaluru with H K Tours & Travels including Mysore, KRS, Srirangapatna, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna, Nanjangud and Chikkaballapur.",
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="The road is calling."
        image="/images/wayanad.png"
      />

      {/* Destinations */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Heading */}
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-burgundy">
                Explore South India
              </p>

              <h2 className="font-display text-3xl text-burgundy-dark md:text-4xl">
                Destinations worth discovering.
              </h2>

              <p className="mt-4 text-sm leading-7 text-burgundy-dark/65 md:text-base">
                From heritage cities and spiritual destinations to beaches,
                forests and the Western Ghats, travel comfortably from
                Bengaluru with H K Tours & Travels.
              </p>
            </div>
          </Reveal>

          {/* Destination Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal
                key={d.slug}
                delay={(i % 3) * 0.08}
              >
                <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={d.image}
                      alt={`${d.name} destination`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="font-display text-xl text-burgundy-dark">
                      {d.name}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-burgundy-dark/65">
                      {d.description}
                    </p>

                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-burgundy-dark/40">
                      <span className="font-semibold">
                        Best for:
                      </span>{" "}
                      {d.bestFor}
                    </p>

                    {/* CTA */}
                    <div className="mt-5">
                      <WhatsAppLink
                        message={whatsappMessages.destination(d.name)}
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-burgundy hover:underline"
                      >
                        Plan This Trip
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
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