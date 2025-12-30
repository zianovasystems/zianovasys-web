import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, Logo, XIcon, YoutubeIcon } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center w-full max-w-xs mb-6">
            <div className="h-px bg-border flex-grow"></div>
            <span className="px-4 text-muted-foreground font-medium">Social</span>
            <div className="h-px bg-border flex-grow"></div>
          </div>
          <div className="flex gap-6">
            <Link href="https://facebook.com/718428921349246" target="_blank" className="transform hover:scale-110 transition-transform">
              <FacebookIcon className="h-6 w-6 text-blue-600" />
            </Link>
            <Link href="https://instagram.com/zianovasystems/" target="_blank" className="transform hover:scale-110 transition-transform">
              <InstagramIcon className="h-6 w-6 text-pink-600" />
            </Link>
            <Link href="https://linkedin.com/in/zianova-aigen-systems" target="_blank" className="transform hover:scale-110 transition-transform">
              <LinkedInIcon className="h-6 w-6 text-blue-700" />
            </Link>
            <Link href="https://x.com/@zianovasystems" target="_blank" className="transform hover:scale-110 transition-transform">
              <XIcon className="h-6 w-6 text-foreground" />
            </Link>
            <Link href="https://www.youtube.com/@ZianovaSystems" target="_blank" className="transform hover:scale-110 transition-transform">
              <YoutubeIcon className="h-6 w-6 text-red-600" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-lg">Zianova AiGen Systems Pvt Ltd</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Icon Meadows, Road Number 1, Huda, Neknampur, Telangana, India
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Zianova AiGen Systems Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
