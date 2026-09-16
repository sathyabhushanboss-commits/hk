"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

/* =========================================================
   BUSINESS DETAILS
========================================================= */

const WHATSAPP = "917349016519";
const PHONE = "+91 73490 16519";

/* =========================================================
   FLEET DATA
   EVERY VEHICLE HAS EXACTLY 4 IMAGES
========================================================= */

const fleet = [
  {
    name: "Toyota Crysta",
    slug: "crysta",
    category: "Premium Car",
    tagline: "Premium comfort for family and executive travel",
    idealFor: "Families, airport transfers, corporate travel & outstation trips",
    images: [
      "/images/fleet/crysta1.png",
      "/images/fleet/crysta2.png",
      "/images/fleet/crysta3.png",
      "/images/fleet/crysta4.png",
    ],
  },

  {
    name: "Force Urbania",
    slug: "urbania",
    category: "Luxury Van",
    tagline: "Premium luxury van for group travel",
    idealFor: "Family trips, corporate travel & group tours",
    images: [
      "/images/fleet/urbania1.png",
      "/images/fleet/urbania2.png",
      "/images/fleet/urbania3.png",
      "/images/fleet/urbania4.png",
    ],
  },

  {
    name: "33 Seater Bus",
    slug: "33-seater",
    category: "Bus",
    tagline: "Comfortable transportation for medium groups",
    idealFor: "Tours, school trips, events & corporate groups",
    images: [
      "/images/fleet/33-seater1.png",
      "/images/fleet/33-seater2.png",
      "/images/fleet/33-seater3.png",
      "/images/fleet/33-seater4.png",
    ],
  },

  {
    name: "40 Seater Bus",
    slug: "40-seater",
    category: "Bus",
    tagline: "Spacious and comfortable group transportation",
    idealFor: "Tours, events, pilgrimages & group travel",
    images: [
      "/images/fleet/40-seater1.png",
      "/images/fleet/40-seater2.png",
      "/images/fleet/40-seater3.png",
      "/images/fleet/40-seater4.png",
    ],
  },

  {
    name: "45 Seater Bus",
    slug: "45-seater",
    category: "Bus",
    tagline: "Reliable large-group transportation",
    idealFor: "Tours, corporate groups, events & outstation travel",
    images: [
      "/images/fleet/45-seater1.png",
      "/images/fleet/45-seater2.png",
      "/images/fleet/45-seater3.png",
      "/images/fleet/45-seater4.png",
    ],
  },

  {
    name: "Volvo Bus",
    slug: "volvo",
    category: "Luxury Coach",
    tagline: "Premium luxury coach for long journeys",
    idealFor: "Premium tours, corporate travel & long-distance journeys",
    images: [
      "/images/fleet/volvo1.png",
      "/images/fleet/volvo2.png",
      "/images/fleet/volvo3.png",
      "/images/fleet/volvo4.png",
    ],
  },

  {
    name: "Volvo Multi-Axle",
    slug: "volvo-multi-axle",
    category: "Luxury Coach",
    tagline: "Luxury multi-axle coach for premium travel",
    idealFor: "Large groups, premium tours & long-distance travel",
    images: [
      "/images/fleet/volvo-multi-axle1.png",
      "/images/fleet/volvo-multi-axle2.png",
      "/images/fleet/volvo-multi-axle3.png",
      "/images/fleet/volvo-multi-axle4.png",
    ],
  },

  {
    name: "Non-AC 50 Seater",
    slug: "non-ac-50-seater",
    category: "Bus",
    tagline: "Economical transportation for large groups",
    idealFor: "School trips, events, pilgrimages & budget tours",
    images: [
      "/images/fleet/non-ac-50-seater1.png",
      "/images/fleet/non-ac-50-seater2.png",
      "/images/fleet/non-ac-50-seater3.png",
      "/images/fleet/non-ac-50-seater4.png",
    ],
  },

  {
    name: "Azad 2",
    slug: "azad-2",
    category: "Bus",
    tagline: "Comfortable and dependable group travel",
    idealFor: "Tours, events, family trips & group transportation",
    images: [
      "/images/fleet/azad-2-1.png",
      "/images/fleet/azad-2-2.png",
      "/images/fleet/azad-2-3.png",
      "/images/fleet/azad-2-4.png",
    ],
  },

  {
    name: "AC 50 Seater",
    slug: "ac-50-seater",
    category: "Bus",
    tagline: "Air-conditioned travel for large groups",
    idealFor: "Tours, corporate trips, events & long journeys",
    images: [
      "/images/fleet/ac-50-seater1.png",
      "/images/fleet/ac-50-seater2.png",
      "/images/fleet/ac-50-seater3.png",
      "/images/fleet/ac-50-seater4.png",
    ],
  },
];

/* =========================================================
   WHATSAPP
========================================================= */

