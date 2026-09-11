import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FleetViewer from "@/components/FleetViewer";
import { fleet } from "@/data/fleet";
import { WhatsAppLink } from "@/components/UI";
import { whatsappMessages } from "@/data/business";

export const metadata: Metadata = {
  title: "Fleet — Luxury Buses, Urbania, Volvo & More",
  description:
    "Explore the H K Tours & Travels fleet: Toyota Crysta, Urbania, 33/40/45 seater coaches, Volvo, Volvo Multi-Axle, AC and Non-AC 50 seater buses for group travel in Bengaluru.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Choose your ride."
        subtitle="From premium cars to large luxury coaches, travel together in comfort."
        image="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <FleetViewer />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((v, i) => (
              <Reveal key={v.slug} delay={(i % 3) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-burgundy/10 bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-burgundy-dark">{v.name}</h3>
                    <p className="mt-1 text-sm text-burgundy-dark/60">{v.tagline}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-burgundy-dark/40">
                      Ideal for: {v.idealFor}
                    </p>
                    <div className="mt-4">
                      <WhatsAppLink
                        message={whatsappMessages.fleet(v.name)}
                        className="inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-maroon"
                      >
                        Enquire
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
