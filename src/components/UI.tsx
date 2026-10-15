"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/data/business";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-burgundy-dark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-px w-16 origin-left bg-gold ${className}`}
    />
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-burgundy-dark transition-transform hover:scale-[1.03] focus-gold"
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-gold hover:text-gold focus-gold"
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CallButton() {
  return (
    <a
      href={`tel:${business.phoneDial}`}
      className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy-dark focus-gold"
    >
      <Phone size={16} /> Call {business.phone}
    </a>
  );
}

export function WhatsAppLink({
  message,
  children,
  className,
}: {
  message: string;
  children: React.ReactNode;
  className?: string;
}) {
  const url = `https://wa.me/919342159337?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] focus-gold"
      }
    >
      {children}
    </a>
  );
}
