import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";

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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ArrowRight, Banknote, Box, Building2, ShoppingCart, Truck } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Healthcare",
    icon: Activity,
    description:
      "Empowering healthcare providers with AI-driven diagnostics, patient management systems, and interoperable EHR solutions to improve patient outcomes.",
  },
  {
    title: "FinTech",
    icon: Banknote,
    description:
      "Securing financial transactions with fraud detection AI, automating compliance, and building robust high-frequency trading platforms.",
  },
  {
    title: "eCommerce",
    icon: ShoppingCart,
    description:
      "Enhancing customer experiences through personalized recommendation engines, inventory optimization, and seamless omnichannel platforms.",
  },
  {
    title: "Logistics",
    icon: Truck,
    description:
      "Optimizing supply chains with predictive analytics, route optimization algorithms, and real-time fleet management systems.",
  },
  {
    title: "Real Estate",
    icon: Building2,
    description:
      "Transforming property management with smart building IoT integrations, virtual tours, and automated tenant services.",
  },
  {
    title: "Enterprise",
    icon: Box,
    description:
      "Streamlining operations for large organizations with custom ERPs, workflow automation, and data-driven decision support systems.",
  },
];

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
            Discuss Your Industry Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHero>

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {industries.map((item, index) => (
              <Card
                key={index}
                className="group relative glass-card hover-lift overflow-hidden"
              >
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
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
