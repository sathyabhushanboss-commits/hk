"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Users } from "lucide-react";
import { business, buildWhatsAppUrl, whatsappMessages } from "@/data/business";

/* =========================================================
   FLEET DATA — every vehicle has exactly 4 images
========================================================= */

export const fleetVehicles = [
  {
    name: "Toyota Innova Crysta",
    slug: "crysta",
    category: "Premium Car",
    seats: "6–7 passengers",
    tagline: "Premium comfort for family and executive travel",
    description:
      "The go-to choice for small families, airport transfers and executive travel. Captain-style seating, strong AC and a smooth highway ride make long outstation drives effortless.",
    idealFor: "Families, airport transfers, corporate travel & outstation trips",
    images: ["/images/fleet/crysta1.webp", "/images/fleet/crysta2.webp", "/images/fleet/crysta3.webp", "/images/fleet/crysta4.webp"],
  },
  {
    name: "Force Urbania",
    slug: "urbania",
    category: "Luxury Van",
    seats: "Up to 17 passengers",
    tagline: "Premium luxury van for group travel",
    description:
      "A modern alternative to the regular tempo traveller — individual reclining seats, generous legroom, roof-mounted AC vents and a quiet cabin for mid-size groups.",
    idealFor: "Family trips, corporate travel, wedding guests & group tours",
    images: ["/images/fleet/urbania1.webp", "/images/fleet/urbania2.webp", "/images/fleet/urbania3.webp", "/images/fleet/urbania4.webp"],
  },
  {
    name: "33 Seater Bus",
    slug: "33-seater",
    category: "Mini Coach",
    seats: "33 passengers",
    tagline: "Comfortable transportation for medium groups",
    description:
      "Compact enough for city roads and temple towns, roomy enough for a full team or extended family, with pushback seats and space for luggage.",
    idealFor: "Tours, school trips, events & corporate groups",
    images: ["/images/fleet/33-seater1.webp", "/images/fleet/33-seater2.webp", "/images/fleet/33-seater3.webp", "/images/fleet/33-seater4.webp"],
  },
  {
    name: "40 Seater Bus",
    slug: "40-seater",
    category: "Coach",
    seats: "40 passengers",
    tagline: "Spacious and comfortable group transportation",
    description:
      "A versatile mid-size coach for pilgrimages, office outings and wedding guest movement, with comfortable seating for longer journeys.",
    idealFor: "Tours, events, pilgrimages & group travel",
    images: ["/images/fleet/40-seater1.webp", "/images/fleet/40-seater2.webp", "/images/fleet/40-seater3.webp", "/images/fleet/40-seater4.webp"],
  },
  {
    name: "45 Seater Bus",
    slug: "45-seater",
    category: "Coach",
    seats: "45 passengers",
    tagline: "Reliable large-group transportation",
    description:
      "Built for big groups heading outstation — college tours, corporate offsites and family functions — with ample cabin space and luggage capacity.",
    idealFor: "Tours, corporate groups, events & outstation travel",
    images: ["/images/fleet/45-seater1.webp", "/images/fleet/45-seater2.webp", "/images/fleet/45-seater3.webp", "/images/fleet/45-seater4.webp"],
  },
  {
    name: "Volvo Bus",
    slug: "volvo",
    category: "Luxury Coach",
    seats: "Large groups",
    tagline: "Premium luxury coach for long journeys",
    description:
      "Volvo comfort for premium tours and long-distance travel: a smooth ride, pushback seats, powerful AC and large under-floor luggage bays.",
    idealFor: "Premium tours, corporate travel & long-distance journeys",
    images: ["/images/fleet/volvo1.webp", "/images/fleet/volvo2.webp", "/images/fleet/volvo3.webp", "/images/fleet/volvo4.webp"],
  },
  {
    name: "Volvo Multi-Axle",
    slug: "volvo-multi-axle",
    category: "Luxury Coach",
    seats: "Large groups",
    tagline: "Luxury multi-axle coach for premium travel",
    description:
      "Our flagship coach. The extra axle gives exceptional stability at highway speeds — ideal for overnight journeys, destination weddings and VIP group travel.",
    idealFor: "Large groups, premium tours & long-distance travel",
    images: ["/images/fleet/volvo-multi-axle1.webp", "/images/fleet/volvo-multi-axle2.webp", "/images/fleet/volvo-multi-axle3.webp", "/images/fleet/volvo-multi-axle4.webp"],
  },
  {
    name: "Non-AC 50 Seater",
    slug: "non-ac-50-seater",
    category: "Bus",
    seats: "50 passengers",
    tagline: "Economical transportation for large groups",
    description:
      "The most budget-friendly way to move a large group. Ideal for school trips, pilgrimages and short-to-medium distance travel.",
    idealFor: "School trips, events, pilgrimages & budget tours",
    images: ["/images/fleet/non-ac-50-seater1.webp", "/images/fleet/non-ac-50-seater2.webp", "/images/fleet/non-ac-50-seater3.webp", "/images/fleet/non-ac-50-seater4.webp"],
  },
  {
    name: "Azad Coach",
    slug: "azad",
    category: "Bus",
    seats: "Large groups",
    tagline: "Comfortable and dependable group travel",
    description:
      "A modern Azad-bodied coach with recliner seating and a refined interior — a comfortable, dependable pick for tours and events.",
    idealFor: "Tours, events, family trips & group transportation",
    images: ["/images/fleet/azad-2-1.webp", "/images/fleet/azad-2-2.webp", "/images/fleet/azad-2-3.webp", "/images/fleet/azad-2-4.webp"],
  },
  {
    name: "AC 50 Seater",
    slug: "ac-50-seater",
    category: "Bus",
    seats: "50 passengers",
    tagline: "Air-conditioned travel for large groups",
    description:
      "Full-size air-conditioned coach for big groups that want comfort without compromise — popular for corporate events, weddings and multi-day tours.",
    idealFor: "Tours, corporate trips, events & long journeys",
    images: ["/images/fleet/ac-50-seater1.webp", "/images/fleet/ac-50-seater2.webp", "/images/fleet/ac-50-seater3.webp", "/images/fleet/ac-50-seater4.webp"],
  },
];

