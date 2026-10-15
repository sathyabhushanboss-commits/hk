"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { galleryPhotos, type GalleryCategory } from "@/data/gallery";

const PER_PAGE = 12;
const FILTERS: ("All" | GalleryCategory)[] = ["All", "Vehicles", "Interiors", "Destinations"];

export default function PaginatedGallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const photos = useMemo(
    () => (filter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)),
    [filter]
  );
  const totalPages = Math.max(1, Math.ceil(photos.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const pagePhotos = photos.slice(start, start + PER_PAGE);

  // read ?page= from the URL on first load so pages are shareable
  useEffect(() => {
    const p = Number(new URLSearchParams(window.location.search).get("page"));
    if (p > 1) setPage(Math.min(p, Math.ceil(galleryPhotos.length / PER_PAGE)));
  }, []);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    const url = new URL(window.location.href);
    if (next === 1) url.searchParams.delete("page");
    else url.searchParams.set("page", String(next));
    window.history.replaceState(null, "", url.toString());
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const changeFilter = (f: (typeof FILTERS)[number]) => {
    setFilter(f);
    setPage(1);
    const url = new URL(window.location.href);
    url.searchParams.delete("page");
    window.history.replaceState(null, "", url.toString());
  };

  // lightbox works across the whole filtered set, not just the current page
  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setLightbox((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  // compact page list: 1 … 4 5 6 … 9
  const pageList = useMemo(() => {
    const set = new Set([1, totalPages, page - 1, page, page + 1]);
    const arr = [...set].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);
    const out: (number | "…")[] = [];
    arr.forEach((n, i) => {
      if (i > 0 && n - arr[i - 1] > 1) out.push("…");
      out.push(n);
    });
    return out;
  }, [page, totalPages]);

  const current = lightbox !== null ? photos[lightbox] : null;

  return (
    <div ref={topRef} className="scroll-mt-28">
      {/* Filters */}
      <div role="tablist" aria-label="Filter photos" className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const count = f === "All" ? galleryPhotos.length : galleryPhotos.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => changeFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition sm:px-5 ${
                filter === f
                  ? "border-burgundy bg-burgundy text-cream"
                  : "border-burgundy/20 bg-white text-burgundy hover:border-burgundy"
              }`}
            >
              {f} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-deep-black/50" aria-live="polite">
        Showing {start + 1}–{Math.min(start + PER_PAGE, photos.length)} of {photos.length} photos
      </p>

      {/* Grid */}
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {pagePhotos.map((p, i) => (
          <li key={p.src} className="hk-tile" style={{ animationDelay: `${(i % 8) * 50}ms` }}>
            <button
              type="button"
              onClick={() => setLightbox(start + i)}
              aria-label={`Open photo: ${p.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-deep-black/5 shadow-md ring-1 ring-deep-black/5 transition-all duration-500 hover:shadow-xl hover:ring-2 hover:ring-gold/60 sm:rounded-2xl"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                quality={60}
                className="object-cover transition duration-700 group-hover:scale-110"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-11 w-11 scale-50 items-center justify-center rounded-full bg-gold text-deep-black opacity-0 shadow-lg transition duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Expand size={18} />
                </span>
              </span>
              <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-deep-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream">
                {p.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Gallery pages" className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="flex h-11 items-center gap-1 rounded-full border border-burgundy/20 bg-white px-4 text-sm font-semibold text-burgundy transition hover:border-burgundy disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} /> <span className="hidden sm:inline">Prev</span>
          </button>

          {pageList.map((n, i) =>
            n === "…" ? (
              <span key={`gap-${i}`} className="px-1 text-burgundy/50">
                …
              </span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n)}
                aria-label={`Page ${n}`}
                aria-current={n === page ? "page" : undefined}
                className={`h-11 w-11 rounded-full text-sm font-semibold transition ${
                  n === page
                    ? "bg-burgundy text-cream shadow-md"
                    : "border border-burgundy/20 bg-white text-burgundy hover:border-burgundy"
                }`}
              >
                {n}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="flex h-11 items-center gap-1 rounded-full border border-burgundy/20 bg-white px-4 text-sm font-semibold text-burgundy transition hover:border-burgundy disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="hidden sm:inline">Next</span> <ChevronRight size={16} />
          </button>
        </nav>
      )}

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black/95 p-3 sm:p-6"
          onClick={close}
        >
          <figure className="relative flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] w-full sm:h-[80vh]">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                quality={80}
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 px-12 text-center text-xs text-cream/70">
              <span className="text-gold">{(lightbox ?? 0) + 1}</span> / {photos.length} · {current.alt}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-deep-black/60 text-cream transition hover:rotate-90 hover:bg-gold hover:text-deep-black sm:right-5 sm:top-5"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep-black/60 text-cream transition hover:bg-gold hover:text-deep-black sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-deep-black/60 text-cream transition hover:bg-gold hover:text-deep-black sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
}
