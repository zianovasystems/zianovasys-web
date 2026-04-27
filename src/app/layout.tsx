import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-headline',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zianova AiGen Systems Pvt Ltd. | Enterprise AI & Engineering Solutions',
  description: 'Zianova AiGen Systems Pvt Ltd delivers enterprise-grade, AI-driven software solutions to solve complex business problems with point precision across all industries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jakarta.variable, outfit.variable)}>
      <body className={cn("font-body antialiased min-h-screen flex flex-col bg-background")}>
        <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl animate-blob animation-delay-4000" />
        </div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
