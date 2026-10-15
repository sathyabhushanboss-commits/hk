import type { Metadata, Viewport } from "next";
// Self-hosted fonts (no render-blocking request to Google Fonts)
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/playfair-display/latin-500.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-500-italic.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileConversionBar from "@/components/MobileConversionBar";
import PopupLeadForm from "@/components/PopupLeadForm";
import CookieBanner from "@/components/CookieBanner";
import { business } from "@/data/business";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

const defaultTitle = "Bus & Urbania Rental Bangalore | H K Tours and Travels";
const defaultDescription =
  "Rent Volvo buses, 33–50 seater coaches, Urbania & Crysta with drivers in Bengaluru for corporate, wedding, group and outstation trips. Rated 4.7★ on Google.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | H K Tours and Travels",
  },
  description: defaultDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: "Sathya Enterprises",
  publisher: business.name,
  category: "travel",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: business.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#350008",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.webp`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description: defaultDescription,
      telephone: business.phoneIntl,
      email: business.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "38, Andrahalli Main Road, Opp. Andhra Bank, D Group Employees Layout, Vinayakanagara West",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560091",
        addressCountry: "IN",
      },
      areaServed: ["Bengaluru", "Karnataka", "Kerala", "Tamil Nadu", "Goa"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(business.rating),
        reviewCount: String(business.reviewCount),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: business.name,
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-burgundy-dark"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingContact />
        <MobileConversionBar />
        <PopupLeadForm />
        <CookieBanner />
      </body>
    </html>
  );
}
