import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

const coreValues = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We constantly explore new technologies and ideas to deliver state-of-the-art solutions.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build strong, collaborative relationships with our clients, treating their success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Integrity",
    description: "We operate with transparency and honesty, ensuring trust and reliability in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="About Zianova"
        title={
          <>
            Engineering the future, <span className="text-gradient-static">together</span>
          </>
        }
        subtitle="We partner with organizations across industries to design, build, and scale intelligent systems that optimize operations, enhance decision-making, and unlock measurable business value."
        backgroundImage="/images/imgi_62_rs=w_2320,h_1547.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/imgi_66_rs=w_1200,h_600,cg_true.webp"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="object-cover w-full transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="team business"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Our Mission
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
                Catalysts for <span className="text-gradient-static">innovation</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to be the catalyst for innovation, providing small and medium-sized businesses with the cutting-edge tools and technologies needed to thrive in a digital-first world. We believe in building partnerships, not just products, to ensure long-term success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By combining our expertise in AI, cloud computing, and custom software development, we help our clients overcome challenges, unlock new opportunities, and achieve sustainable growth.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-24 md:mt-32">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              Our Values
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              The principles that <span className="text-gradient-static">guide us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, idx) => (
              <Card
                key={idx}
                className="group glass-card text-center hover-lift overflow-hidden relative"
              >
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-br from-primary to-accent p-5 rounded-2xl w-fit shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-6">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
