"use client";

import { SectionLabel } from "@/components/UI";
import FleetViewer from "@/components/FleetViewer";
import Reveal from "@/components/Reveal";
import { PrimaryButton } from "@/components/UI";

export default function FleetPreview() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Choose Your Ride</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl text-burgundy-dark sm:text-4xl lg:text-5xl">
              Choose your ride.
            </h2>
            <p className="max-w-sm text-sm text-burgundy-dark/70">
              From premium cars to large luxury coaches, travel together in comfort.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <FleetViewer />
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <PrimaryButton href="/fleet">View Full Fleet</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
