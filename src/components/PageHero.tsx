"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // gentle scroll parallax on the background — kept subtle since this hero is short
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const words = title.split(" ");

  return (
    <section
      ref={sectionRef}
      className="grain relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-deep-black"
    >
      {/* background: entrance zoom + scroll-linked parallax drift/scale */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={image} alt={title} fill priority className="object-cover" />
        </motion.div>
      </motion.div>

      {/* vertical gradient, fading slightly deeper as you scroll */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/20"
      />
      {/* second directional wash for layered depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/40 via-transparent to-transparent" />

      {/* map-route motif: dashed route, waypoint stops, and a marker travelling the line — visible on every breakpoint */}
      <svg
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          id="hero-route-path"
          d="M 40 350 C 180 350, 220 230, 360 210 C 480 195, 520 120, 640 95 C 700 82, 730 55, 770 30"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
          initial={{ strokeDashoffset: 900 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, delay: 0.5, ease: "easeInOut" }}
          style={{ opacity: 0.55 }}
        />

        {[
          { cx: 40, cy: 350, delay: 0.6 },
          { cx: 180, cy: 322, delay: 0.95 },
          { cx: 360, cy: 210, delay: 1.35 },
          { cx: 480, cy: 195, delay: 1.7 },
          { cx: 640, cy: 95, delay: 2.1 },
          { cx: 770, cy: 30, delay: 2.5 },
        ].map((p, idx) => (
          <motion.circle
            key={idx}
            cx={p.cx}
            cy={p.cy}
            r={4}
            fill="#D4AF37"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: p.delay, ease: "easeOut" }}
            style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
          />
        ))}

        {!prefersReducedMotion && (
          <motion.circle
            r="3.5"
            fill="#FFF1C7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.3 }}
          >
            <animateMotion
              dur="7s"
              begin="2.7s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#hero-route-path" />
            </animateMotion>
          </motion.circle>
        )}
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 lg:px-10">
        {/* gold divider draws in from the left */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mb-4 h-px w-14 bg-gold"
        />

        {/* title reveals word by word */}
        <h1 className="flex flex-wrap font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.08, ease: "easeOut" }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25 + words.length * 0.08 + 0.15,
              ease: "easeOut",
            }}
            className="mt-4 max-w-lg text-sm text-cream/75 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}