/* =========================================================
   VEHICLE GALLERY — each gallery keeps its own active image
========================================================= */

function VehicleGallery({ images, vehicleName }: { images: string[]; vehicleName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => setActiveIndex((c) => (c + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, [images.length, paused]);

  const nextImage = () => setActiveIndex((c) => (c + 1) % images.length);
  const previousImage = () => setActiveIndex((c) => (c - 1 + images.length) % images.length);

  const thumbnails = images.map((image, index) => ({ image, index })).filter((t) => t.index !== activeIndex);

  return (
    <div className="w-full min-w-0" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="group relative overflow-hidden rounded-[22px] bg-black shadow-xl sm:rounded-[26px]">
        <div className="relative aspect-[16/10] w-full bg-burgundy-dark">
          {/* all 4 photos are stacked and cross-faded, so switching never flashes black */}
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === activeIndex ? `${vehicleName} — photo ${i + 1} of ${images.length}` : ""}
              aria-hidden={i !== activeIndex}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={70}
              className={`object-cover transition-all duration-700 group-hover:scale-[1.02] ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <button
          type="button"
          onClick={previousImage}
          aria-label={`Previous ${vehicleName} image`}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-burgundy-dark shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white sm:left-4 sm:h-11 sm:w-11"
        >
          <ChevronLeft size={21} />
        </button>
        <button
          type="button"
          onClick={nextImage}
          aria-label={`Next ${vehicleName} image`}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-burgundy-dark shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white sm:right-4 sm:h-11 sm:w-11"
        >
          <ChevronRight size={21} />
        </button>

        <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white sm:bottom-4 sm:right-4 sm:px-4 sm:py-2">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
        {thumbnails.map((item) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActiveIndex(item.index)}
            aria-label={`View ${vehicleName} image ${item.index + 1}`}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm sm:rounded-2xl"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 33vw, 16vw"
                quality={60}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${vehicleName} image ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-7 bg-burgundy" : "w-2 bg-burgundy/20 hover:bg-burgundy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE BODY
========================================================= */

export default function FleetShowcase() {
  return (
    <div className="min-h-screen bg-cream">
      {/* HERO */}
      <section className="relative overflow-hidden bg-burgundy-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/fleet/crysta1.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark via-burgundy-dark/90 to-burgundy-dark/50" />

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-5 pb-16 pt-28 sm:min-h-[470px] sm:px-6 sm:py-20 sm:pt-32 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">H K Tours &amp; Travels</p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-6xl lg:text-7xl">
              Our fleet — choose your ride.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-cream/75 sm:text-lg sm:leading-8">
              From the Toyota Innova Crysta and Force Urbania to Volvo coaches and 50 seater buses — every
              vehicle comes with a professional driver.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-burgundy-dark transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <MessageCircle size={18} /> Enquire Now
              </a>
              <a
                href={`tel:${business.phoneIntl}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:bg-cream hover:text-burgundy-dark"
              >
                <Phone size={18} /> Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK JUMP */}
      <nav aria-label="Vehicles" className="border-b border-burgundy/10 bg-white">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 sm:px-6 lg:px-10">
          {fleetVehicles.map((v) => (
            <li key={v.slug}>
              <a
                href={`#${v.slug}`}
                className="inline-block rounded-full border border-burgundy/15 px-3 py-1.5 text-xs font-semibold text-burgundy transition hover:border-burgundy hover:bg-burgundy hover:text-cream"
              >
                {v.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* FLEET */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-burgundy">Vehicles for every journey</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-burgundy-dark sm:text-5xl">
              Cars, vans, buses &amp; Volvo coaches for hire in Bangalore.
            </h2>
            <p className="mt-5 text-base leading-7 text-burgundy-dark/65">
              Explore our range of premium cars, luxury vans, buses and coaches for local travel, corporate
              transportation, tours, events and outstation journeys. Not sure which one fits? Tell us your group
              size and route and we&apos;ll recommend the right vehicle.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-24">
            {fleetVehicles.map((vehicle, index) => (
              <article
                key={vehicle.slug}
                id={vehicle.slug}
                className="scroll-mt-28 border-b border-burgundy/10 pb-20 last:border-b-0 sm:pb-24"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <VehicleGallery images={vehicle.images} vehicleName={vehicle.name} />

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-burgundy">{vehicle.category}</p>
                    <h2 className="mt-4 font-display text-3xl leading-tight text-burgundy-dark sm:text-5xl">
                      {vehicle.name}
                    </h2>
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-burgundy/5 px-3 py-1 text-xs font-semibold text-burgundy">
                      <Users size={14} /> {vehicle.seats}
                    </p>
                    <p className="mt-4 text-lg font-medium text-burgundy-dark/75">{vehicle.tagline}</p>
                    <p className="mt-4 text-base leading-7 text-burgundy-dark/65">{vehicle.description}</p>

                    <div className="mt-7 rounded-2xl border border-burgundy/10 bg-white p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-dark/50">Ideal For</p>
                      <p className="mt-2 text-sm leading-6 text-burgundy-dark/75">{vehicle.idealFor}</p>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href={buildWhatsAppUrl(whatsappMessages.fleet(vehicle.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-maroon"
                      >
                        <MessageCircle size={18} /> Enquire Now
                      </a>
                      <a
                        href={`tel:${business.phoneIntl}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-burgundy/20 px-7 py-3.5 text-sm font-bold text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-cream"
                      >
                        <Phone size={18} /> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-burgundy-dark py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">H K Tours &amp; Travels</p>
          <h2 className="mt-4 font-display text-3xl text-cream sm:text-5xl">Planning your next journey?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cream/70">
            Tell us your destination, travel date and group size. We will help you choose the right vehicle for
            your journey.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-burgundy-dark transition-all hover:-translate-y-1 hover:bg-yellow-400"
            >
              <MessageCircle size={19} /> WhatsApp Us
            </a>
            <a
              href={`tel:${business.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm font-bold text-cream transition-all hover:bg-cream hover:text-burgundy-dark"
            >
              <Phone size={18} /> {business.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
