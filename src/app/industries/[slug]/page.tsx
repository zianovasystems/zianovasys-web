import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getIndustry, industries } from "@/lib/industries";

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.title} — AI Solutions`,
    description: industry.short,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `AI for ${industry.title} | Zianova`,
      description: industry.short,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const Icon = industry.icon;

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge={industry.title}
        align="left"
        title={
          <>
            AI Solutions for <span className="text-gradient-static">{industry.title}</span>
          </>
        }
        subtitle={industry.long}
        backgroundImage="/images/imgi_117_rs=w_3070,m.webp"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full h-14 px-8 bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30"
        >
          <Link href="/contact">
            Discuss your {industry.title} project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <div className="container mx-auto px-4 section-padding max-w-6xl space-y-20">
        {/* Challenges */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                The challenges
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                What <span className="text-gradient-static">{industry.title}</span> teams hit
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The patterns we see across {industry.title} engagements — and the work that moves the needle.
              </p>
            </div>
            <ul className="space-y-4">
              {industry.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-2xl glass-card">
                  <span className="mt-0.5 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-foreground/85 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Capabilities */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              How Zianova helps
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
              Capabilities for <span className="text-gradient-static">{industry.title}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.capabilities.map((cap, i) => (
              <Card key={i} className="group glass-card hover-lift relative overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl shadow-lg shadow-primary/20">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-xl">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Stack + Outcome */}
        <AnimatedSection>
          <div className="rounded-3xl glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                  Typical stack
                </span>
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                  Tools we reach for
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-muted/60 border border-border/60 text-sm font-medium text-foreground/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                  Outcome
                </span>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                  &ldquo;{industry.outcome}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center">
            <h3 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Ready to ship AI in <span className="text-gradient-static">{industry.title}</span>?
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="group rounded-full h-13 px-7 bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30"
              >
                <Link href="/contact">
                  Talk to our team
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-13 px-7">
                <Link href="/industries">
                  <ArrowLeft className="mr-2 h-5 w-5" /> All industries
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
