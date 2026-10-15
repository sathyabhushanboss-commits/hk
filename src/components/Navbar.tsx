"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { navLinks, business, buildWhatsAppUrl, whatsappMessages } from "@/data/business";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close the menu on navigation and on Escape
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-gold/30 bg-burgundy-dark/95 backdrop-blur-md"
            : "bg-gradient-to-b from-deep-black/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
          <Link
            href="/"
            aria-label="H K Tours and Travels — Home"
            className="flex min-w-0 items-center gap-2.5 focus-gold sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo.webp"
              alt="H K Tours and Travels logo"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 rounded-full sm:h-11 sm:w-11"
              priority
            />
            <span className="truncate font-display text-lg tracking-wide text-cream sm:text-xl">
              H K <span className="text-gold">Tours</span> &amp; Travels
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors hover:text-gold focus-gold ${
                  isActive(link.href) ? "text-gold" : "text-cream/90"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${
                    isActive(link.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href={`tel:${business.phoneIntl}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-cream/90 hover:text-gold focus-gold"
            >
              <Phone size={15} className="text-gold" /> {business.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-gold px-5 py-2.5 text-sm font-semibold tracking-wide text-gold transition-all hover:bg-gold hover:text-burgundy-dark focus-gold"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-cream focus-gold xl:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-burgundy-dark px-6 pb-28 pt-24 xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-gold/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block py-4 font-display text-2xl sm:text-3xl ${
                      isActive(link.href) ? "text-gold" : "text-cream hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 space-y-3 text-sm text-cream/80">
              <a href={`tel:${business.phoneIntl}`} className="flex items-center gap-3 hover:text-gold">
                <Phone size={16} className="text-gold" /> {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 break-all hover:text-gold">
                <Mail size={16} className="shrink-0 text-gold" /> {business.email}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <a
                href={`tel:${business.phoneIntl}`}
                className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 font-semibold text-burgundy-dark"
              >
                <Phone size={18} /> Call
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-gold py-3 font-semibold text-gold"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
