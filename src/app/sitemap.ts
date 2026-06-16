import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getProjects, getServices, getPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const staticPaths = ["", "/realisations", "/expertises", "/methode", "/a-propos", "/recrutement", "/actualites", "/contact", "/demande-devis", "/espace-client"];
  const [projects, services, posts] = await Promise.all([getProjects(), getServices(), getPosts()]);

  return [
    ...staticPaths.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/expertises/${s.slug}`, lastModified: new Date() })),
    ...projects.map((p) => ({ url: `${base}/realisations/${p.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${base}/actualites/${p.slug}`, lastModified: new Date(p.date) }))
  ];
}
