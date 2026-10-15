"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

export const COOKIE_CONSENT_KEY = "hk_cookie_consent";

/**
 * Lightweight consent banner. The site itself only uses essential browser storage;
 * the choice is saved so any analytics added later can check
 * localStorage.getItem("hk_cookie_consent") === "accepted" before loading.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked — don't nag */
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-xl rounded-2xl border border-gold/40 bg-burgundy-dark/95 p-4 text-cream shadow-2xl backdrop-blur-md sm:bottom-6 sm:p-5 lg:left-6 lg:right-auto lg:mx-0"
    >
      <div className="flex items-start gap-3">
        <Cookie size={22} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-cream/85">
          We use essential cookies and similar storage to run this website and remember your preferences.
          Read our{" "}
          <Link href="/cookie-policy" className="font-semibold text-gold underline-offset-2 hover:underline">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold text-gold underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 flex gap-2 sm:justify-end">
        <button
          type="button"
          onClick={() => choose("declined")}
          className="flex-1 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold sm:flex-none"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="flex-1 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-burgundy-dark transition hover:bg-cream sm:flex-none"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
