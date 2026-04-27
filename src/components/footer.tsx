import Link from "next/link";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, Logo, XIcon, YoutubeIcon } from "./icons";

const socials = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/share/15eSV8mCi9/", color: "hover:text-blue-600", label: "Facebook" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/zianova_aigen_systems/", color: "hover:text-pink-600", label: "Instagram" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/zianova-aigen-systems/posts/?feedView=all", color: "hover:text-blue-700", label: "LinkedIn" },
  { Icon: XIcon, href: "https://x.com/ZianovaAiGenSys", color: "hover:text-foreground", label: "X" },
  { Icon: YoutubeIcon, href: "https://youtube.com/@zianovaaigensystems?si=lR20qwaJ5_y46iL2", color: "hover:text-red-600", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/40 bg-background/95">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-5">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-md group-hover:blur-lg transition-all" />
                <Logo className="relative h-9 w-9 text-primary" />
              </div>
              <span className="font-headline font-extrabold text-lg tracking-tight">Zianova</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-Driven Precision for Enterprise Systems. We solve complex business problems with AI-powered software.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:scale-110 hover:bg-muted transition-all duration-300 ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-base mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-base mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Industries", href: "/industries" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Products", href: "/products" },
                { label: "Technology", href: "/technology" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@zianovasys.com" className="hover:text-primary transition-colors break-all">
                  info@zianovasys.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Icon Meadows, Road Number 1, Hyderabad, Telangana</span>
              </li>
              <li className="pt-2">
                <h4 className="font-headline font-bold text-base text-foreground mb-2">Legal</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">Zianova AiGen Systems Pvt Ltd.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
