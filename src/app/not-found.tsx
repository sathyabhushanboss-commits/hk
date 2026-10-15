import type { Metadata } from "next";
import Link from "next/link";
import { navLinks } from "@/data/business";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-burgundy-dark px-5 pb-20 pt-32 text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="mt-4 font-display text-3xl text-cream sm:text-4xl">This road doesn&apos;t go anywhere.</h1>
        <p className="mt-4 text-cream/70">The page you were looking for has moved or no longer exists.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-gold/40 px-4 py-2 text-sm text-cream transition hover:bg-gold hover:text-burgundy-dark"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
