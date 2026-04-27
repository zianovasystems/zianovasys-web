import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "AI-driven solutions tailored for Healthcare, FinTech, eCommerce, Logistics, Real Estate, and Enterprise — driving efficiency and growth across sectors.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Transforming Industries with AI | Zianova",
    description: "Cutting-edge automation and machine learning across six industries.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Industries We Serve"
        align="left"
        title={
          <>
            Transforming <span className="text-gradient-static">Industries</span> with AI
          </>
        }
        subtitle="We apply cutting-edge automation and machine learning to solve industry-specific challenges, driving efficiency and growth across sectors."
        backgroundImage="/images/imgi_117_rs=w_3070,m.webp"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full h-14 px-8 bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all"
        >
          <Link href="/contact">
            Discuss your industry needs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  aria-label={`Open ${item.title} industry detail`}
                  className="group block h-full"
                >
                  <Card className="relative glass-card hover-lift overflow-hidden h-full">
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-2xl flex-1">{item.title}</CardTitle>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.short}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
