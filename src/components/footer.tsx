import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, Logo, XIcon, YoutubeIcon } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-lg">Zianova Aigen System Private Limited</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Zianova — AI-Driven Precision for Enterprise Systems.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/15eSV8mCi9/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform"><FacebookIcon className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/zianova_aigen_systems/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform"><InstagramIcon className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/zianova-aigen-systems/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition-transform"><LinkedInIcon className="h-5 w-5" /></a>
              <a href="https://x.com/ZianovaAiGenSys" target="_blank" rel="noopener noreferrer" className="text-foreground hover:scale-110 transition-transform"><XIcon className="h-5 w-5" /></a>
              <a href="https://youtube.com/@zianovaaigensystems?si=lR20qwaJ5_y46iL2" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transition-transform"><YoutubeIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/technology" className="hover:text-primary transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zianova AiGen Systems Pvt Ltd. All rights reserved.</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">Icon Meadows, Road Number 1, Hyderabad, Telangana</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
