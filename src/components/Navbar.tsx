"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, business } from "@/data/business";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || open
            ? "bg-burgundy-dark/90 backdrop-blur-md border-b border-gold/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3 focus-gold" onClick={() => setOpen(false)}>
            <Image src="/images/logo.png" alt="H K Tours and Travels" width={44} height={44} className="rounded-full" priority />
            <span className="font-display text-xl tracking-wide text-cream">
              H K <span className="text-gold">Tours</span> &amp; Travels
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-cream/90 transition-colors hover:text-gold focus-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full border border-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-gold transition-all hover:bg-gold hover:text-burgundy-dark focus-gold"
            >
              Plan Your Journey
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-cream lg:hidden focus-gold"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-burgundy-dark px-8 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-4">
              <a
                href={`tel:${business.phoneDial}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3 font-semibold text-burgundy-dark"
              >
                <Phone size={18} /> Call
              </a>
              <a
                href="https://wa.me/919342159337"
                className="flex flex-1 items-center justify-center rounded-full border border-gold py-3 font-semibold text-gold"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
