"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { business, whatsappMessages, buildWhatsAppUrl } from "@/data/business";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="mb-2 flex flex-col gap-2 rounded-2xl border border-gold/30 bg-burgundy-dark p-3 shadow-xl"
          >
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`tel:${business.phoneDial}`}
              className="flex items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-semibold text-gold"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-burgundy-dark"
            >
              <Send size={16} /> Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-burgundy-dark shadow-lg transition-transform hover:scale-105 focus-gold"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
