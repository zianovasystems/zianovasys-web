import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, Database, Layers, Lock, Server } from "lucide-react";
import Image from "next/image";

const technologies = [
    {
        category: "Backend & Systems",
        items: ["Java", "Spring Boot", "Node.js", "Python", "Go"],
        icon: Server,
    },
    {
        category: "Frontend & Mobile",
        items: ["React.js", "Next.js", "TypeScript", "React Native", "Flutter"],
        icon: Code2,
    },
    {
        category: "Data & AI",
        items: ["PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "OpenAI API"],
        icon: Database,
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD Pipelines"],
        icon: Cloud,
    },
];

export default function TechnologyPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-start overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/imgi_63_rs=w_1160,h_690.webp"
                        alt="Technology Background"
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
                            Modern, Secure, & <br /> <span className="text-primary">Scalable Architecture</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl font-medium leading-relaxed mb-8">
                            Our engineering teams build resilient, enterprise-ready systems using proven architectural patterns and modern technology stacks. From distributed microservices to AI-enabled pipelines, we ensure every solution is designed for performance, security, and long-term evolution.
                        </p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto px-4 py-16">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Tech Stack</h2>
                        <p className="text-lg text-muted-foreground w-full max-w-2xl mx-auto">
                            We choose the right tools for the job, favoring open-source technologies with strong community support and enterprise-grade reliability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {technologies.map((tech, index) => (
                            <Card key={index} className="bg-card hover:bg-muted/50 transition-colors border-t-4 border-t-primary shadow-sm">
                                <CardHeader className="text-center">
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                        <tech.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-lg">{tech.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="text-center space-y-2">
                                        {tech.items.map((item, i) => (
                                            <li key={i} className="text-muted-foreground font-medium">{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-headline text-3xl font-bold">Resilient Microservices Architecture</h2>
                            <p className="text-lg text-muted-foreground">
                                We build systems that are designed to scale. By decoupling components into microservices, we ensure that your application can handle increased load, is easier to maintain, and can evolve rapidly without breaking existing functionality.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Layers className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Modular Design</strong>
                                        <span className="text-muted-foreground">Independent services that can be developed and deployed separately.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Lock className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Security First</strong>
                                        <span className="text-muted-foreground">Built-in authentication, authorization, and data encryption at rest and in transit.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Cloud className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <strong className="block text-foreground">Cloud Native</strong>
                                        <span className="text-muted-foreground">Optimized for cloud environments (AWS/GCP) using Docker and Kubernetes.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 flex items-center justify-center p-8">
                            {/* Abstract representation of architecture */}
                            <div className="grid grid-cols-2 gap-8 w-full max-w-sm opacity-80">
                                <div className="aspect-square bg-blue-500/20 rounded-lg border border-blue-500 flex items-center justify-center flex-col text-blue-400">
                                    <Server className="h-8 w-8 mb-2" />
                                    <span className="text-xs font-mono">API Gateway</span>
                                </div>
                                <div className="aspect-square bg-green-500/20 rounded-lg border border-green-500 flex items-center justify-center flex-col text-green-400">
                                    <Code2 className="h-8 w-8 mb-2" />
                                    <span className="text-xs font-mono">Service A</span>
                                </div>
                                <div className="aspect-square bg-purple-500/20 rounded-lg border border-purple-500 flex items-center justify-center flex-col text-purple-400">
                                    <Database className="h-8 w-8 mb-2" />
                                    <span className="text-xs font-mono">Database</span>
                                </div>
                                <div className="aspect-square bg-orange-500/20 rounded-lg border border-orange-500 flex items-center justify-center flex-col text-orange-400">
                                    <Code2 className="h-8 w-8 mb-2" />
                                    <span className="text-xs font-mono">Service B</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
