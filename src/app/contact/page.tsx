import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/imgi_65_rs=w_2320,h_1566.webp"
            alt="Contact Background"
            fill
            className="object-cover opacity-100 dark:opacity-40 brightness-50"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-background" />

        <AnimatedSection className="w-full relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Have a project in mind or want to learn more? We&apos;d love to hear from you.
          </p>
        </AnimatedSection>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-muted-foreground">Icon Meadows, Road Number 1, Huda, Neknampur, Telangana, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <a href="mailto:shaik.m.rafi@zianovasys.com" className="text-muted-foreground hover:text-primary transition-colors">info@zianovasys.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <a href="tel:+919742797837" className="text-muted-foreground hover:text-primary transition-colors">+91 97427 97837</a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
