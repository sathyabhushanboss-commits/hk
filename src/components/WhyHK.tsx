"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Sofa,
  Clock,
  Users,
  Heart,
  Briefcase,
  MapPinned,
} from "lucide-react";
import { SectionLabel } from "@/components/UI";
import Reveal from "@/components/Reveal";

const features = [
  { icon: Award, label: "Premium Fleet" },
  { icon: Users, label: "Professional Chauffeurs" },
  { icon: Sofa, label: "Comfortable Journeys" },
  { icon: ShieldCheck, label: "Safety-Focused Travel" },
  { icon: Clock, label: "Punctual Service" },
  { icon: MapPinned, label: "Group Travel Expertise" },
  { icon: Heart, label: "Wedding Transport" },
  { icon: Briefcase, label: "Corporate Travel" },
];

export default function WhyHK() {
  return (
    <section className="bg-burgundy-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>The HK Difference</SectionLabel>
          <h2 className="mb-12 font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
            The HK difference.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-px gap-y-12 overflow-visible sm:grid-cols-4 sm:gap-y-16">
          {features.map(({ icon: Icon, label }, i) => {
            // alternate the swing direction so neighbouring cards drop in opposite arcs
            const fromLeft = i % 2 === 0;
            const rotateFrom = fromLeft ? -14 : 14;
            // small per-card variation so the idle sway doesn't look synced/robotic
            const idleAmp = 2.5 + (i % 3) * 0.7;
            const idleDuration = 3.4 + (i % 4) * 0.5;

            return (
              <div key={label} className="relative flex flex-col items-center">
                {/* the thread each card hangs from */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
                  style={{ transformOrigin: "top" }}
                  className="h-6 w-px bg-gradient-to-b from-gold/70 to-gold/10"
                />

                {/* entrance: swings in once and settles */}
                <motion.div
                  initial={{ opacity: 0, y: -36, rotate: rotateFrom, scale: 0.82 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 9,
                    mass: 0.6,
                    delay: i * 0.08 + 0.15,
                  }}
                  style={{ transformOrigin: "top center" }}
                  className="w-full"
                >
                  {/* idle: keeps gently swinging forever, like it's hanging on the thread */}
                  <motion.div
                    animate={{ rotate: [0, idleAmp, 0, -idleAmp, 0] }}
                    transition={{
                      duration: idleDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.08 + 0.9,
                    }}
                    whileHover={{ rotate: fromLeft ? -4 : 4, scale: 1.04 }}
                    style={{ transformOrigin: "top center" }}
                    className="flex h-full w-full flex-col items-center gap-3 rounded-xl border border-gold/15 bg-maroon/30 p-6 text-center shadow-[0_18px_30px_-20px_rgba(0,0,0,0.6)] transition-colors hover:border-gold/40 hover:bg-maroon/50"
                  >
                    <Icon size={26} className="text-gold" />
                    <span className="text-sm text-cream/85">{label}</span>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}