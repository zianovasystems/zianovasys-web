import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatWeDoItems } from "@/lib/data";
import Image from "next/image";

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/imgi_64_rs=w_2320,h_1450.webp"
            alt="What We Do Background"
            fill
            className="object-cover opacity-100 dark:opacity-40 brightness-50"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-background" />

        <AnimatedSection className="w-full relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">What We Do</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            We help enterprises solve high-impact problems using AI-driven, point-precision solutions tailored to real-world business and engineering needs.
          </p>
        </AnimatedSection>
      </section>

      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoItems.map((item) => (
              <Card key={item.id} className="text-center flex flex-col">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit">
                    <item.Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
