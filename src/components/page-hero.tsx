"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  backgroundImage: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  badge,
  backgroundImage,
  align = "center",
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative h-[70vh] min-h-[480px] w-full flex items-center overflow-hidden",
        align === "center" ? "justify-center" : "justify-start",
        className
      )}
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover opacity-90 dark:opacity-30 brightness-75 dark:brightness-100"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />

      <motion.div
        className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            align === "center" ? "max-w-4xl mx-auto text-center" : "max-w-4xl text-left"
          )}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass border border-primary/20 text-sm font-semibold text-primary"
              )}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-balance text-foreground"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8 mx-auto"
            >
              {subtitle}
            </motion.div>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
