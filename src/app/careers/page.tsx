import { AnimatedSection } from "@/components/animated-section";
import { CareerForm } from "@/components/career-form";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Database, Globe } from "lucide-react";

const perks = [
  {
    icon: Code,
    title: "Modern Tech Stack",
    desc: "Work with the latest technologies like Next.js, AI/ML, and Cloud.",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    desc: "Flexible work arrangements to help you maintain work-life balance.",
  },
  {
    icon: Database,
    title: "Impactful Work",
    desc: "Contribute to products like MedisVoice that transform medical workflows.",
  },
  {
    icon: Briefcase,
    title: "Growth",
    desc: "Opportunities for professional development and career advancement.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="We're Hiring"
        title={
          <>
            Join Our <span className="text-gradient-static">Team</span>
          </>
        }
        subtitle="Build the future of healthcare technology with us. We are always looking for talented individuals to join our mission."
        backgroundImage="/images/imgi_66_rs=w_1200,h_600,cg_true.webp"
      />

      <div className="container mx-auto px-4 section-padding">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  Why Zianova
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                  Why Work <span className="text-gradient-static">With Us?</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Zianova, we foster a culture of innovation, collaboration, and continuous learning. You&apos;ll work on cutting-edge AI projects that have a real-world impact.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {perks.map((perk, i) => (
                  <Card
                    key={i}
                    className="group glass-card hover-lift relative overflow-hidden"
                  >
                    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    <CardHeader className="pb-2">
                      <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl w-fit shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 mb-3">
                        <perk.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{perk.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="glass-card relative overflow-hidden border-primary/20 shadow-xl shadow-primary/10">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
              <CardHeader className="relative">
                <CardTitle className="font-headline text-3xl tracking-tighter">Apply Now</CardTitle>
                <p className="text-muted-foreground">Share your details with us. We review every application carefully.</p>
              </CardHeader>
              <CardContent className="relative">
                <CareerForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
