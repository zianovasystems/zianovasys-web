import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "AI & ML, custom software, cloud solutions, database management, business intelligence, and ERP/CRM systems — high-impact, AI-driven solutions for the enterprise.",
  alternates: { canonical: "/what-we-do" },
  openGraph: {
    title: "What We Do | Zianova",
    description: "High-impact, AI-driven solutions across six service areas.",
    url: "/what-we-do",
  },
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatWeDoItems } from "@/lib/data";

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="What We Do"
        title={
          <>
            High-impact, <span className="text-gradient-static">AI-driven</span> solutions
          </>
        }
        subtitle="We help enterprises solve high-impact problems using AI-driven, point-precision solutions tailored to real-world business and engineering needs."
        backgroundImage="/images/imgi_64_rs=w_2320,h_1450.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whatWeDoItems.map((item) => (
              <Card
                key={item.id}
                className="group glass-card hover-lift relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader className="items-center text-center">
                  <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl w-fit shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <item.Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline mt-6 text-xl md:text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
