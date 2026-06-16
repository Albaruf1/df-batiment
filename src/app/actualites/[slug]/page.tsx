import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getPost, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await getPost(params.slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.excerpt, path: `/actualites/${p.slug}`, image: p.cover });
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src={post.cover} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-df-ink via-df-ink/50 to-df-ink/30" />
        <Container className="absolute inset-x-0 bottom-0 z-10 pb-12">
          <Link href="/actualites" className="font-mono text-[10px] uppercase tracking-[0.14em] text-df-paper/70 hover:text-df-blue-soft">← Actualités</Link>
          <span className="mt-4 block font-mono text-xs uppercase tracking-[0.14em] text-df-blue-soft">{post.category} · {new Date(post.date).toLocaleDateString("fr-BE", { day: "numeric", month: "long", year: "numeric" })}</span>
          <h1 className="mt-2 max-w-[24ch] font-arch text-[clamp(30px,5vw,60px)] font-extrabold leading-[1] tracking-tight text-df-paper">{post.title}</h1>
        </Container>
      </section>
      <article className="py-20">
        <Container className="max-w-[72ch]">
          <p className="text-xl leading-relaxed text-df-paper/85">{post.excerpt}</p>
          <div className="mt-8 whitespace-pre-line leading-relaxed text-df-paper/75">{post.body}</div>
          {post.todo && <p className="mt-10 border border-df-blue/30 bg-df-blue/10 p-4 font-mono text-[10px] uppercase tracking-wide text-df-blue-soft">TODO — Article de démonstration : rédiger le contenu réel optimisé SEO.</p>}
        </Container>
      </article>
    </>
  );
}
