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
  { src: "/images/gallery/gallery-13.webp", category: "Vehicles", alt: "Luxury coach on the highway" },
  { src: "/images/gallery/gallery-16.webp", category: "Vehicles", alt: "Premium Urbania van" },
  { src: "/images/gallery/gallery-22.webp", category: "Destinations", alt: "Mysore heritage site" },
  { src: "/images/gallery/gallery-25.webp", category: "Destinations", alt: "Dandeli forest landscape" },
  { src: "/images/gallery/gallery-27.webp", category: "Travel Experiences", alt: "Open highway journey" },
  { src: "/images/gallery/gallery-37.webp", category: "Corporate", alt: "Corporate travel group" },
  { src: "/images/gallery/gallery-01.webp", category: "Weddings", alt: "Wedding transportation" },
  { src: "/images/gallery/gallery-02.webp", category: "Destinations", alt: "Wayanad hills" },
  { src: "/images/gallery/gallery-04.webp", category: "Vehicles", alt: "Large group coach" },
  { src: "/images/gallery/gallery-06.webp", category: "Travel Experiences", alt: "Family road trip" },
  { src: "/images/gallery/gallery-10.webp", category: "Destinations", alt: "Chikkamagaluru coffee estate" },
  { src: "/images/gallery/gallery-12.webp", category: "Destinations", alt: "Gokarna coastline" },
];

const categories = ["All", "Vehicles", "Tours", "Destinations", "Travel Experiences", "Corporate", "Weddings"];

// one spring recipe reused everywhere so every bounce in the grid feels
// like the same physical material — snappy, a little overshoot, settles fast
const bounce = { type: "spring", stiffness: 420, damping: 22, mass: 0.7 } as const;
const bounceSoft = { type: "spring", stiffness: 260, damping: 20, mass: 0.9 } as const;

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
          <motion.button
            key={c}
            onClick={() => setFilter(c)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            transition={bounce}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              filter === c
                ? "border-gold bg-gold text-burgundy-dark"
                : "border-burgundy/20 text-burgundy-dark/70 hover:border-gold"
            }`}
          >
            {c}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.button
              key={item.src + i}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ ...bounceSoft, delay: (i % 6) * 0.04 }}
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => openAt(i)}
              className="group relative block w-full overflow-hidden rounded-xl focus-gold"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.12 }}
                transition={bounce}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          >
            <motion.button
              onClick={close}
              aria-label="Close"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              transition={bounce}
              className="absolute right-6 top-6 text-cream hover:text-gold"
            >
              <X size={28} />
            </motion.button>
            <motion.button
              onClick={prev}
              aria-label="Previous image"
              whileHover={{ scale: 1.2, x: -4 }}
              whileTap={{ scale: 0.85 }}
              transition={bounce}
              className="absolute left-4 text-cream hover:text-gold sm:left-8"
            >
              <ChevronLeft size={32} />
            </motion.button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={bounceSoft}
              className="relative h-[70vh] w-full max-w-3xl"
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.button
              onClick={next}
              aria-label="Next image"
              whileHover={{ scale: 1.2, x: 4 }}
              whileTap={{ scale: 0.85 }}
              transition={bounce}
              className="absolute right-4 text-cream hover:text-gold sm:right-8"
            >
              <ChevronRight size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}