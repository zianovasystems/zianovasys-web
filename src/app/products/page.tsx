import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Database, Workflow, Mic, FileCheck, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
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
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">AI-Driven Solutions <br /> Built for Enterprise Scale</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
                        Zianova delivers purpose-built AI solutions that address complex, high-stakes business problems, applying intelligence exactly where it creates the greatest impact.
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
                                        <div className="h-12 w-12 rounded-lg bg-gray-900 flex items-center justify-center shadow-lg">
                                            <Stethoscope className="h-6 w-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold font-headline">MedisVoice</h2>
                                    </div>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Transforming patient interactions into structured medical records instantly.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Mic className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">Speak Once.</h3>
                                                <p className="text-muted-foreground">Capture the full patient story in a single natural conversation.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <FileCheck className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">Document Perfectly.</h3>
                                                <p className="text-muted-foreground">Zero-error transcription and structuring of clinical notes.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <Sparkles className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">AI-Powered Medical Documentation.</h3>
                                                <p className="text-muted-foreground">Advanced NLP models trained specifically for medical terminology and workflows.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                                <ShieldCheck className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">Trusted by Healthcare Professionals Worldwide.</h3>
                                                <p className="text-muted-foreground">Secure, compliant, and reliable for high-stakes clinical environments.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="pt-4 flex gap-4">
                                        <Button asChild size="lg" className="rounded-full">
                                            <a href="https://medisvoice.com" target="_blank" rel="noopener noreferrer">
                                                Visit MedisVoice <ArrowRight className="ml-2 h-5 w-5" />
                                            </a>
                                        </Button>
                                        <Button asChild size="lg" variant="outline" className="rounded-full">
                                            <Link href="/contact">
                                                Contact Sales
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50">
                                    <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                                        <Image
                                            src="/images/medisvoice-product.png"
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
