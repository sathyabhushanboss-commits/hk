import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone } from "lucide-react";
import { business, navLinks } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-deep-black pb-28 pt-16 text-cream/80 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-gold/20 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/logo.png" alt="H K Tours and Travels" width={56} height={56} className="mb-4 rounded-full" />
            <h3 className="font-display text-2xl text-cream">
              H K <span className="text-gold">Tours</span> &amp; Travels
            </h3>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold/80">
              Safe Journey · Happy Journey · Memorable Journey
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Popular Destinations
            </h4>
            <ul className="space-y-2 text-sm">
              {["Mysore", "Dandeli", "Wayanad", "Udupi", "Sringeri", "Chikkamagaluru", "Gokarna"].map(
                (d) => (
                  <li key={d}>
                    <Link href="/destinations" className="hover:text-gold">
                      {d}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </h4>
            <a
              href={`tel:${business.phoneDial}`}
              className="mb-3 flex items-center gap-2 text-sm hover:text-gold"
            >
              <Phone size={16} className="text-gold" /> {business.phone}
            </a>
            <p className="text-sm leading-relaxed">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="mt-4 flex gap-4">
              <a href={business.instagramUrl} aria-label="Instagram" className="hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href={business.facebookUrl} aria-label="Facebook" className="hover:text-gold">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-cream/50">
          © 2026 H K Tours &amp; Travels. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
