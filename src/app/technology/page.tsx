import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Modern, secure, and scalable architecture: distributed microservices, AI-enabled pipelines, cloud-native infrastructure across Java, Python, Node.js, AWS, GCP, and Kubernetes.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology Stack | Zianova",
    description: "Modern, secure, and scalable architecture.",
    url: "/technology",
  },
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, Database, Layers, Lock, Server } from "lucide-react";

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
      <PageHero
        badge="Technology"
        align="left"
        title={
          <>
            Modern, Secure, & <br />
            <span className="text-gradient-static">Scalable Architecture</span>
          </>
        }
        subtitle="Our engineering teams build resilient, enterprise-ready systems using proven architectural patterns and modern technology stacks. From distributed microservices to AI-enabled pipelines, we ensure every solution is designed for performance, security, and long-term evolution."
        backgroundImage="/images/imgi_63_rs=w_1160,h_690.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Tech Stack
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
              Powered by the <span className="text-gradient-static">best tools</span>
            </h2>
            <p className="text-lg text-muted-foreground w-full max-w-2xl mx-auto">
              We choose the right tools for the job, favoring open-source technologies with strong community support and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group glass-card hover-lift relative overflow-hidden"
              >
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader className="text-center">
                  <div className="mx-auto bg-gradient-to-br from-primary to-accent p-4 rounded-2xl w-fit mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <tech.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-xl">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-center space-y-2">
                    {tech.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item}
                      </li>
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                Architecture
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
                Resilient <span className="text-gradient-static">Microservices</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build systems designed to scale. By decoupling components into microservices, we ensure that your application can handle increased load, is easier to maintain, and can evolve rapidly without breaking existing functionality.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Layers, title: "Modular Design", desc: "Independent services that can be developed and deployed separately." },
                  { icon: Lock, title: "Security First", desc: "Built-in authentication, authorization, and data encryption at rest and in transit." },
                  { icon: Cloud, title: "Cloud Native", desc: "Optimized for cloud environments (AWS/GCP) using Docker and Kubernetes." },
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                      <feat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <strong className="block text-foreground">{feat.title}</strong>
                      <span className="text-muted-foreground">{feat.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-border/50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm relative">
                {[
                  { Icon: Server, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/40", text: "text-blue-400", label: "API Gateway" },
                  { Icon: Code2, color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/40", text: "text-emerald-400", label: "Service A" },
                  { Icon: Database, color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/40", text: "text-purple-400", label: "Database" },
                  { Icon: Code2, color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/40", text: "text-orange-400", label: "Service B" },
                ].map(({ Icon, color, border, text, label }, i) => (
                  <div
                    key={i}
                    className={`aspect-square bg-gradient-to-br ${color} ${border} ${text} rounded-2xl border flex items-center justify-center flex-col backdrop-blur-sm`}
                  >
                    <Icon className="h-8 w-8 mb-2" />
                    <span className="text-xs font-mono">{label}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
