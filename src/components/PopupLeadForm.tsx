"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/business";

const DISMISS_KEY = "hk_popup_dismissed";

export default function PopupLeadForm() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", destination: "", travellers: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    const isMobile = window.innerWidth < 1024;
    const timer = setTimeout(() => setVisible(true), isMobile ? 35000 : 25000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const message = `Hello H K Tours & Travels,\n\nName: ${form.name}\nPhone: ${form.phone}\nDestination: ${form.destination}\nTravellers: ${form.travellers}\n\nPlease share a quote.`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold/40 bg-burgundy-dark p-8 text-cream"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-cream/70 hover:text-gold focus-gold"
            >
              <X size={22} />
            </button>

            <h3 className="font-display text-2xl leading-snug text-cream">
              Ready to Plan Your Journey?
            </h3>
            <p className="mt-2 text-sm text-cream/70">
              Tell us where you&apos;re going. We&apos;ll help you choose the right vehicle.
            </p>

            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(buildWhatsAppUrl(message), "_blank");
                close();
              }}
            >
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
              />
              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
              />
              <input
                placeholder="Destination"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
              />
              <input
                placeholder="Number of Travellers"
                value={form.travellers}
                onChange={(e) => setForm({ ...form, travellers: e.target.value })}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus-gold"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-burgundy-dark"
              >
                Get a Quick Quote
              </button>
              <a
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-full border border-gold/60 py-3 text-center text-sm font-semibold text-gold"
              >
                Chat on WhatsApp
              </a>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
