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