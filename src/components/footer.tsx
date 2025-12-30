import Link from "next/link";
import { Logo } from "./icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-lg">Zianova AiGen Systems</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Icon Meadows, VP-20, Virugambakkam, Chennai-600092
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
