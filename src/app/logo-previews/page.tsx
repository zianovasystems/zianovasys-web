import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Previews — Zianova",
  description: "Internal: review logo concepts before integration.",
  robots: { index: false, follow: false },
};

const concepts = [
  {
    id: "A",
    name: "AI Pulse Z",
    file: "/logo-previews/concept-a.svg",
    blurb: "A bold geometric Z with a pulsing dot at the apex. Conveys precision, motion, and AI signal. Works in mono.",
  },
  {
    id: "B",
    name: "Neural Z",
    file: "/logo-previews/concept-b.svg",
    blurb: "Z formed by connected nodes (neural-network metaphor). Clean tech feel; scales well as a favicon.",
  },
  {
    id: "C",
    name: "Aperture Z",
    file: "/logo-previews/concept-c.svg",
    blurb: "Rotating aperture framing a stylized Z negative space. Premium / enterprise feel; monogram-style.",
  },
  {
    id: "D",
    name: "Mark + Wordmark",
    file: "/logo-previews/concept-d.svg",
    blurb: "Compact Z mark + 'Zianova' wordmark with a gradient underline beneath 'nova'. Most versatile for header & cards.",
    wide: true,
  },
];

const sizes = [
  { label: "16px", px: 16 },
  { label: "24px", px: 24 },
  { label: "32px", px: 32 },
  { label: "48px", px: 48 },
];

export default function LogoPreviewsPage() {
  return (
    <div className="container mx-auto px-4 section-padding max-w-6xl">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          Internal Review
        </span>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
          Logo <span className="text-gradient-static">Concepts</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Four directions for the Zianova brand mark. None of these are wired into the live site yet — pick one (or mix elements) and I&apos;ll integrate it across the header, favicon, and social cards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {concepts.map((c) => (
          <div
            key={c.id}
            className={`glass-card rounded-3xl p-8 ${c.wide ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary font-bold">
                  {c.id}
                </span>
                <h2 className="font-headline text-2xl font-bold">{c.name}</h2>
              </div>
            </div>

            {/* Light + dark previews */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-white border border-border/60 flex items-center justify-center p-10">
                <Image
                  src={c.file}
                  alt={`${c.name} on light`}
                  width={c.wide ? 280 : 96}
                  height={c.wide ? 64 : 96}
                  className="h-auto"
                />
              </div>
              <div className="rounded-2xl bg-slate-950 flex items-center justify-center p-10">
                <Image
                  src={c.file}
                  alt={`${c.name} on dark`}
                  width={c.wide ? 280 : 96}
                  height={c.wide ? 64 : 96}
                  className="h-auto"
                />
              </div>
            </div>

            {/* Size grid (only for marks) */}
            {!c.wide && (
              <div className="rounded-2xl bg-muted/40 border border-border/60 p-5 mb-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Scale check</p>
                <div className="flex items-end gap-6">
                  {sizes.map((s) => (
                    <div key={s.px} className="flex flex-col items-center gap-2">
                      <Image
                        src={c.file}
                        alt={`${c.name} at ${s.label}`}
                        width={s.px}
                        height={s.px}
                      />
                      <span className="text-[10px] text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed">{c.blurb}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/60 p-8 text-center">
        <h3 className="font-headline text-2xl font-bold mb-2">Pick a direction</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reply with: concept letter (A / B / C / D), color tweaks (e.g. &quot;deeper navy&quot; or &quot;mono black&quot;), and whether the header should show the mark only or mark + wordmark. I&apos;ll then wire it into the header, replace the favicon, and add it to social meta tags.
        </p>
      </div>
    </div>
  );
}
