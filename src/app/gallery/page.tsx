import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Vehicles, Tours & Destinations",
  description:
    "Browse photos of the H K Tours & Travels fleet, tours, destinations and travel experiences across Karnataka.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Memories in motion."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
