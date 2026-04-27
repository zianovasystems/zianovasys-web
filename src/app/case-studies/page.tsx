import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Clock, Zap } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Healthcare Provider MVP",
    client: "MedTech Startup",
    challenge: "The client needed a rapid MVP for a patient monitoring system to secure Series A funding. The existing process was manual and error-prone.",
    solution: "We built a scalable web platform using Next.js and Python, integrating IoT device data streams with a real-time analytics dashboard.",
    results: [
      { metric: "30%", label: "Faster Deployment" },
      { metric: "99.9%", label: "System Uptime" },
      { metric: "Seed", label: "Funding Secured" },
    ],
    icon: Clock,
  },
  {
    title: "E-Commerce Recommendation Engine",
    client: "Fashion Retailer",
    challenge: "Low conversion rates due to generic product listings. Customers struggled to find relevant items in a large catalog.",
    solution: "Implemented an AI-driven suggestion engine utilizing Collaborative Filtering and NLP to personalize product feeds for every user.",
    results: [
      { metric: "40%", label: "Increase in CTR" },
      { metric: "25%", label: "Revenue Growth" },
      { metric: "15%", label: "Cart Abandonment Drop" },
    ],
    icon: Zap,
  },
  {
    title: "Logistics Optimization System",
    client: "Regional Logistics Firm",
    challenge: "Rising fuel costs and inefficient route planning were eating into profit margins.",
    solution: "Developed a custom route optimization algorithm integrated with their existing fleet management software.",
    results: [
      { metric: "20%", label: "Fuel Cost Reduction" },
      { metric: "35%", label: "Efficiency Gain" },
      { metric: "2x", label: "Delivery Capacity" },
    ],
    icon: BarChart3,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Case Studies"
        align="left"
        title={
          <>
            Measurable Impact <br />
            <span className="text-gradient-static">Across Enterprise Systems</span>
          </>
        }
        subtitle="We help organizations solve complex challenges where precision, compliance, and scalability matter most — delivering tangible improvements across operations and decision-making."
        backgroundImage="/images/imgi_64_rs=w_2320,h_1450.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="grid gap-8 md:gap-10">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group overflow-hidden glass-card hover-lift relative"
              >
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="grid md:grid-cols-12 gap-0 relative">
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg shadow-primary/20">
                        <study.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-primary font-bold tracking-wide uppercase text-xs">
                        {study.client}
                      </span>
                    </div>
                    <CardTitle className="font-headline text-2xl md:text-3xl mb-6">
                      {study.title}
                    </CardTitle>
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-bold text-xs text-foreground/70 uppercase tracking-wider mb-1">
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-foreground/70 uppercase tracking-wider mb-1">
                          The Solution
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8 md:p-10 flex flex-col justify-center md:border-l border-t md:border-t-0 border-border/50">
                    <h4 className="font-bold text-center text-xs uppercase tracking-wider text-foreground/70 mb-6">
                      Key Results
                    </h4>
                    <div className="space-y-6">
                      {study.results.map((res, i) => (
                        <div key={i} className="text-center">
                          <div className="text-4xl md:text-5xl font-headline font-extrabold text-gradient-static">
                            {res.metric}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Ready to write your <span className="text-gradient-static">success story?</span>
            </h3>
            <Button
              asChild
              size="lg"
              className="group rounded-full h-14 px-8 bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
