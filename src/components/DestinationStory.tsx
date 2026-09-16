"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import { SectionLabel } from "@/components/UI";

const SLIDE_MS = 3000;

export default function DestinationStory() {
  const [active, setActive] = useState(0);
  const dest = destinations[active];

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % destinations.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-deep-black">
      {/* full-bleed cinematic frame */}
      <div className="relative h-[62vh] min-h-[440px] w-full sm:h-[74vh]">
        <AnimatePresence mode="sync">
          <motion.div
            key={dest.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* slow continuous Ken Burns drift, independent of the dissolve */}
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.16 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.1, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/35 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* story-style progress segments */}
        <div className="absolute left-6 right-6 top-6 z-20 flex gap-1.5 sm:left-10 sm:right-10">
          {destinations.map((d, i) => (
            <div key={d.slug} className="h-[3px] flex-1 overflow-hidden rounded-full bg-cream/25">
              {i === active && (
                <motion.div
                  key={dest.slug}
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                />
              )}
              {i < active && <div className="h-full w-full bg-gold/70" />}
            </div>
          ))}
        </div>

        <div className="absolute left-6 top-14 z-20 sm:left-10 sm:top-16">
          <SectionLabel>Where Will You Go?</SectionLabel>
        </div>

        {/* text overlay, bottom-anchored */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 sm:px-10 sm:pb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={dest.slug + "-text"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-xl"
            >
              <h3 className="font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
                {dest.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
                {dest.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-gold">
                Best for: {dest.bestFor}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}