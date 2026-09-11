"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { business, whatsappMessages, buildWhatsAppUrl } from "@/data/business";

export default function MobileConversionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-gold/30 bg-burgundy-dark lg:hidden">
      <a
        href={`tel:${business.phoneDial}`}
        className="flex flex-1 flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wide text-cream"
      >
        <Phone size={18} className="text-gold" />
        Call
      </a>
      <a
        href={buildWhatsAppUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 border-x border-gold/20 py-3 text-[11px] font-semibold uppercase tracking-wide text-cream"
      >
        <MessageCircle size={18} className="text-gold" />
        WhatsApp
      </a>
      <a
        href="/contact"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-wide text-burgundy-dark bg-gold"
      >
        <CalendarCheck size={18} />
        Book Now
      </a>
    </div>
  );
}
