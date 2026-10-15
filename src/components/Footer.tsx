import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { business, navLinks, legalLinks, buildWhatsAppUrl, whatsappMessages } from "@/data/business";
import { destinations } from "@/data/destinations";

const footerDestinations = destinations.filter((d) =>
  ["mysore", "dandeli", "wayanad", "udupi", "sringeri", "chikkamagaluru", "gokarna"].includes(d.slug)
);

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.name}, ${business.addressSingleLine}`
)}`;

export default function Footer() {
  const socials = [
    { href: business.instagramUrl, label: "Instagram", Icon: Instagram },
    { href: business.facebookUrl, label: "Facebook", Icon: Facebook },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden bg-deep-black pb-28 pt-20 text-cream/80 lg:pb-12">
      {/* Top gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[min(40rem,100vw)] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* CTA strip */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/20 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold/80">Plan your next trip</p>
            <p className="mt-2 font-display text-2xl text-cream md:text-3xl">Ready to travel in comfort?</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${business.phoneIntl}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-deep-black transition hover:bg-cream"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>

        <div className="grid gap-12 border-b border-gold/20 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="H K Tours and Travels — Home" className="inline-block focus-gold">
              <Image
                src="/images/logo.webp"
                alt="H K Tours and Travels logo"
                width={56}
                height={56}
                className="mb-4 rounded-full ring-1 ring-gold/40"
              />
              <span className="block font-display text-2xl text-cream">
                H K <span className="text-gold">Tours</span> &amp; Travels
              </span>
            </Link>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold/80">
              Safe Journey · Happy Journey · Memorable Journey
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Bus, coach, tempo traveller and car rentals with professional drivers for corporate,
              wedding, family and outstation travel from Bengaluru.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition hover:border-gold hover:bg-gold hover:text-deep-black"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">Quick Links</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1 transition hover:text-gold">
                    {l.label}
                    <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destinations */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">Popular Destinations</p>
            <ul className="space-y-3 text-sm">
              {footerDestinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations#${d.slug}`}
                    className="group inline-flex items-center gap-1 transition hover:text-gold"
                  >
                    Bangalore to {d.name}
                    <ArrowUpRight size={14} className="opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-gold">Contact</p>
            <a href={`tel:${business.phoneIntl}`} className="mb-4 flex items-center gap-3 text-sm transition hover:text-gold">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Phone size={16} className="text-gold" />
              </span>
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="mb-4 flex items-center gap-3 break-all text-sm transition hover:text-gold"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <Mail size={16} className="text-gold" />
              </span>
              {business.email}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm leading-relaxed transition hover:text-gold"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10">
                <MapPin size={16} className="text-gold" />
              </span>
              <address className="not-italic">
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </a>
          </div>
        </div>

        {/* Legal links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-8 text-xs text-cream/60 md:justify-start">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center text-xs text-cream/50 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} H K Tours &amp; Travels. All Rights Reserved.</p>
          <p>
            Designed, Developed &amp; Maintained by{" "}
            <span className="font-semibold text-gold">Sathya Enterprises</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
