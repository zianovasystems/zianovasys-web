import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Banknote, Box, Building2, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const industries = [
    {
        title: "Healthcare",
        icon: Activity,
        description: "Empowering healthcare providers with AI-driven diagnostics, patient management systems, and interoperable EHR solutions to improve patient outcomes.",
    },
    {
        title: "FinTech",
        icon: Banknote,
        description: "Securing financial transactions with fraud detention AI, automating compliance, and building robust high-frequency trading platforms.",
    },
    {
        title: "eCommerce",
        icon: ShoppingCart,
        description: "Enhancing customer experiences through personalized recommendation engines, inventory optimization, and seamless omnichannel platforms.",
    },
    {
        title: "Logistics",
        icon: Truck,
        description: "Optimizing supply chains with predictive analytics, route optimization algorithms, and real-time fleet management systems.",
    },
    {
        title: "Real Estate",
        icon: Building2,
        description: "Transforming property management with smart building IoT integrations, virtual tours, and automated tenant services.",
    },
    {
        title: "Enterprise",
        icon: Box,
        description: "Streamlining operations for large organizations with custom ERPs, workflow automation, and data-driven decision support systems.",
    },
];

export default function IndustriesPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/imgi_117_rs=w_3070,m.webp"
                        alt="Industries Background"
                        fill
                        className="object-cover opacity-100 dark:opacity-40 brightness-75"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent/5" />

                <AnimatedSection className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl text-left">
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                            Transforming <span className="text-primary">Industries</span> with AI
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-medium leading-relaxed mb-8">
                            We apply cutting-edge automation and machine learning to solve industry-specific challenges, driving efficiency and growth across sectors.
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <Link href="/contact">
                                Discuss Your Industry Needs
                            </Link>
                        </Button>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-4 py-16">
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item, index) => (
                            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
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
