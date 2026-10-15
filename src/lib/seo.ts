import type { Metadata } from "next";
import { business } from "@/data/business";

export const SITE_URL = business.siteUrl;
export const DEFAULT_OG_IMAGE = "/images/image.webp";

/**
 * Builds consistent per-page metadata: title, description, canonical URL,
 * Open Graph and Twitter cards. The layout's title template appends the brand,
 * so pass the page title WITHOUT "| H K Tours and Travels".
 */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url,
      siteName: business.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${business.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${business.name}`,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
