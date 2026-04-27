import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { getInsight, insightsPosts } from "@/lib/insights";
import { insightsBodies } from "@/lib/insights-content";

type RouteParams = { params: Promise<{ slug: string }> };

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zianovasys.com";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return insightsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/insights/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function InsightDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();
  const body = insightsBodies[post.slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Zianova",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${post.slug}` },
  };

  const others = insightsPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-5">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {dateFormatter.format(new Date(post.date))}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTimeMin} min read
            </span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold normal-case tracking-normal"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] text-balance mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <div className="container mx-auto px-4 max-w-3xl pb-20">
        <AnimatedSection>{body}</AnimatedSection>
      </div>

      {/* Related + CTA */}
      <div className="container mx-auto px-4 max-w-5xl pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/60 p-8 md:p-12 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
            Working on something like this?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            We help enterprise teams ship AI features that survive the round-trip from POC to production.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-7 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30"
          >
            <Link href="/contact">
              Talk to our team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {others.length > 0 && (
          <div className="mt-16">
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-6">More insights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group block p-6 rounded-2xl glass-card hover-lift"
                >
                  <h4 className="font-headline font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
