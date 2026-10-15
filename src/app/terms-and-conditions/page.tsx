import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "Booking, payment, cancellation and travel terms for vehicle hire and tour services from H K Tours and Travels, Bengaluru.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      "These terms apply to all bookings for vehicle hire, transport and tour services provided by H K Tours and Travels, and to your use of this website. By confirming a booking or using this website you agree to these terms. Specific terms written in your quotation or booking confirmation take priority over these general terms.",
    ],
  },
  {
    heading: "Quotations and bookings",
    body: [
      [
        "Quotations are based on the details you provide — date, route, distance, duration, vehicle type and number of passengers — and are valid for the period stated in the quotation.",
        "A booking is confirmed only when we confirm it in writing (WhatsApp, SMS or email), together with any advance payment requested.",
        "Vehicles are allotted subject to availability. If the booked vehicle becomes unavailable for reasons beyond our control, we will offer a comparable vehicle or a refund of any advance paid for that vehicle.",
      ],
    ],
  },
  {
    heading: "Charges and payment",
    body: [
      [
        "Unless stated otherwise in your quotation, tolls, parking, state entry permits/taxes and driver allowance (bata) for night halts may be charged extra at actuals.",
        "Kilometres and hours are typically calculated from our garage back to our garage. Extra kilometres or hours beyond the quotation are charged at the rates stated in it.",
        "Balance payments are due as stated in the quotation, usually before the end of the journey.",
      ],
    ],
  },
  {
    heading: "Cancellations and changes",
    body: [
      "Please inform us of any cancellation or change as early as possible. Cancellation charges, if any, depend on how close to the travel date you cancel and will be stated in your quotation or confirmation. Changes to dates, routes or vehicle type are subject to availability and may change the price.",
    ],
  },
  {
    heading: "Passenger responsibilities",
    body: [
      [
        "The number of passengers must not exceed the seating capacity of the vehicle.",
        "Smoking, alcohol consumption and carrying illegal or hazardous items in the vehicle are not permitted.",
        "Passengers are responsible for their personal belongings and luggage.",
        "Any damage to the vehicle caused by passengers will be charged at actual repair cost.",
        "The driver may refuse to continue the journey if passenger behaviour puts safety at risk.",
      ],
    ],
  },
  {
    heading: "Driving hours and safety",
    body: [
      "For everyone's safety, drivers follow reasonable rest periods and traffic laws. Routes, timings and speeds may be adjusted for road, weather or traffic conditions, and the driver's decisions on safety are final.",
    ],
  },
  {
    heading: "Delays and liability",
    body: [
      "We make every effort to keep to agreed timings, but we are not liable for delays or losses caused by events outside our reasonable control, such as traffic, road closures, weather, breakdowns, strikes or government restrictions. In case of a breakdown we will arrange a replacement vehicle as quickly as practicable. Our total liability for any booking is limited to the amount paid for that booking.",
    ],
  },
  {
    heading: "Use of this website",
    body: [
      "The content of this website, including text and photographs, belongs to H K Tours and Travels and may not be copied or reused without permission. Vehicle photos are representative; the vehicle provided may differ in colour or interior details from the photos shown. We may update prices, fleet details and website content at any time.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      current="/terms-and-conditions"
      intro="Please read these terms carefully before booking a vehicle or tour with H K Tours and Travels. If you have any questions, contact us before confirming your booking."
      sections={sections}
    />
  );
}
