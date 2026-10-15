"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/UI";

const faqs = [
  {
    q: "How much does it cost to rent a bus in Bangalore?",
    a: "Pricing depends on the vehicle type, distance, duration and travel dates. Share your requirements with us on WhatsApp or the enquiry form and we'll send you a quotation.",
  },
  {
    q: "How can I book a bus in Bangalore?",
    a: "You can book by calling us, messaging on WhatsApp, or filling out the enquiry form on this website with your travel details.",
  },
  {
    q: "Do you provide luxury buses for weddings?",
    a: "Yes, we provide premium cars, Urbania and luxury buses for wedding transportation and guest travel.",
  },
  {
    q: "Do you provide Urbania rental in Bangalore?",
    a: "Yes, Urbania is part of our fleet and is available for corporate, wedding and group travel requirements.",
  },
  {
    q: "Do you provide Volvo buses?",
    a: "Yes, we offer Volvo and Volvo Multi-Axle coaches for premium long-distance and outstation travel.",
  },
  {
    q: "Can I hire a bus with a driver?",
    a: "Yes, all our vehicles are provided with professional chauffeurs.",
  },
  {
    q: "Do you provide outstation transportation?",
    a: "Yes, we provide outstation transportation to destinations including Mysore, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna and more.",
  },
  {
    q: "Can I book transportation for corporate events?",
    a: "Yes, we regularly support corporate events, meetings, conferences and employee transportation.",
  },
  {
    q: "What vehicles are available for large groups?",
    a: "For large groups we offer 40, 45 and 50 seater buses, along with Volvo and Volvo Multi-Axle coaches.",
  },
  {
    q: "Can I request a custom tour package?",
    a: "Yes, share your destination, group size and dates and our team will put together a custom itinerary and vehicle recommendation.",
  },
  {
    q: "How do I get a quotation?",
    a: "Fill out the enquiry form, message us on WhatsApp, or call us directly with your travel details.",
  },
  {
    q: "How can I contact H K Tours & Travels?",
    a: "You can call us at 093421 59337, message us on WhatsApp, or use the contact form on this website.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <h2 className="mb-10 font-display text-3xl text-burgundy-dark sm:text-4xl">
          Common questions.
        </h2>
        <div className="divide-y divide-burgundy/10 border-y border-burgundy/10">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left focus-gold"
                aria-expanded={open === i}
              >
                <span className="font-medium text-burgundy-dark">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-gold transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-burgundy-dark/65">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
