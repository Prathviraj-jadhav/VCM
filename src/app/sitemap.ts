import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vibecreatemedia.com";
  
  const pages = [
    "",
    "#about",
    "#services",
    "#ugc",
    "#case-studies",
    "#blog",
    "#careers",
    "#contact",
    "#privacy",
    "#terms",
    "#sitemap"
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
