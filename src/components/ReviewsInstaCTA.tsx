"use client";

import Image from "next/image";
import { Star, Instagram as InstagramIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionLabel, PrimaryButton, CallButton } from "@/components/UI";
import { business } from "@/data/business";

const instaImages = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=80",
];

export function ReviewsSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <SectionLabel>Google Reviews</SectionLabel>
          <h2 className="font-display text-3xl text-burgundy-dark sm:text-4xl">
            Trusted by travellers across Bengaluru.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="font-display text-5xl text-burgundy-dark">{business.rating}</span>
            <div className="text-left">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-burgundy-dark/60">{business.reviewCount} Google Reviews</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-md text-sm text-burgundy-dark/60">
            Real reviews from our Google Business Profile will appear here. Visit our profile to
            read verified customer feedback.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="bg-burgundy-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-10 text-center">
          <SectionLabel>Follow The Journey</SectionLabel>
          <h2 className="font-display text-3xl text-cream sm:text-4xl">Follow the journey.</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instaImages.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image src={src} alt="H K Tours & Travels on Instagram" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-deep-black/0 text-cream opacity-0 transition-all group-hover:bg-deep-black/50 group-hover:opacity-100">
                  <InstagramIcon size={22} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-8 text-center">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-widest text-gold hover:underline"
          >
            View on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-deep-black">
      <Image
        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80"
        alt="Open road ahead"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-burgundy-dark/75" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl text-cream sm:text-5xl lg:text-6xl">
          Ready to go further?
        </h2>
        <p className="mt-4 text-cream/80">
          Your next journey starts with the right vehicle.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/contact">Plan Your Journey</PrimaryButton>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
