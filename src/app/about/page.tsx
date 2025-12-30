import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Handshake, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find(img => img.imageHint.includes("team"));

  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/imgi_62_rs=w_2320,h_1547.webp"
            alt="About Background"
            fill
            className="object-cover opacity-100 dark:opacity-40 brightness-50"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-background" />

        <AnimatedSection className="w-full relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">About Zianova</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We are a dynamic team of developers, designers, and strategists dedicated to empowering startups and SMBs through innovative software solutions.
          </p>
        </AnimatedSection>
      </section>

      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/imgi_66_rs=w_1200,h_600,cg_true.webp"
                alt="Our Team"
                width={800}
                height={600}
                className="object-cover"
                data-ai-hint="team business"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                Our mission is to be the catalyst for innovation, providing small and medium-sized businesses with the cutting-edge tools and technologies needed to thrive in a digital-first world. We believe in building partnerships, not just products, to ensure long-term success.
              </p>
              <p className="text-muted-foreground text-lg">
                By combining our expertise in AI, cloud computing, and custom software development, we help our clients overcome challenges, unlock new opportunities, and achieve sustainable growth.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-2">The principles that guide our work.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We constantly explore new technologies and ideas to deliver state-of-the-art solutions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We build strong, collaborative relationships with our clients, treating their success as our own.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We operate with transparency and honesty, ensuring trust and reliability in everything we do.</p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
