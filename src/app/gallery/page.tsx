import type { Metadata } from "next";
import Image from "next/image";
import { Expand, ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery — Vehicles, Tours & Destinations",
  description:
    "Browse photos of the H K Tours & Travels fleet — Volvo multi-axle coaches, AC and non-AC buses, mini coaches and tempo travellers in Bangalore.",
};

// title is used only for SEO alt text — not shown on screen
const photos = [
  { src: "/images/gallery/gallery-01.jpg", title: "Volvo Multi-Axle Coach", w: 1280, h: 720 },
  { src: "/images/gallery/gallery-02.jpg", title: "AC Luxury Coach", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-03.jpg", title: "Non-AC Coach", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-04.jpg", title: "Luxury Tourist Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-05.jpg", title: "Tourist Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-06.jpg", title: "Mercedes-Benz Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-07.jpg", title: "Mini Coach", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-08.jpg", title: "Tourist Bus", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-09.jpg", title: "Mini Bus", w: 1280, h: 577 },
  { src: "/images/gallery/gallery-10.jpg", title: "Full-Size Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-11.jpg", title: "Tempo Traveller", w: 1280, h: 861 },
  { src: "/images/gallery/gallery-12.jpg", title: "Volvo Multi-Axle Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-13.jpg", title: "AC Luxury Coach", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-14.jpg", title: "Non-AC Coach", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-15.jpg", title: "Luxury Tourist Coach", w: 1200, h: 1200 },
  { src: "/images/gallery/gallery-16.jpg", title: "Tourist Coach", w: 960, h: 1280 },
  { src: "/images/gallery/gallery-17.jpg", title: "Mercedes-Benz Coach", w: 900, h: 1600 },
  { src: "/images/gallery/gallery-18.jpg", title: "Mini Coach Interior", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-19.jpg", title: "Tourist Bus", w: 1200, h: 1599 },
  { src: "/images/gallery/gallery-20.jpg", title: "Full-Size Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-21.jpg", title: "Tempo Traveller", w: 1280, h: 720 },
  { src: "/images/gallery/gallery-22.jpg", title: "Volvo Multi-Axle Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-23.jpg", title: "AC Luxury Coach", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-24.jpg", title: "Non-AC Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-25.jpg", title: "Luxury Tourist Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-26.jpg", title: "Tourist Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-27.jpg", title: "Mercedes-Benz Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-28.jpg", title: "Mini Coach", w: 720, h: 1280 },
  { src: "/images/gallery/gallery-29.jpg", title: "Tourist Bus", w: 1072, h: 712 },
  { src: "/images/gallery/gallery-30.jpg", title: "Tempo Traveller Interior", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-31.jpg", title: "Volvo Multi-Axle Coach", w: 720, h: 1280 },
  { src: "/images/gallery/gallery-32.jpg", title: "AC Luxury Coach", w: 960, h: 1280 },
  { src: "/images/gallery/gallery-33.jpg", title: "Non-AC Coach Interior", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-34.jpg", title: "Luxury Tourist Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-35.jpg", title: "Mercedes-Benz Coach Interior", w: 960, h: 1280 },
  { src: "/images/gallery/gallery-36.jpg", title: "Tourist Bus", w: 1280, h: 576 },
  { src: "/images/gallery/gallery-37.jpg", title: "Volvo Multi-Axle Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-38.jpg", title: "AC Luxury Coach", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-39.jpg", title: "Luxury Tourist Coach", w: 960, h: 1280 },
  { src: "/images/gallery/gallery-40.jpg", title: "Volvo Multi-Axle Coach", w: 1600, h: 1200 },
  { src: "/images/gallery/gallery-41.jpg", title: "AC Luxury Coach", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-42.jpg", title: "Luxury Tourist Coach Interior", w: 960, h: 1280 },
  { src: "/images/gallery/gallery-43.jpg", title: "Volvo Multi-Axle Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-44.jpg", title: "AC Luxury Coach", w: 1280, h: 960 },
  { src: "/images/gallery/gallery-45.jpg", title: "Volvo Multi-Axle Coach Interior", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-46.jpg", title: "AC Luxury Coach", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-47.jpg", title: "Volvo Multi-Axle Coach Interior", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-48.jpg", title: "AC Luxury Coach", w: 1600, h: 900 },
  { src: "/images/gallery/gallery-49.jpg", title: "AC Luxury Coach Interior", w: 1200, h: 1600 },
  { src: "/images/gallery/gallery-50.jpg", title: "AC Luxury Coach Interior", w: 1200, h: 1600 },
];

const highlights = ["Volvo Multi-Axle", "AC & Non-AC Coaches", "Mini Coaches", "Tempo Travellers", "Well-Maintained Fleet", "Experienced Drivers"];

export default function GalleryPage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: none; } }
        @keyframes heading { from { opacity: 0; transform: translateY(24px); letter-spacing: .4em; } to { opacity: 1; transform: none; } }
        @keyframes lineGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-40px); } }
        @keyframes lbIn { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: scale(1); } }
        @keyframes lbFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(212,175,55,.55); } 100% { box-shadow: 0 0 0 18px rgba(212,175,55,0); } }

        .hk-head > * { opacity: 0; animation: heading .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .hk-head > *:nth-child(2) { animation-delay: .15s; }
        .hk-head > *:nth-child(3) { animation-delay: .3s; }
        .hk-head > *:nth-child(4) { animation-delay: .45s; }
        .hk-line { transform-origin: center; animation: lineGrow 1s .6s cubic-bezier(.2,.7,.2,1) both; }

        .hk-tile { animation: fadeUp .8s cubic-bezier(.2,.7,.2,1) both; }
        @supports (animation-timeline: view()) {
          .hk-tile { animation-timeline: view(); animation-range: entry 0% cover 28%; animation-delay: 0s !important; }
        }

        .hk-shine::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%);
          transform: translateX(-120%); transition: transform 1s ease;
        }
        .group:hover .hk-shine::after { transform: translateX(120%); }

        .hk-marquee { animation: marquee 30s linear infinite; }
        .hk-blob { animation: float 14s ease-in-out infinite; }
        .hk-lb:target { animation: lbFade .35s ease both; }
        .hk-lb:target figure { animation: lbIn .45s cubic-bezier(.2,.7,.2,1) both; }
        .hk-pulse { animation: pulseRing 1.6s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hk-head > *, .hk-line, .hk-tile, .hk-marquee, .hk-blob, .hk-lb:target, .hk-lb:target figure, .hk-pulse { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <PageHero title="Memories in motion." image="/images/gallery/gallery-hero.jpg" />

      {/* Highlights marquee */}
      <div className="overflow-hidden border-y border-gold/20 bg-deep-black py-4">
        <div className="hk-marquee flex w-max gap-12 whitespace-nowrap">
          {[...highlights, ...highlights].map((h, i) => (
            <span key={i} className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
              {h}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="gallery" className="relative overflow-hidden bg-cream py-20 lg:py-28">
        {/* Floating background glows */}
        <div className="hk-blob pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="hk-blob pointer-events-none absolute -right-32 bottom-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl [animation-delay:-7s]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Heading */}
          <div className="hk-head mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Fleet</p>
            <h2 className="mt-3 font-display text-3xl text-deep-black md:text-5xl">
              Every journey starts with the <span className="italic text-gold">right ride</span>
            </h2>
            <div className="hk-line mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mt-6 text-sm leading-relaxed text-deep-black/60">
              From Volvo multi-axle coaches to tempo travellers — take a look at the vehicles that
              carry our travellers safely across Karnataka and beyond.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((p, i) => (
              <a
                key={p.src}
                href={`#photo-${i + 1}`}
                aria-label={`Open photo ${i + 1}`}
                style={{ animationDelay: `${(i % 9) * 80}ms` }}
                className="hk-tile group relative mb-5 block break-inside-avoid overflow-hidden rounded-2xl bg-deep-black/5 shadow-md ring-1 ring-deep-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 hover:ring-2 hover:ring-gold/60"
              >
                <div className="hk-shine relative overflow-hidden">
                  <Image
                    src={p.src}
                    alt={`${p.title} — H K Tours & Travels, Bangalore`}
                    width={p.w}
                    height={p.h}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full transition duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-90"
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                </div>

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-black/70 via-deep-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="hk-pulse flex h-14 w-14 scale-50 items-center justify-center rounded-full bg-gold text-deep-black opacity-0 shadow-lg transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Expand size={20} />
                  </span>
                </div>

                {/* Corner frame accents */}
                <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-gold opacity-0 transition-all duration-500 group-hover:left-4 group-hover:top-4 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-gold opacity-0 transition-all duration-500 group-hover:bottom-4 group-hover:right-4 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox (CSS :target — no JS needed) */}
      {photos.map((p, i) => {
        const prev = i === 0 ? photos.length : i;
        const next = i === photos.length - 1 ? 1 : i + 2;
        return (
          <div
            key={`lb-${p.src}`}
            id={`photo-${i + 1}`}
            className="hk-lb fixed inset-0 z-[100] hidden items-center justify-center bg-deep-black/95 p-4 backdrop-blur-sm target:flex"
          >
            <a href="#_" aria-label="Close" className="absolute inset-0" />

            <figure className="relative z-10 flex max-h-full max-w-6xl flex-col items-center">
              <Image
                src={p.src}
                alt={`${p.title} — H K Tours & Travels, Bangalore`}
                width={p.w}
                height={p.h}
                sizes="100vw"
                className="max-h-[82vh] w-auto rounded-xl object-contain shadow-2xl ring-1 ring-gold/30"
              />
              <figcaption className="mt-4 text-xs tracking-[0.3em] text-cream/60">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span> / {photos.length}
              </figcaption>
            </figure>

            <a
              href="#_"
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-cream transition duration-300 hover:rotate-90 hover:bg-gold hover:text-deep-black"
            >
              <X size={20} />
            </a>
            <a
              href={`#photo-${prev}`}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep-black/60 text-cream transition duration-300 hover:-translate-x-1 hover:bg-gold hover:text-deep-black md:left-6"
            >
              <ChevronLeft size={22} />
            </a>
            <a
              href={`#photo-${next}`}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep-black/60 text-cream transition duration-300 hover:translate-x-1 hover:bg-gold hover:text-deep-black md:right-6"
            >
              <ChevronRight size={22} />
            </a>
          </div>
        );
      })}
    </>
  );
}