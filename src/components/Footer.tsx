import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { business, navLinks } from "@/data/business";

const EMAIL = "hktoursandtravlesnow@gmail.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-black pb-28 pt-20 text-cream/80 lg:pb-12">
      {/* Top gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* CTA strip */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/20 bg-white/[0.03] p-8 backdrop-blur-sm md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold/80">Plan your next trip</p>
            <h3 className="mt-2 font-display text-2xl text-cream md:text-3xl">
              Ready to travel in comfort?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${business.phoneDial}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep-black transition hover:bg-cream"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>

        <div className="grid gap-12 border-b border-gold/20 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="H K Tours and Travels"
              width={56}
              height={56}
              className="mb-4 rounded-full ring-1 ring-gold/40"
            />
            <h3 className="font-display text-2xl text-cream">
              H K <span className="text-gold">Tours</span> &amp; Travels
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold/80">
              Safe Journey · Happy Journey · Memorable Journey
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={business.instagramUrl}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:border-gold hover:bg-gold hover:text-deep-black"
              >
                <Instagram size={18} />
              </a>
              <a
                href={business.facebookUrl}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:border-gold hover:bg-gold hover:text-deep-black"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 transition hover:text-gold"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">
              Popular Destinations
            </h4>
            <ul className="space-y-3 text-sm">
              {["Mysore", "Dandeli", "Wayanad", "Udupi", "Sringeri", "Chikkamagaluru", "Gokarna"].map(
                (d) => (
                  <li key={d}>
                    <Link
                      href="/destinations"
                      className="group inline-flex items-center gap-1 transition hover:text-gold"
                    >
                      {d}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </h4>
            <a
              href={`tel:${business.phoneDial}`}
              className="mb-4 flex items-center gap-3 text-sm transition hover:text-gold"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Phone size={16} className="text-gold" />
              </span>
              {business.phone}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mb-4 flex items-center gap-3 break-all text-sm transition hover:text-gold"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Mail size={16} className="text-gold" />
              </span>
              {EMAIL}
            </a>
            <div className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <MapPin size={16} className="text-gold" />
              </span>
              <p>
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-cream/50 md:flex-row">
          <p>© 2026 H K Tours &amp; Travels. All Rights Reserved.</p>
          <p>
            Designed, Developed &amp; Maintained by{" "}
            <span className="font-semibold text-gold">Sathya Enterprises</span>
          </p>
        </div>
      </div>
    </footer>
  );
}