import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import Reveal from "@/components/Reveal";
import { SectionLabel, CallButton, WhatsAppLink } from "@/components/UI";
import { business, whatsappMessages } from "@/data/business";
import { Phone, MapPin, Star, Mail, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us & Book a Vehicle",
  description:
    "Book a bus, Volvo, Urbania or Crysta in Bengaluru. Call 093421 59337, WhatsApp or email H K Tours and Travels for a quick quote. Vinayakanagara West, Bengaluru 560091.",
  path: "/contact",
  image: "/images/fleet/volvo-multi-axle2.webp",
});

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name}, ${business.addressSingleLine}`
)}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's plan your journey."
        subtitle="Call, WhatsApp, email or send your trip details below — we reply quickly."
        image="/images/fleet/volvo-multi-axle2.webp"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
          <Reveal>
            <SectionLabel>H K Tours and Travels</SectionLabel>
            <h2 className="font-display text-2xl text-burgundy-dark sm:text-3xl">
              Get in touch
            </h2>

            <div className="mt-6 space-y-6 text-sm text-burgundy-dark/75">
              <a
                href={`tel:${business.phoneIntl}`}
                className="flex items-start gap-3 font-semibold hover:text-burgundy"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-start gap-3 break-all font-semibold hover:text-burgundy"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                {business.email}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-burgundy"
              >
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold" />
                <address className="not-italic">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-gold">
                    Open in Google Maps →
                  </span>
                </address>
              </a>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>Enquiries on call &amp; WhatsApp — we respond as quickly as we can.</span>
              </div>
              <div className="flex items-start gap-3">
                <Star size={18} className="mt-0.5 text-gold" fill="currentColor" strokeWidth={0} />
                <span>
                  {business.rating} / 5 · {business.reviewCount} Google Reviews
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <CallButton />
              <WhatsAppLink message={whatsappMessages.general}>WhatsApp Us</WhatsAppLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
