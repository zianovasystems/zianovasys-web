"use client";

import { motion } from "framer-motion";
import { AnimatedSection, staggerItem } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { galleryItems, whyChooseUsItems } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "120+", label: "AI Projects Delivered" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "24/7", label: "Expert Support" },
];

const whyIcons = [Sparkles, Zap, ShieldCheck];

export default function Home() {
  const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <div className="flex flex-col items-center">
      {/* HERO */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/imgi_117_rs=w_3070,m.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Left-weighted dark gradient for readability without washing out the image */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/40" />
        {/* Bottom fade so the hero blends into the page background */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

        {/* Floating decorative orbs */}
        <motion.div
          className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium shadow-lg shadow-black/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-white/90">AI-Powered Enterprise Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05] text-balance text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
            >
              Solving Complex{" "}
              <span className="text-gradient">Enterprise Problems</span>
              <br className="hidden md:block" /> with AI-Driven Precision
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-2xl text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
            >
              Zianova delivers AI-powered, high-precision solutions that address complex business and engineering challenges across industries — from strategy to scalable implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group h-14 px-8 text-base rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
              >
                <Link href="/contact">
                  Talk to Our AI Experts
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white hover:border-white/60"
              >
                <Link href="/contact">Request Enterprise Consultation</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 max-w-3xl"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-5 text-center md:text-left shadow-lg shadow-black/10"
                >
                  <div className="text-2xl md:text-3xl font-headline font-extrabold text-gradient-static">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-slate-300">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-slate-300/40 flex justify-center pt-2"
          >
            <span className="block h-2 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <AnimatedSection className="w-full max-w-7xl px-4 section-padding" id="why-us">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Why Zianova
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            Built for <span className="text-gradient-static">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            We deliver excellence and innovation in every project — from concept to enterprise-scale deployment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUsItems.map((item, index) => {
            const Icon = whyIcons[index % whyIcons.length] ?? CheckCircle2;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group relative h-full glass-card overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-gradient-to-br from-primary to-accent p-3 rounded-2xl">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="font-headline text-xl md:text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* GALLERY */}
      <AnimatedSection className="w-full section-padding" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              Our Work
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              Software <span className="text-gradient-static">Gallery</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              A glimpse into our innovative solutions powering enterprises worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, idx) => {
              const image = findImage(item.imageId);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                >
                  <Link href={item.href} aria-label={`View ${item.title}`} className="block h-full">
                    <Card className="group cursor-pointer overflow-hidden h-full border-border/60 bg-card/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                      {image && (
                        <div className="relative aspect-video overflow-hidden bg-slate-900">
                          <Image
                            src={image.imageUrl}
                            alt={item.title}
                            width={600}
                            height={400}
                            data-ai-hint={image.imageHint}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 text-xs font-semibold text-foreground/90">
                              {item.category}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full p-3 shadow-xl">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="w-full section-padding" animation="scale">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 md:p-16 text-center shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
              className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mb-4 text-balance">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Partner with Zianova to unlock AI-driven precision and engineering excellence.
              </p>
              <Button
                asChild
                size="lg"
                className="group h-14 px-8 text-base rounded-full bg-background text-foreground hover:bg-background/90 shadow-xl"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
