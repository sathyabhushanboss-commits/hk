import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "How the H K Tours and Travels website uses cookies and browser storage, and how you can control them.",
  path: "/cookie-policy",
});

const sections: LegalSection[] = [
  {
    heading: "What are cookies?",
    body: [
      "Cookies are small text files stored on your device when you visit a website. Similar technologies, such as your browser's local storage and session storage, let a website remember information between pages or visits.",
    ],
  },
  {
    heading: "What we use",
    body: [
      "This website currently uses only essential, first-party storage. It does not use advertising cookies and does not sell data to third parties.",
      [
        "hk_cookie_consent (local storage) — remembers whether you accepted or declined this notice, so we don't show it on every page.",
        "hk_popup_dismissed (session storage) — remembers that you closed the quick-quote pop-up during your current visit. It is cleared when you close the browser.",
      ],
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "When you click a link to WhatsApp, Google Maps or another external service, that service may set its own cookies under its own policy. These are not controlled by us.",
      "If we add website analytics in the future (for example, to count visits), it will only run after you accept cookies, and this page will be updated to list it.",
    ],
  },
  {
    heading: "Managing your choice",
    body: [
      "You can change your mind at any time by clearing this website's data in your browser settings — the cookie notice will then appear again. Most browsers also let you block or delete cookies; blocking essential storage may affect how some features work.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      current="/cookie-policy"
      intro="This Cookie Policy explains how H K Tours and Travels uses cookies and similar technologies on this website, and the choices available to you."
      sections={sections}
    />
  );
}
