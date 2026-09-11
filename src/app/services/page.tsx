import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { WhatsAppLink } from "@/components/UI";
import { whatsappMessages } from "@/data/business";
import {
  Briefcase,
  Heart,
  Users,
  Home,
  MapPinned,
  Car,
  Bus,
  Truck,
  Plane,
  Route,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Corporate, Wedding, Group & Outstation Travel",
  description:
    "Corporate travel, wedding transportation, group tours, family trips, outstation travel, vehicle rentals and airport transfers from H K Tours & Travels, Bengaluru.",
};

const icons: Record<string, any> = {
  "corporate-travel": Briefcase,
  "wedding-transportation": Heart,
  "group-tours": Users,
  "family-trips": Home,
  "outstation-travel": MapPinned,
  "vehicle-rentals": Car,
  "luxury-bus-rentals": Bus,
  "tempo-traveller-urbania-rentals": Truck,
  "airport-transfers": Plane,
  "custom-tour-planning": Route,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Travel, your way."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[s.slug] ?? Route;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                  <div id={s.slug} className="scroll-mt-28 rounded-2xl border border-burgundy/10 bg-white p-8">
                    <Icon size={26} className="mb-4 text-gold" />
                    <h3 className="font-display text-xl text-burgundy-dark">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-burgundy-dark/65">
                      {s.description}
                    </p>
                    <div className="mt-5">
                      <WhatsAppLink
                        message={`Hello H K Tours & Travels,\n\nI would like to enquire about ${s.title}.\n\nPlease share options and quotation.`}
                        className="text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
                      >
                        Enquire →
                      </WhatsAppLink>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
