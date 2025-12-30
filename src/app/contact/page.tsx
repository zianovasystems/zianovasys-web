import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to learn more? We&apos;d love to hear from you.
          </p>
        </div>
      </AnimatedSection>

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
                  <p className="text-muted-foreground">Icon Meadows, VP-20, Virugambakkam, Chennai-600092</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <a href="mailto:info@zianovasys.com" className="text-muted-foreground hover:text-primary transition-colors">info@zianovasys.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <a href="tel:+918754483754" className="text-muted-foreground hover:text-primary transition-colors">+91 87544 83754</a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