function getWhatsAppLink(vehicle: string) {
  const message =
    `Hi HK Tours & Travels, I am interested in ${vehicle} rental. ` +
    `Please share availability and pricing.`;

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   VEHICLE GALLERY
   Each gallery maintains its own active image.
========================================================= */

function VehicleGallery({
  images,
  vehicleName,
}: {
  images: string[];
  vehicleName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  /* -------------------------------------------------------
     AUTO ROTATE
     Every vehicle rotates independently.
  ------------------------------------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  /* -------------------------------------------------------
     NEXT
  ------------------------------------------------------- */

  const nextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  /* -------------------------------------------------------
     PREVIOUS
  ------------------------------------------------------- */

  const previousImage = () => {
    setActiveIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  /* -------------------------------------------------------
     3 THUMBNAILS
     Active image is excluded.
  ------------------------------------------------------- */

  const thumbnails = images
    .map((image, index) => ({
      image,
      index,
    }))
    .filter((item) => item.index !== activeIndex);

  return (
    <div className="w-full">

      {/* ===================================================
          MAIN IMAGE
      =================================================== */}

      <div className="group relative overflow-hidden rounded-[26px] bg-black shadow-xl">

        <div className="relative aspect-[16/10] w-full">

          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />

        </div>

        {/* DARK GRADIENT */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* PREVIOUS */}

        <button
          type="button"
          onClick={previousImage}
          aria-label={`Previous ${vehicleName} image`}
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-burgundy-dark shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <ChevronLeft size={21} />
        </button>

        {/* NEXT */}

        <button
          type="button"
          onClick={nextImage}
          aria-label={`Next ${vehicleName} image`}
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-burgundy-dark shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <ChevronRight size={21} />
        </button>

        {/* COUNTER */}

        <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {activeIndex + 1} / {images.length}
        </div>

      </div>

      {/* ===================================================
          3 THUMBNAILS
      =================================================== */}

      <div className="mt-3 grid grid-cols-3 gap-3">

        {thumbnails.map((item) => (

          <button
            key={item.image}
            type="button"
            onClick={() => setActiveIndex(item.index)}
            aria-label={`View ${vehicleName} image ${item.index + 1}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm"
          >

            <div className="relative aspect-[16/10] w-full">

              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>

            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

          </button>

        ))}

      </div>

      {/* ===================================================
          DOTS
      =================================================== */}

      <div className="mt-4 flex justify-center gap-2">

        {images.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${vehicleName} image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-7 bg-burgundy"
                : "w-2 bg-burgundy/20 hover:bg-burgundy/40"
            }`}
          />

        ))}

      </div>

    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-burgundy-dark">

        <div className="absolute inset-0">

          <Image
            src="/images/fleet/crysta1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark via-burgundy-dark/90 to-burgundy-dark/50" />

        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-6 py-20 lg:px-10">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">
              HK Tours & Travels
            </p>

            <h1 className="mt-5 font-display text-5xl leading-tight text-cream sm:text-6xl lg:text-7xl">
              Choose your ride.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/75">
              From premium Toyota Crysta and Force Urbania
              to luxury Volvo coaches and large-capacity
              buses, choose the right vehicle for every journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-burgundy-dark transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
              >
                <MessageCircle size={18} />
                Enquire Now
              </a>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:bg-cream hover:text-burgundy-dark"
              >
                Call {PHONE}
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          FLEET
      =================================================== */}

      <section className="bg-cream py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* HEADER */}

          <div className="mb-14 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-burgundy">
              Our Fleet
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-burgundy-dark sm:text-5xl">
              Vehicles for every journey.
            </h2>

            <p className="mt-5 text-base leading-7 text-burgundy-dark/60">
              Explore our range of premium cars, luxury vans,
              buses and coaches for local travel, corporate
              transportation, tours, events and outstation journeys.
            </p>

          </div>

          {/* =================================================
              ALL 10 VEHICLES
          ================================================= */}

          <div className="space-y-24">

            {fleet.map((vehicle, index) => (

              <section
                key={vehicle.slug}
                className="border-b border-burgundy/10 pb-24 last:border-b-0"
              >

                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* =========================================
                      GALLERY
                  ========================================= */}

                  <VehicleGallery
                    images={vehicle.images}
                    vehicleName={vehicle.name}
                  />

                  {/* =========================================
                      CONTENT
                  ========================================= */}

                  <div>

                    {/* CATEGORY */}

                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-burgundy">
                      {vehicle.category}
                    </p>

                    {/* NAME */}

                    <h2 className="mt-4 font-display text-4xl leading-tight text-burgundy-dark sm:text-5xl">
                      {vehicle.name}
                    </h2>

                    {/* TAGLINE */}

                    <p className="mt-4 text-lg font-medium text-burgundy-dark/70">
                      {vehicle.tagline}
                    </p>

                    {/* DESCRIPTION */}

                    <p className="mt-4 text-base leading-7 text-burgundy-dark/60">
                      Comfortable and reliable transportation
                      for your journey with HK Tours & Travels.
                      Choose this vehicle based on your group
                      size, destination and travel requirements.
                    </p>

                    {/* IDEAL FOR */}

                    <div className="mt-7 rounded-2xl border border-burgundy/10 bg-white p-5">

                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-burgundy-dark/40">
                        Ideal For
                      </p>

                      <p className="mt-2 text-sm leading-6 text-burgundy-dark/70">
                        {vehicle.idealFor}
                      </p>

                    </div>

                    {/* CTA */}

                    <div className="mt-7 flex flex-wrap gap-3">

                      <a
                        href={getWhatsAppLink(vehicle.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-maroon"
                      >
                        <MessageCircle size={18} />
                        Enquire Now
                      </a>

                      <a
                        href={`tel:${PHONE.replace(/\s/g, "")}`}
                        className="inline-flex rounded-full border border-burgundy/20 px-7 py-3.5 text-sm font-bold text-burgundy transition-all duration-300 hover:bg-burgundy hover:text-cream"
                      >
                        Call Now
                      </a>

                    </div>

                  </div>

                </div>

              </section>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="bg-burgundy-dark py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            HK Tours & Travels
          </p>

          <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
            Planning your next journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cream/65">
            Tell us your destination, travel date and group
            size. We will help you choose the right vehicle
            for your journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-burgundy-dark transition-all hover:-translate-y-1 hover:bg-yellow-400"
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex rounded-full border border-cream/30 px-8 py-4 text-sm font-bold text-cream transition-all hover:bg-cream hover:text-burgundy-dark"
            >
              {PHONE}
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}