import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Database, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/imgi_118_rs=w_3070,m.webp"
                        alt="Products Background"
                        fill
                        className="object-cover opacity-100 dark:opacity-40 brightness-50"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-background" />

                <AnimatedSection className="w-full relative z-10 container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">Our Products</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Innovative AI-driven solutions transforming healthcare workflows.
                    </p>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-4 py-16">
                <AnimatedSection>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-card ring-1 ring-border rounded-lg p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-3">
                                        <Bot className="h-10 w-10 text-primary" />
                                        <h2 className="text-3xl md:text-4xl font-bold font-headline">MedisVoice</h2>
                                    </div>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        AI-generated medical documentation product driven by AI in complete HMS (Hospital Management System) workflows.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Bot className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">AI-Driven Documentation</h3>
                                                <p className="text-muted-foreground">Automated generation of medical records using advanced natural language processing.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Workflow className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">Seamless HMS Integration</h3>
                                                <p className="text-muted-foreground">Integrates effortlessly with existing Hospital Management System workflows.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Database className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">Structured Data</h3>
                                                <p className="text-muted-foreground">Converts voice and unstructured notes into structured, queryable medical data.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="pt-4">
                                        <Button asChild size="lg" className="rounded-full">
                                            <Link href="/contact">
                                                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
                                    {/* Placeholder for product interface image */}
                                    <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                                        <Image
                                            src="/images/imgi_1_.webp"
                                            alt="MedisVoice Interface"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
