import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { galleryItems, whyChooseUsItems } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="flex flex-col items-center">
      <AnimatedSection className="w-full">
        <section className="text-center py-20 lg:py-32 px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Zianova AiGen Systems
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 font-headline">
            Empowering Innovation in Software Development.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-6xl px-4 py-16" id="why-us">
         <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Why Choose Zianova?</h2>
          <p className="text-lg text-muted-foreground mt-2">We deliver excellence and innovation in every project.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full bg-background py-16" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Software Gallery</h2>
            <p className="text-lg text-muted-foreground mt-2">A glimpse into our innovative solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => {
              const image = findImage(item.imageId);
              return (
                <Card key={item.id} className="overflow-hidden group">
                  {image && (
                     <div className="aspect-video overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        width={600}
                        height={400}
                        data-ai-hint={image.imageHint}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                     </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
