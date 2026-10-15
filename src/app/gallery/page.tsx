import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PaginatedGallery from "@/components/PaginatedGallery";
import { galleryPhotos } from "@/data/gallery";
import { pageMeta, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Photo Gallery — Our Fleet",
  description: `${galleryPhotos.length} real photos of the H K Tours & Travels fleet — Volvo coaches, AC & non-AC buses, Urbania, Crysta, interiors and destinations.`,
  path: "/gallery",
  image: "/images/gallery/gallery-hero.webp",
});

const highlights = ["Volvo Multi-Axle", "AC & Non-AC Coaches", "Mini Coaches", "Force Urbania", "Toyota Crysta", "Professional Drivers"];

const galleryCss = `
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes heading { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hk-head > * { opacity: 0; animation: heading .8s cubic-bezier(.2,.7,.2,1) forwards; }
        .hk-head > *:nth-child(2) { animation-delay: .12s; }
        .hk-head > *:nth-child(3) { animation-delay: .24s; }
        .hk-head > *:nth-child(4) { animation-delay: .36s; }
        .hk-line { transform-origin: center; animation: lineGrow 1s .5s cubic-bezier(.2,.7,.2,1) both; }
        .hk-tile { animation: fadeUp .6s cubic-bezier(.2,.7,.2,1) both; }
        .hk-marquee { animation: marquee 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hk-head > *, .hk-line, .hk-tile, .hk-marquee { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `;

const imageGalleryLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "H K Tours & Travels photo gallery",
  url: `${SITE_URL}/gallery`,
  image: galleryPhotos.slice(0, 30).map((p) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${p.src}`,
    caption: p.alt,
  })),
};

export default function GalleryPage() {
  return (
    <>
      {/* raw CSS via dangerouslySetInnerHTML so ">" isn't escaped differently on server/client (hydration-safe) */}
      <style dangerouslySetInnerHTML={{ __html: galleryCss }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryLd) }} />

      <PageHero
        title="Memories in motion."
        subtitle="Real photos of our fleet, interiors and the places we travel to."
        image="/images/gallery/gallery-hero.webp"
      />

      {/* Highlights marquee */}
      <div className="overflow-hidden border-y border-gold/20 bg-deep-black py-4" aria-hidden="true">
        <div className="hk-marquee flex w-max gap-12 whitespace-nowrap">
          {[...highlights, ...highlights].map((h, i) => (
            <span key={i} className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
              {h}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="gallery" className="relative overflow-hidden bg-cream py-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="hk-head mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Fleet in Pictures</p>
            <h2 className="mt-3 font-display text-3xl text-deep-black md:text-5xl">
              Every journey starts with the <span className="italic text-gold">right ride</span>
            </h2>
            <div className="hk-line mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mt-6 text-sm leading-relaxed text-deep-black/65">
              From Volvo multi-axle coaches to Force Urbania and Toyota Crysta — take a look at the vehicles that
              carry our travellers safely across Karnataka and beyond. Tap any photo to view it full-screen.
            </p>
          </div>

          <PaginatedGallery />
        </div>
      </section>
    </>
  );
}
