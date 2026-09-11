import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hktoursandtravels.in";
  const routes = [
    "",
    "/about",
    "/tours",
    "/fleet",
    "/services",
    "/destinations",
    "/gallery",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
