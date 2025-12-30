import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Clock, Zap } from "lucide-react";
import Image from "next/image";
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
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/imgi_64_rs=w_2320,h_1450.webp"
                        alt="Case Studies Background"
                        fill
                        className="object-cover opacity-100 dark:opacity-40 brightness-75"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent/5" />

                <AnimatedSection className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl text-left">
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                            Measurable Impact <br /> <span className="text-primary">Across Enterprise Systems</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-medium leading-relaxed mb-8">
                            We help organizations solve complex challenges where precision, compliance, and scalability matter most — delivering tangible improvements across operations and decision-making.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-4 py-16">
                <AnimatedSection>
                    <div className="grid gap-12">
                        {caseStudies.map((study, index) => (
                            <Card key={index} className="overflow-hidden border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="grid md:grid-cols-12 gap-0">
                                    <div className="md:col-span-8 p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm mb-2">
                                            <study.icon className="h-4 w-4" />
                                            {study.client}
                                        </div>
                                        <CardTitle className="font-headline text-2xl md:text-3xl mb-4 text-gray-900">{study.title}</CardTitle>
                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900 uppercase">The Challenge</h4>
                                                <p className="text-muted-foreground">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900 uppercase">The Solution</h4>
                                                <p className="text-muted-foreground">{study.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-4 bg-gray-50 dark:bg-gray-900 p-8 flex flex-col justify-center border-l border-border/50">
                                        <h4 className="font-bold text-center mb-6 text-gray-900">Key Results</h4>
                                        <div className="space-y-6">
                                            {study.results.map((res, i) => (
                                                <div key={i} className="text-center">
                                                    <div className="text-4xl font-bold text-primary">{res.metric}</div>
                                                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{res.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to write your success story?</h3>
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">
                                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
