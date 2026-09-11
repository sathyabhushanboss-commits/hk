"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  src: string;
  category: string;
  alt: string;
}

const items: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80", category: "Vehicles", alt: "Luxury coach on the highway" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80", category: "Vehicles", alt: "Premium Urbania van" },
  { src: "https://images.unsplash.com/photo-1600100736537-2f1a3b3e9b0d?auto=format&fit=crop&w=1000&q=80", category: "Destinations", alt: "Mysore heritage site" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80", category: "Destinations", alt: "Dandeli forest landscape" },
  { src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80", category: "Travel Experiences", alt: "Open highway journey" },
  { src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80", category: "Corporate", alt: "Corporate travel group" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", category: "Weddings", alt: "Wedding transportation" },
  { src: "https://images.unsplash.com/photo-1580289142485-08fa2b76ce7f?auto=format&fit=crop&w=1000&q=80", category: "Destinations", alt: "Wayanad hills" },
  { src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=80", category: "Vehicles", alt: "Large group coach" },
  { src: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=1000&q=80", category: "Travel Experiences", alt: "Family road trip" },
  { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80", category: "Destinations", alt: "Chikkamagaluru coffee estate" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80", category: "Destinations", alt: "Gokarna coastline" },
];

const categories = ["All", "Vehicles", "Tours", "Destinations", "Travel Experiences", "Corporate", "Weddings"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              filter === c
                ? "border-gold bg-gold text-burgundy-dark"
                : "border-burgundy/20 text-burgundy-dark/70 hover:border-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {filtered.map((item, i) => (
          <button
            key={item.src + i}
            onClick={() => openAt(i)}
            className="group relative block w-full overflow-hidden rounded-xl focus-gold"
            style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 text-cream hover:text-gold"
            >
              <X size={28} />
            </button>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 text-cream hover:text-gold sm:left-8"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[70vh] w-full max-w-3xl"
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 text-cream hover:text-gold sm:right-8"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
