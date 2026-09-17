import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://cfw.mkweli.tech/sitemap.xml",
    host: "https://cfw.mkweli.tech",
  };
}
