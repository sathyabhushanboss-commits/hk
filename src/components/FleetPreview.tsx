"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Vehicle = {
  name: string;
  category: string;
  image: string;
};

const fleet: Vehicle[] = [
  {
    name: "Toyota Crysta",
    category: "Luxury Cars",
    image: "/images/fleet/crysta1.png",
  },
  {
    name: "Force Urbania",
    category: "Premium Vans",
    image: "/images/fleet/urbania1.png",
  },
  {
    name: "33 Seater Bus",
    category: "Tourist Buses",
    image: "/images/fleet/33-seater1.jpg",
  },
  {
    name: "40 Seater Bus",
    category: "Tourist Buses",
    image: "/images/fleet/40-seater1.jpg",
  },
  {
    name: "45 Seater Bus",
    category: "Tourist Buses",
    image: "/images/fleet/45-seater1.jpg",
  },
  {
    name: "Volvo Bus",
    category: "Volvo Coaches",
    image: "/images/fleet/volvo1.jpg",
  },
  {
    name: "Volvo Multi-Axle",
    category: "Volvo Coaches",
    image: "/images/fleet/volvo-multi-axle1.jpg",
  },
  {
    name: "Non-AC 50 Seater",
    category: "Large Group Transportation",
    image: "/images/fleet/non-ac-50-seater1.jpg",
  },
  {
    name: "Azad 2",
    category: "Large Group Transportation",
    image: "/images/fleet/azad-2-1.jpg",
  },
  {
    name: "AC 50 Seater",
    category: "Large Group Transportation",
    image: "/images/fleet/ac-50-seater1.jpg",
  },
];

export default function FleetViewer() {
  const [vehicleIndex, setVehicleIndex] = useState(0);

  const vehicle = fleet[vehicleIndex];

  // Automatic vehicle change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleIndex((prev) => (prev + 1) % fleet.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const previousVehicle = () => {
    setVehicleIndex(
      (prev) => (prev - 1 + fleet.length) % fleet.length
    );
  };

  const nextVehicle = () => {
    setVehicleIndex((prev) => (prev + 1) % fleet.length);
  };

  return (
    <div className="w-full">

      {/* Main Viewer */}
      <div className="relative overflow-hidden rounded-3xl bg-[#102B2A]">

        <div className="relative aspect-[16/10] w-full">

          {/* Vehicle Image - Only First Image */}
          <Image
            key={vehicleIndex}
            src={vehicle.image}
            alt={vehicle.name}
            fill
            priority={vehicleIndex === 0}
            className="object-cover transition-opacity duration-700"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Category */}
          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md md:left-8 md:top-8">
            {vehicle.category}
          </div>

          {/* Vehicle Details */}
          <div className="absolute bottom-6 left-5 right-5 text-white md:bottom-10 md:left-10">

            <div className="mb-3 h-[2px] w-16 bg-[#D4A017]" />

            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#D4A017]">
              Travel in Comfort
            </p>

            <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {vehicle.name}
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/80 md:text-base">
              Comfortable vehicles for airport transfers, business travel,
              family trips, and group journeys.
            </p>

          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 right-5 flex gap-2 md:bottom-10 md:right-10">

            <button
              onClick={previousVehicle}
              aria-label="Previous vehicle"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              ←
            </button>

            <button
              onClick={nextVehicle}
              aria-label="Next vehicle"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              →
            </button>

          </div>

        </div>

      </div>

      {/* Vehicle Indicators */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">

        {fleet.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setVehicleIndex(index)}
            aria-label={`Select ${item.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              vehicleIndex === index
                ? "w-10 bg-[#D4A017]"
                : "w-2 bg-[#D4A017]/30"
            }`}
          />
        ))}

      </div>

      {/* Counter */}
      <div className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-gray-500">
        {String(vehicleIndex + 1).padStart(2, "0")} /{" "}
        {String(fleet.length).padStart(2, "0")}
      </div>

    </div>
  );
}