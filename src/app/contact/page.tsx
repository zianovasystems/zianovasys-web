import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project. Email info@zianovasys.com or send a message — we typically reply within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Zianova",
    description: "Have a project in mind? We'd love to hear from you.",
    url: "/contact",
  },
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="Let's Talk"
        title={
          <>
            Get in <span className="text-gradient-static">Touch</span>
          </>
        }
        subtitle="Have a project in mind or want to learn more? We'd love to hear from you."
        backgroundImage="/images/imgi_65_rs=w_2320,h_1566.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-left">
            <Card className="glass-card relative overflow-hidden border-primary/20 shadow-xl shadow-primary/5">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
              <CardHeader className="relative">
                <CardTitle className="font-headline text-3xl tracking-tighter">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your project and we&apos;ll be in touch shortly.
                </p>
              </CardHeader>
              <CardContent className="relative">
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Contact Info
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter">
                  Get in <span className="text-gradient-static">Touch</span>
                </h2>
              </div>
              <div className="space-y-5">
                <div className="group flex items-start gap-4 p-5 rounded-2xl glass-card hover-lift">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Icon Meadows, Road Number 1, Huda, Neknampur, Telangana, India
                    </p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 p-5 rounded-2xl glass-card hover-lift">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-2xl shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <a
                      href="mailto:info@zianovasys.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@zianovasys.com
                    </a>
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
