import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatWeDoItems } from "@/lib/data";

export default function WhatWeDoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">What We Do</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of software development and AI services to help your business grow and innovate.
          </p>
        </div>
      </AnimatedSection>

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
  );
}
