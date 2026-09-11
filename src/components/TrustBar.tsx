"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ShieldCheck, Users, Award } from "lucide-react";
import { business } from "@/data/business";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf: number;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setValue(Math.round(progress * target * 10) / 10);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const items = [
  { icon: ShieldCheck, label: "Safety-Focused Travel" },
  { icon: Users, label: "Professional Chauffeurs" },
  { icon: Award, label: "Premium Fleet" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const rating = useCountUp(business.rating, inView);

  return (
    <section ref={ref} className="border-y border-gold/15 bg-deep-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl text-gold">{rating.toFixed(1)}</span>
          <div>
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs text-cream/60">{business.reviewCount} Google Reviews</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-cream/80">
              <Icon size={18} className="text-gold" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
