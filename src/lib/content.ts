/**
 * COUCHE D'ACCÈS AU CONTENU — point unique de vérité.
 * Aujourd'hui : lit les fichiers content/*.ts.
 * Demain (CMS Sanity) : on remplace l'implémentation de CES fonctions
 * (fetch GROQ) SANS toucher aux pages. C'est le découplage "prêt pour CMS".
 */
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { posts } from "@/content/posts";
import { jobs } from "@/content/jobs";
import type { Project, Service, Post, Job, ServiceCategory } from "@/types";

export async function getProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => b.year - a.year);
}
export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.featured).slice(0, limit);
}
export async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}
export async function getProjectsByCategory(cat: ServiceCategory): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.category === cat);
}

export async function getServices(): Promise<Service[]> {
  return services;
}
export async function getService(slug: string): Promise<Service | undefined> {
  return services.find((s) => s.slug === slug);
}

export async function getPosts(): Promise<Post[]> {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export async function getPost(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}

export async function getJobs(): Promise<Job[]> {
  return jobs;
}
export async function getJob(slug: string): Promise<Job | undefined> {
  return jobs.find((j) => j.slug === slug);
}
