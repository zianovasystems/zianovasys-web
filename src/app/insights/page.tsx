import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { insightsPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical writing on enterprise AI strategy, delivery, model selection, and the hidden costs of putting AI into production.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Zianova",
    description: "Practical writing on enterprise AI delivery.",
    url: "/insights",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function InsightsPage() {
  const posts = [...insightsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Insights"
        title={
          <>
            Practical notes on <span className="text-gradient-static">enterprise AI</span>
          </>
        }
        subtitle="Field notes from the work — what actually ships, what doesn't, and why. No hype."
        backgroundImage="/images/imgi_64_rs=w_2320,h_1450.webp"
      />

      <div className="container mx-auto px-4 section-padding max-w-5xl">
        <AnimatedSection>
          <div className="grid gap-6 md:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                aria-label={`Read: ${post.title}`}
                className="group block"
              >
                <Card className="relative glass-card hover-lift overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-2">
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
                    <CardTitle className="font-headline text-2xl md:text-3xl group-hover:text-primary transition-colors">
                      <span className="inline-flex items-start gap-2">
                        {post.title}
                        <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
