import { AnimatedSection } from "@/components/animated-section";
import { CareerForm } from "@/components/career-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Database, Globe } from "lucide-react";
import Image from "next/image";

export default function CareersPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/imgi_66_rs=w_1200,h_600,cg_true.webp"
                        alt="Careers Background"
                        fill
                        className="object-cover opacity-100 dark:opacity-40 brightness-50"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-background" />

                <AnimatedSection className="w-full relative z-10 container mx-auto px-4 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">Join Our Team</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Build the future of healthcare technology with us. We are always looking for talented individuals to join our mission.
                    </p>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    <AnimatedSection>
                        <div className="space-y-8">
                            <div className="text-left">
                                <h2 className="font-headline text-3xl font-bold mb-4">Why Work With Us?</h2>
                                <p className="text-muted-foreground text-lg mb-6">
                                    At Zianova, we foster a culture of innovation, collaboration, and continuous learning. You'll work on cutting-edge AI projects that have a real-world impact.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <Card className="bg-card/50 border-border/60">
                                    <CardHeader className="pb-2">
                                        <Code className="h-8 w-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">Modern Tech Stack</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Work with the latest technologies like Next.js, AI/ML, and Cloud.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 border-border/60">
                                    <CardHeader className="pb-2">
                                        <Globe className="h-8 w-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">Remote Friendly</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Flexible work arrangements to help you maintain work-life balance.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 border-border/60">
                                    <CardHeader className="pb-2">
                                        <Database className="h-8 w-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">Impactful Work</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Contribute to products like MedisVoice that transform medical workflows.</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 border-border/60">
                                    <CardHeader className="pb-2">
                                        <Briefcase className="h-8 w-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">Growth</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">Opportunities for professional development and career advancement.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <Card className="border-primary/20 shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Apply Now</CardTitle>
                                <p className="text-muted-foreground">Share your details with us. We review every application carefully.</p>
                            </CardHeader>
                            <CardContent>
                                <CareerForm />
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
