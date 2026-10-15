"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fleet } from "@/data/fleet";
import { buildWhatsAppUrl } from "@/data/business";

const travelTypes = [
  "Corporate",
  "Wedding",
  "Family",
  "Group Tour",
  "Outstation",
  "Airport Transfer",
  "Vehicle Rental",
  "Other",
];

const steps = ["Travel Type", "Vehicle", "Date", "Travellers", "Pickup", "Destination", "Contact"];

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    travelType: "",
    vehicle: "",
    date: "",
    travellers: "",
    pickup: "",
    destination: "",
    name: "",
    phone: "",
  });

  const update = (key: keyof typeof data, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const canProceed = () => {
    switch (step) {
      case 0:
        return !!data.travelType;
      case 1:
        return !!data.vehicle;
      case 2:
        return !!data.date;
      case 3:
        return !!data.travellers;
      case 4:
        return !!data.pickup;
      case 5:
        return !!data.destination;
      case 6:
        return !!data.name && !!data.phone;
      default:
        return true;
    }
  };

  const message = `Hello H K Tours & Travels,

I would like to request a journey.

Travel Type: ${data.travelType}
Vehicle: ${data.vehicle}
Travel Date: ${data.date}
Travellers: ${data.travellers}
Pickup: ${data.pickup}
Destination: ${data.destination}

Name: ${data.name}
Phone: ${data.phone}

Please share availability and quotation.`;

  const submit = () => {
    setDone(true);
    window.open(buildWhatsAppUrl(message), "_blank");
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-burgundy-dark p-10 text-center text-cream">
        <h3 className="font-display text-2xl">Your Journey Request Is In</h3>
        <p className="mt-3 text-cream/70">
          Thank you, {data.name.split(" ")[0] || "there"}. We&apos;ve opened WhatsApp with your
          details — send the message and our team will get back to you shortly. You can also call{" "}
          us directly if that&apos;s easier.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gold/30 bg-burgundy-dark p-6 text-cream sm:p-10">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-gold">
          {String(step + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
        <span className="text-sm text-cream/60">{steps[step]}</span>
      </div>

      <div className="mb-8 h-1 w-full rounded-full bg-cream/10">
        <motion.div
          className="h-1 rounded-full bg-gold"
          animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
          className="min-h-[160px]"
        >
          {step === 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {travelTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => update("travelType", t)}
                  className={`rounded-lg border px-3 py-3 text-sm transition-colors ${
                    data.travelType === t
                      ? "border-gold bg-gold text-burgundy-dark"
                      : "border-cream/20 text-cream hover:border-gold/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[...fleet.map((f) => f.name), "Not Sure"].map((v) => (
                <button
                  key={v}
                  onClick={() => update("vehicle", v)}
                  className={`rounded-lg border px-3 py-3 text-sm transition-colors ${
                    data.vehicle === v
                      ? "border-gold bg-gold text-burgundy-dark"
                      : "border-cream/20 text-cream hover:border-gold/60"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <input
              type="date"
              value={data.date}
              onChange={(e) => update("date", e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm focus-gold"
            />
          )}

          {step === 3 && (
            <input
              type="number"
              min={1}
              placeholder="Number of travellers"
              value={data.travellers}
              onChange={(e) => update("travellers", e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus-gold"
            />
          )}

          {step === 4 && (
            <input
              placeholder="Pickup location"
              value={data.pickup}
              onChange={(e) => update("pickup", e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus-gold"
            />
          )}

          {step === 5 && (
            <input
              placeholder="Destination"
              value={data.destination}
              onChange={(e) => update("destination", e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus-gold"
            />
          )}

          {step === 6 && (
            <div className="space-y-3">
              <input
                placeholder="Full Name"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus-gold"
              />
              <input
                placeholder="Phone Number"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm placeholder:text-cream/40 focus-gold"
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="text-sm font-medium text-cream/60 disabled:opacity-0"
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={() => canProceed() && setStep((s) => s + 1)}
            disabled={!canProceed()}
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-burgundy-dark disabled:opacity-40"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={!canProceed()}
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-burgundy-dark disabled:opacity-40"
          >
            Request Your Journey
          </button>
        )}
      </div>
    </div>
  );
}
