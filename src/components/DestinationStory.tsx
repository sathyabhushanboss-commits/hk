"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { SectionLabel } from "@/components/UI";

export default function DestinationStory() {
  const [active, setActive] = useState(0);
  const dest = destinations[active];

  return (
    <section className="relative overflow-hidden bg-deep-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Where Will You Go?</SectionLabel>
        <h2 className="mb-10 font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
          Where will you go?
        </h2>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 h-1 w-full bg-cream/10">
              <motion.div
                className="h-1 bg-gold"
                animate={{ width: `${((active + 1) / destinations.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={dest.slug + "-text"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-4xl text-cream sm:text-5xl">{dest.name}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
                  {dest.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-gold">
                  Best for: {dest.bestFor}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2">
              {destinations.map((d, i) => (
                <button
                  key={d.slug}
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                    i === active
                      ? "border-gold bg-gold text-burgundy-dark"
                      : "border-cream/20 text-cream/70 hover:border-gold/60"
                  }`}
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
