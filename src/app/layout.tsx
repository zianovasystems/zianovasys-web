import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zianovasys.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zianova AiGen Systems Pvt Ltd. | Enterprise AI & Engineering Solutions',
    template: '%s | Zianova',
  },
  description:
    'Zianova AiGen Systems Pvt Ltd delivers enterprise-grade, AI-driven software solutions to solve complex business problems with point precision across all industries.',
  applicationName: 'Zianova',
  authors: [{ name: 'Zianova AiGen Systems Pvt Ltd' }],
  keywords: [
    'AI consulting',
    'enterprise AI',
    'machine learning',
    'cloud architecture',
    'custom software development',
    'AI-driven solutions',
    'Zianova',
    'AiGen Systems',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Zianova',
    locale: 'en_US',
    url: '/',
    title: 'Zianova AiGen Systems Pvt Ltd. | Enterprise AI & Engineering Solutions',
    description:
      'AI-Driven Precision for Enterprise Systems — solve complex business and engineering problems with AI-powered software.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ZianovaAiGenSys',
    creator: '@ZianovaAiGenSys',
    title: 'Zianova — AI-Driven Precision for Enterprise Systems',
    description:
      'Enterprise-grade, AI-driven software for complex business and engineering problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zianova AiGen Systems Pvt Ltd',
  alternateName: 'Zianova',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'Zianova AiGen Systems Pvt Ltd delivers enterprise-grade, AI-driven software solutions to solve complex business problems with point precision across all industries.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Icon Meadows, Road Number 1, Huda, Neknampur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@zianovasys.com',
    areaServed: 'Worldwide',
    availableLanguage: ['en'],
  },
  sameAs: [
    'https://www.facebook.com/share/15eSV8mCi9/',
    'https://www.instagram.com/zianova_aigen_systems/',
    'https://www.linkedin.com/company/zianova-aigen-systems/',
    'https://x.com/ZianovaAiGenSys',
    'https://youtube.com/@zianovaaigensystems',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jakarta.variable, outfit.variable)}>
      <body className={cn("font-body antialiased min-h-screen flex flex-col bg-background")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
