import type { MetadataRoute } from "next";

const BASE = "https://hitesh-portfolio-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/projects/chatbot",
    "/projects/opd-elevate-her",
    "/projects/icici-lombard",
    "/projects/home-insurance",
    "/projects/cineplex",
    "/projects/cms",
  ];

  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
