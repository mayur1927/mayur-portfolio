import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE_CONFIG.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: SITE_CONFIG.url, lastModified: new Date() },
    ...projectRoutes,
  ];
}
