import type { Metadata } from "next";
import FleetShowcase from "@/components/FleetShowcase";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Fleet — Volvo, Buses & Urbania",
  description:
    "Hire Innova Crysta, Force Urbania, 33–50 seater buses, Volvo and Volvo Multi-Axle coaches with professional drivers in Bengaluru. Get a quote on WhatsApp.",
  path: "/fleet",
  image: "/images/fleet/volvo-multi-axle2.webp",
  keywords: [
    "Volvo bus rental Bangalore",
    "50 seater bus hire Bangalore",
    "Urbania rental Bangalore",
    "Innova Crysta rental Bangalore",
    "33 seater bus Bangalore",
  ],
});

// The interactive galleries live in a client component; this server page
// exists so the fleet page gets its own title, description and canonical URL.
export default function FleetPage() {
  return <FleetShowcase />;
}
