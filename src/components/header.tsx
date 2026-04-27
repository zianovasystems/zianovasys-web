"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/definitions";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Wordmark } from "./icons";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      )}
    >
      <div className="container flex h-16 md:h-20 items-center">
        <div className="mr-4 flex">
          <Link
            href="/"
            aria-label="Zianova home"
            className="group mr-6 inline-flex items-center"
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="relative inline-flex"
            >
              <span
                aria-hidden
                className="absolute -inset-1 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Wordmark size="md" className="relative" />
            </motion.span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 rounded-full transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button
              asChild
              className="group rounded-full h-11 px-5 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 border-l border-border/60 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border/50">
                  <Link href="/" aria-label="Zianova home" onClick={() => setIsMobileMenuOpen(false)}>
                    <Wordmark size="md" />
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 mt-6">
                  {navItems.map((item, idx) => {
                    const active = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between text-base font-medium px-4 py-3 rounded-xl transition-all",
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {item.label}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 transition-all" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
                <div className="mt-auto pb-6">
                  <Button
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full rounded-full h-12 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20"
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
