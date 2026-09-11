import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import Reveal from "@/components/Reveal";
import { SectionLabel, CallButton, WhatsAppLink } from "@/components/UI";
import { business, whatsappMessages } from "@/data/business";
import { Phone, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Contact H K Tours and Travels in Bengaluru for corporate travel, wedding transportation, group tours and outstation journeys. Call, WhatsApp or request a custom quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's plan your journey."
        image="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
          <Reveal>
            <SectionLabel>H K Tours and Travels</SectionLabel>
            <h2 className="font-display text-2xl text-burgundy-dark sm:text-3xl">
              Get in touch
            </h2>

            <div className="mt-6 space-y-6 text-sm text-burgundy-dark/75">
              <a
                href={`tel:${business.phoneDial}`}
                className="flex items-start gap-3 hover:text-burgundy"
              >
                <Phone size={18} className="mt-0.5 text-gold" />
                {business.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
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
