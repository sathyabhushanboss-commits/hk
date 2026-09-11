"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { fleet } from "@/data/fleet";
import { buildWhatsAppUrl, whatsappMessages } from "@/data/business";

export default function FleetViewer() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    travellers: "",
    pickup: "",
    destination: "",
  });

  const vehicle = fleet[index];
  const next = () => setIndex((i) => (i + 1) % fleet.length);
  const prev = () => setIndex((i) => (i - 1 + fleet.length) % fleet.length);

  const message = whatsappMessages
    .fleet(vehicle.name)
    .replace("Travel Date:", `Travel Date: ${form.date}`)
    .replace("Travellers:", `Travellers: ${form.travellers}`)
    .replace("Pickup:", `Pickup: ${form.pickup}`)
    .replace("Destination:", `Destination: ${form.destination}`);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-deep-black">
      <div className="relative h-[420px] sm:h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={vehicle.slug}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
          <div className="h-px w-14 bg-gold" />
          <AnimatePresence mode="wait">
            <motion.div
              key={vehicle.slug + "-text"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mt-3"
            >
              <h3 className="font-display text-3xl text-cream sm:text-5xl">{vehicle.name}</h3>
              <p className="mt-2 text-sm text-gold sm:text-base">{vehicle.tagline}</p>
              <p className="mt-1 text-xs text-cream/60 sm:text-sm">{vehicle.idealFor}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 w-fit rounded-full bg-gold px-6 py-3 text-sm font-semibold text-burgundy-dark transition-transform hover:scale-105 focus-gold"
          >
            Enquire For This Vehicle
          </button>
        </div>

        <button
          onClick={prev}
          aria-label="Previous vehicle"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-cream/30 bg-black/30 p-2 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold focus-gold sm:left-6"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Next vehicle"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-cream/30 bg-black/30 p-2 text-cream backdrop-blur transition-colors hover:border-gold hover:text-gold focus-gold sm:right-6"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex justify-center gap-2 border-t border-gold/10 bg-deep-black py-4">
        {fleet.map((v, i) => (
          <button
            key={v.slug}
            onClick={() => setIndex(i)}
            aria-label={`View ${v.name}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/30"
            }`}
          />
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-md rounded-2xl border border-gold/30 bg-burgundy-dark p-8 text-cream"
            >
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-cream/70 hover:text-gold"
              >
                <X size={22} />
              </button>
              <h4 className="font-display text-xl">Enquire: {vehicle.name}</h4>
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(buildWhatsAppUrl(message), "_blank");
                }}
              >
                <input
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                />
                <input
                  required
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Travel Date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                  />
                  <input
                    placeholder="Travellers"
                    value={form.travellers}
                    onChange={(e) => setForm({ ...form, travellers: e.target.value })}
                    className="rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                  />
                </div>
                <input
                  placeholder="Pickup Location"
                  value={form.pickup}
                  onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                  className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                />
                <input
                  placeholder="Destination"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-burgundy-dark"
                >
                  Check Availability
                </button>
                <a
                  href={buildWhatsAppUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-gold/60 py-3 text-center text-sm font-semibold text-gold"
                >
                  WhatsApp
                </a>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
