import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileConversionBar from "@/components/MobileConversionBar";
import PopupLeadForm from "@/components/PopupLeadForm";

export const metadata: Metadata = {
  metadataBase: new URL("https://hktoursandtravels.in"),
  title: {
    default: "H K Tours and Travels | Premium Group Travel, Bengaluru",
    template: "%s | H K Tours and Travels",
  },
  description:
    "H K Tours and Travels offers premium group transportation in Bengaluru — corporate travel, wedding transportation, outstation journeys and family tours. Rated 4.7/5 from 40 Google reviews.",
  openGraph: {
    title: "H K Tours and Travels | Premium Group Travel, Bengaluru",
    description:
      "Premium travel and group transportation for corporate events, weddings, family journeys and outstation getaways in Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "H K Tours and Travels",
    description:
      "Premium group transportation for corporate, wedding, family and outstation travel in Bengaluru.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "H K Tours and Travels",
              image: "/images/logo.png",
              telephone: "+91-93421-59337",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "38, Andrahalli Main Road, Opp. Andhra Bank, D Group Employees Layout, Vinayakanagara West",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560091",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "40",
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <MobileConversionBar />
        <PopupLeadForm />
      </body>
    </html>
  );
}
