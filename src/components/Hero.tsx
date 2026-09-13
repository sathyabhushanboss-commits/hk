"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/UI";
import {
  business,
  whatsappMessages,
  buildWhatsAppUrl,
} from "@/data/business";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative grain flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-deep-black"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image.png"
            alt="Premium coach travelling on a highway"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-burgundy-dark/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Route animation */}
      <svg
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          id="home-hero-route-path"
          d="M -20 480 C 160 480, 180 260, 340 220 C 460 190, 520 120, 560 10"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
          initial={{ strokeDashoffset: 900 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 2.6,
            delay: 0.4,
            ease: "easeInOut",
          }}
          style={{ opacity: 0.65 }}
        />

        {[
          { cx: -20, cy: 480, delay: 0.5 },
          { cx: 160, cy: 470, delay: 0.95 },
          { cx: 340, cy: 220, delay: 1.4 },
          { cx: 460, cy: 190, delay: 1.85 },
          { cx: 520, cy: 120, delay: 2.3 },
          { cx: 560, cy: 10, delay: 2.7 },
        ].map((p, idx) => (
          <motion.circle
            key={idx}
            cx={p.cx}
            cy={p.cy}
            r={4.5}
            fill="#D4AF37"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: p.delay,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: `${p.cx}px ${p.cy}px`,
            }}
          />
        ))}

        {!prefersReducedMotion && (
          <motion.circle
            r="4"
            fill="#FFF1C7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.9,
              duration: 0.3,
            }}
          >
            <animateMotion
              dur="7s"
              begin="2.9s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#home-hero-route-path" />
            </animateMotion>
          </motion.circle>
        )}
      </svg>

      {/* Hero Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-24 lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
        >
          H K Tours &amp; Travels
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className="text-shadow-soft max-w-3xl font-display text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl"
        >
          Your journey deserves more.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.6,
          }}
          className="mt-5 max-w-xl text-sm text-cream/80 sm:text-base"
        >
          Premium travel and group transportation for corporate events, grand
          weddings, family journeys and outstation getaways.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-3 text-xs uppercase tracking-[0.25em] text-gold/90"
        >
          Safe Journey · Happy Journey · Memorable Journey
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.95,
            duration: 0.6,
          }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <PrimaryButton href="/contact">
            Plan Your Journey
          </PrimaryButton>

          <GhostButton href="/fleet">
            Explore The Fleet
          </GhostButton>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.6,
          }}
          className="mt-6 flex gap-5 text-xs text-cream/70"
        >
          {/* Phone */}
          <a
            href={`tel:${business.phoneDial}`}
            className="flex items-center gap-1.5 hover:text-gold"
          >
            <Phone size={14} />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href={buildWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 6, 0],
        }}
        transition={{
          delay: 1.3,
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70"
      >
        <div className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em]">
          Scroll to Explore
          <ChevronDown size={16} className="text-gold" />
        </div>
      </motion.div>
    </section>
  );
}