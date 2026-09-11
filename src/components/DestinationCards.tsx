"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import Reveal from "@/components/Reveal";

// Featured subset with intentional asymmetrical sizing, magazine style.
const featured = destinations.slice(0, 5);
const sizes = [
  "lg:col-span-7 lg:row-span-2 h-[420px]",
  "lg:col-span-5 h-[260px]",
  "lg:col-span-5 h-[260px]",
  "lg:col-span-4 h-[300px]",
  "lg:col-span-8 h-[300px]",
];

export default function DestinationCards() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-12">
          {featured.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05} className={sizes[i]}>
              <Link
                href="/destinations"
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/85 via-deep-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-cream sm:text-3xl">{d.name}</h3>
                  <p className="mt-1 max-w-xs text-xs text-cream/70">{d.bestFor}</p>
                  <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    Plan This Trip
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
