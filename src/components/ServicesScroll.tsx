"use client";

import Link from "next/link";
import { homeServices } from "@/data/services";
import { SectionLabel } from "@/components/UI";

const images = [
  "/images/hk1.png",
  "/images/hk2.png",
  "/images/hk3.png",
  "/images/hk4.png",
];

export default function ServicesScroll() {
  const cards = [...homeServices, ...homeServices]; // duplicate for seamless loop

  return (
    <section className="relative overflow-hidden bg-burgundy-dark py-16 sm:py-20">
      <div className="mx-auto mb-8 w-full max-w-7xl px-6 lg:px-10">
        <SectionLabel>Travel, Your Way</SectionLabel>
        <h2 className="font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
          Travel, your way.
        </h2>
      </div>

      <div
        className="marquee-mask overflow-hidden"
        style={{ width: "100%" }}
      >
        <div
          className="marquee-track flex"
          style={{ gap: "clamp(1rem, 3vw, 1.5rem)" }}
        >
          {cards.map((service, i) => (
            <Link
              href={`/services#${service.slug}`}
              key={`${service.slug}-${i}`}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
              style={{
                width: "clamp(220px, 60vw, 340px)",
                height: "clamp(300px, 55vh, 440px)",
                backgroundColor: "#2a1015",
                backgroundImage: `url(${images[i % images.length]})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent transition-opacity group-hover:from-deep-black/95" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl text-cream">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}