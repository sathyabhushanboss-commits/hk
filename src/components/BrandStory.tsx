"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoldDivider, SectionLabel } from "@/components/UI";

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const lines = [
    "H K Tours & Travels brings together premium vehicles,",
    "professional service and carefully planned journeys to make",
    "group travel comfortable, reliable and memorable.",
  ];

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[440px]">
          <motion.div style={{ y }} className="absolute inset-[-8%]">
            <Image
              src="/images/fleet/urbania2.webp"
              alt="H K Tours and Travels Force Urbania fleet in Bengaluru"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div>
          <SectionLabel>More Than a Ride</SectionLabel>
          <h2 className="font-display text-3xl leading-tight text-burgundy-dark sm:text-4xl lg:text-5xl">
            More than a ride.
          </h2>
          <GoldDivider className="my-6" />
          <p className="max-w-md text-base leading-relaxed text-burgundy-dark/80 sm:text-lg">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="inline"
              >
                {line}{" "}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
