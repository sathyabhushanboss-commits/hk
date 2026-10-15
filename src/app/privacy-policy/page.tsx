import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How H K Tours and Travels collects, uses and protects personal information shared through our website, phone, WhatsApp and email.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "We only collect information you choose to share with us when you enquire about or book a journey:",
      [
        "Contact details — your name, phone number and email address.",
        "Trip details — travel date, pickup and drop locations, destination, number of travellers and vehicle preference.",
        "Messages you send us by phone, WhatsApp, email or through the enquiry forms on this website.",
        "Basic technical data your browser sends automatically (such as device type, browser and pages visited) and preferences stored on your device, as described in our Cookie Policy.",
      ],
      "We do not collect payment card details through this website.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      [
        "To respond to your enquiry and prepare a quotation.",
        "To confirm, schedule and operate your booking, including sharing driver and vehicle details.",
        "To contact you about changes to your trip or for feedback after the journey.",
        "To keep records required for accounting, tax and legal purposes.",
        "To improve our website and services.",
      ],
      "We do not sell or rent your personal information, and we do not send marketing messages without your consent.",
    ],
  },
  {
    heading: "WhatsApp and third-party services",
    body: [
      "Our enquiry forms open WhatsApp with your trip details pre-filled; nothing is sent until you press send. Messages sent through WhatsApp, phone or email are also handled under the privacy policies of those providers (for example Meta for WhatsApp and Google for Gmail).",
      "Links to Google Maps or other websites take you to services we do not control. Please review their privacy policies separately.",
    ],
  },
  {
    heading: "Sharing your information",
    body: [
      "We share only what is needed to deliver your trip — for example, sharing the pickup location and contact number with the assigned driver. We may also disclose information where required by law or to protect the safety of passengers, drivers or the public.",
    ],
  },
  {
    heading: "Data retention and security",
    body: [
      "We keep enquiry and booking information only as long as needed for the purposes above or as required by law. We take reasonable steps to protect your information against loss, misuse and unauthorised access, but no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may ask us to access, correct or delete the personal information we hold about you, or withdraw consent you have given. Contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Our website is intended for adults planning travel. Bookings for minors must be made by a parent, guardian or responsible organisation such as a school.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The latest version will always be available on this page with the date it was last updated.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      current="/privacy-policy"
      intro="H K Tours and Travels (“we”, “us”, “our”) respects your privacy. This policy explains what personal information we collect when you use this website or contact us, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
