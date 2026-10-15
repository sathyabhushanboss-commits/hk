import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { WhatsAppLink, SectionLabel, PrimaryButton, CallButton } from "@/components/UI";
import { pageMeta } from "@/lib/seo";
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

export const metadata: Metadata = pageMeta({
  title: "Bus & Van Hire Services, Bangalore",
  description:
    "Corporate employee transport, wedding guest transport, group tours, airport transfers, Urbania rental and luxury bus hire in Bengaluru with professional drivers.",
  path: "/services",
  image: "/images/fleet/ac-50-seater2.webp",
});

const icons: Record<string, LucideIcon> = {
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

const steps = [
  { n: "01", title: "Share your plan", text: "Tell us the date, group size, pickup point and destination — by call, WhatsApp or the enquiry form." },
  { n: "02", title: "Get a clear quote", text: "We suggest the best-fit vehicle and send a quotation with inclusions spelled out." },
  { n: "03", title: "Confirm & relax", text: "Confirm your booking. Driver and vehicle details are shared before the trip." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Travel, your way."
        subtitle="Transport services for every kind of group journey from Bengaluru."
        image="/images/fleet/ac-50-seater2.webp"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Reveal className="mb-12 max-w-3xl">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-display text-3xl leading-tight text-burgundy-dark sm:text-4xl">
              Bus, van and car rental services in Bangalore
            </h2>
            <p className="mt-4 text-base leading-relaxed text-burgundy-dark/70">
              Every service comes with a professional driver, a vehicle suited to your group, and one
              team to coordinate with. Tap any service to enquire on WhatsApp.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[s.slug] ?? Route;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                  <article
                    id={s.slug}
                    className="flex h-full scroll-mt-28 flex-col rounded-2xl border border-burgundy/10 bg-white p-6 sm:p-8"
                  >
                    <Icon size={26} className="mb-4 text-gold" aria-hidden="true" />
                    <h3 className="font-display text-xl text-burgundy-dark">{s.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-burgundy-dark/75">
                      {s.description}
                    </p>
                    {s.details && (
                      <p className="mt-3 text-sm leading-relaxed text-burgundy-dark/60">{s.details}</p>
                    )}
                    {s.vehicles && (
                      <p className="mt-4 text-xs text-burgundy-dark/55">
                        <span className="font-semibold uppercase tracking-wider text-burgundy-dark/70">
                          Vehicles:{" "}
                        </span>
                        {s.vehicles}
                      </p>
                    )}
                    <div className="mt-auto pt-5">
                      <WhatsAppLink
                        message={`Hello H K Tours & Travels,\n\nI would like to enquire about ${s.title}.\n\nPlease share options and quotation.`}
                        className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold hover:underline"
                      >
                        Enquire on WhatsApp →
                      </WhatsAppLink>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-burgundy-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Reveal className="mb-12">
            <SectionLabel>How Booking Works</SectionLabel>
            <h2 className="font-display text-3xl text-cream sm:text-4xl">Three simple steps.</h2>
          </Reveal>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <li className="list-none rounded-2xl border border-gold/20 bg-maroon/20 p-6 sm:p-8">
                  <span className="font-display text-4xl text-gold">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
            <CallButton />
          </div>
        </div>
      </section>
    </>
  );
}
