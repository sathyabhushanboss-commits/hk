import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BrandStory from "@/components/BrandStory";
import ServicesScroll from "@/components/ServicesScroll";
import FleetPreview from "@/components/FleetPreview";
import DestinationStory from "@/components/DestinationStory";
import DestinationCards from "@/components/DestinationCards";
import WhyHK from "@/components/WhyHK";
import FAQSection from "@/components/FAQSection";
import { FinalCTA } from "@/components/ReviewsInstaCTA";
import { SectionLabel, PrimaryButton } from "@/components/UI";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Bus & Urbania Rental in Bangalore",
    description:
      "Rent Volvo buses, 33–50 seater coaches, Urbania & Crysta with drivers in Bengaluru for corporate, wedding, group and outstation trips. Call 093421 59337.",
    path: "/",
    keywords: [
      "bus rental Bangalore",
      "tempo traveller Bangalore",
      "Urbania rental Bangalore",
      "Volvo bus hire Bangalore",
      "wedding bus Bangalore",
      "corporate bus rental Bengaluru",
      "outstation cab Bangalore",
    ],
  }),
  // homepage uses the full title, not the "%s | brand" template
  title: { absolute: "Bus & Urbania Rental Bangalore | H K Tours and Travels" },
};

const highlights = [
  { value: "10+", label: "Vehicle types, 4 to 50 seats" },
  { value: "4.7★", label: "Rated by 40 Google reviewers" },
  { value: "4–50", label: "Seats — cars, vans & coaches" },
  { value: "11+", label: "Popular routes from Bengaluru" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandStory />

      {/* SEO intro — what we do, in plain words */}
      <section className="bg-cream pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10">
          <div>
            <SectionLabel>Group Travel Specialists in Bengaluru</SectionLabel>
            <h2 className="font-display text-3xl leading-tight text-burgundy-dark sm:text-4xl">
              The right vehicle for every group, every route.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-burgundy-dark/75">
              <p>
                H K Tours &amp; Travels is a Bengaluru-based transport company offering{" "}
                <Link href="/fleet" className="font-semibold text-burgundy underline-offset-4 hover:underline">
                  bus, coach, tempo traveller and car rentals
                </Link>{" "}
                with experienced, professional drivers. Whether you are moving 4 guests from the airport
                or 50 delegates to an offsite, we match the vehicle to your group size, route and budget.
              </p>
              <p>
                Our fleet covers Toyota Innova Crysta, Force Urbania, 33, 40 and 45 seater buses, AC and
                non-AC 50 seaters, and Volvo and Volvo Multi-Axle coaches for long-distance comfort. We
                handle{" "}
                <Link href="/services#corporate-travel" className="font-semibold text-burgundy hover:underline">
                  corporate employee transport
                </Link>
                ,{" "}
                <Link href="/services#wedding-transportation" className="font-semibold text-burgundy hover:underline">
                  wedding guest transport
                </Link>
                , school and college trips, pilgrimages and{" "}
                <Link href="/tours" className="font-semibold text-burgundy hover:underline">
                  outstation tour packages
                </Link>{" "}
                to Mysore, Coorg, Wayanad, Chikkamagaluru, Udupi, Gokarna and beyond.
              </p>
              <p>
                Share your date, group size and route on call or WhatsApp and we will suggest the
                best-fit vehicle with a clear quotation — and stay reachable from pickup to drop.
              </p>
            </div>
            <div className="mt-8">
              <PrimaryButton href="/contact">Get a Free Quote</PrimaryButton>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 self-center">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-burgundy/10 bg-white p-5 sm:p-6">
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-3xl text-burgundy sm:text-4xl">{h.value}</dd>
                <dd className="mt-2 text-xs leading-snug text-burgundy-dark/60 sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ServicesScroll />

      {/* Fleet slider */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Our Fleet</SectionLabel>
              <h2 className="font-display text-3xl leading-tight text-burgundy-dark sm:text-4xl lg:text-5xl">
                From 4 seats to 50.
              </h2>
            </div>
            <Link
              href="/fleet"
              className="text-sm font-semibold uppercase tracking-widest text-burgundy hover:text-gold"
            >
              View all vehicles →
            </Link>
          </div>
          <FleetPreview />
        </div>
      </section>

      <DestinationStory />
      <DestinationCards />
      <WhyHK />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
