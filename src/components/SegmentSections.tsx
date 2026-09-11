"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GoldDivider, PrimaryButton } from "@/components/UI";

function Segment({
  image,
  eyebrow,
  headline,
  description,
  ctaLabel,
  ctaHref,
  reverse = false,
}: {
  image: string;
  eyebrow: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[380px]">
        <Image src={image} alt={eyebrow} fill className="object-cover" />
      </Reveal>
      <Reveal delay={0.1}>
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
        <h3 className="font-display text-3xl leading-tight text-cream sm:text-4xl">{headline}</h3>
        <GoldDivider className="my-6" />
        <p className="max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
          {description}
        </p>
        <div className="mt-8">
          <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
        </div>
      </Reveal>
    </div>
  );
}

export default function SegmentSections() {
  return (
    <section className="space-y-24 bg-deep-black py-24 lg:space-y-32 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Segment
          eyebrow="Corporate Travel"
          headline="Business travel, without the business of travel."
          description="Reliable and comfortable transportation for corporate events, meetings, employee travel, conferences and business groups."
          ctaLabel="Plan Corporate Travel"
          ctaHref="/services#corporate-travel"
          image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Segment
          eyebrow="Wedding Transport"
          headline="Every guest deserves a grand arrival."
          description="Premium cars, Urbania, luxury buses and group transportation for weddings and celebrations of every size."
          ctaLabel="Plan Wedding Transport"
          ctaHref="/services#wedding-transportation"
          image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
          reverse
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Segment
          eyebrow="Outstation Journeys"
          headline="Leave the city behind."
          description="Your road. Your people. Your journey. Comfortable long-distance travel to Mysore, Dandeli, Wayanad, Udupi, Sringeri, Chikkamagaluru, Gokarna and beyond."
          ctaLabel="Plan Outstation Trip"
          ctaHref="/destinations"
          image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
        />
      </div>
    </section>
  );
}
