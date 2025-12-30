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
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-start overflow-hidden">
        {/* Background Image - Fixed effect for parallax feel */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/imgi_117_rs=w_3070,m.webp"
            alt="Hero Background"
            fill
            className="object-cover opacity-100 dark:opacity-40 brightness-75"
            priority
          />
        </div>

        {/* Modern Gradient Overlay - Left weighted for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent/5" />

        <AnimatedSection className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-left">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-gray-900 drop-shadow-sm leading-tight">
              Zianova AiGen <br className="hidden md:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Systems Pvt Ltd</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-gray-600 mb-10 font-headline leading-relaxed">
              Empowering Innovation in Software Development for Startups and SMBs.
            </p>
            <div className="flex flex-wrap gap-6 justify-start">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-gray-300 hover:bg-gray-100 text-gray-900">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

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
