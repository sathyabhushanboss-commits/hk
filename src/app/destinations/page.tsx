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
    "Outstation destinations served by H K Tours & Travels: Mysore, KRS, Srirangapatna, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna, Nanjangud and Chikkaballapur.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="The road is calling."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-burgundy-dark">{d.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-burgundy-dark/65">
                      {d.description}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-burgundy-dark/40">
                      Best for: {d.bestFor}
                    </p>
                    <div className="mt-4">
                      <WhatsAppLink
                        message={whatsappMessages.destination(d.name)}
                        className="text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
                      >
                        Plan This Trip →
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
