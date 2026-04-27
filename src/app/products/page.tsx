import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "MedisVoice and other AI-driven products from Zianova — purpose-built for high-stakes enterprise problems where intelligence creates the greatest impact.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Zianova",
    description: "AI-driven solutions built for enterprise scale.",
    url: "/products",
  },
};
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, FileCheck, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Mic,
    title: "Speak Once.",
    desc: "Capture the full patient story in a single natural conversation.",
  },
  {
    icon: FileCheck,
    title: "Document Perfectly.",
    desc: "Zero-error transcription and structuring of clinical notes.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Medical Documentation.",
    desc: "Advanced NLP models trained specifically for medical terminology and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Healthcare Professionals Worldwide.",
    desc: "Secure, compliant, and reliable for high-stakes clinical environments.",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Our Products"
        title={
          <>
            AI-Driven Solutions <br />
            <span className="text-gradient-static">Built for Enterprise Scale</span>
          </>
        }
        subtitle="Zianova delivers purpose-built AI solutions that address complex, high-stakes business problems, applying intelligence exactly where it creates the greatest impact."
        backgroundImage="/images/imgi_118_rs=w_3070,m.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-gradient-shift bg-[length:200%_auto]" />
            <div className="relative glass-card rounded-3xl p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <div className="flex items-center space-x-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30">
                      <Stethoscope className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter">
                      MedisVoice
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transforming patient interactions into structured medical records instantly.
                  </p>
                  <ul className="space-y-5">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-2.5 rounded-xl mt-0.5 group-hover/item:scale-110 transition-transform">
                          <f.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg leading-snug">{f.title}</h3>
                          <p className="text-muted-foreground">{f.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="group rounded-full h-13 px-7 bg-gradient-to-r from-primary to-accent shadow-xl shadow-primary/30"
                    >
                      <a href="https://medisvoice.com" target="_blank" rel="noopener noreferrer">
                        Visit MedisVoice
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-7">
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="aspect-video bg-muted/50 relative">
                      <Image
                        src="/images/medisvoice-product.png"
                        alt="MedisVoice Interface"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
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
