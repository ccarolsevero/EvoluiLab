import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const marketingPaths = [
  "/",
  "/advogados",
  "/nutricionistas",
  "/medicos",
  "/dentistas",
  "/psicologos",
  "/arquitetos",
  "/consultores",
  "/clinicas",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return marketingPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
