import { ImageResponse } from "next/og";

export const alt = "Zianova — AI-Driven Precision for Enterprise Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #0f172a 0%, #064e3b 50%, #0c4a6e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "rgba(16, 185, 129, 0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "rgba(6, 182, 212, 0.25)",
            display: "flex",
          }}
        />

        {/* Mark + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, position: "relative" }}>
          <svg width="96" height="96" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="#0f172a" />
            <path
              d="M16 16 H48 L20 48 H48"
              fill="none"
              stroke="url(#g)"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={48} cy={16} r={3.5} fill="#22c55e" />
          </svg>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -2, display: "flex" }}>
            Zianova
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, display: "flex" }}>
            AI-Driven Precision
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, display: "flex" }}>
            for Enterprise Systems
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
              display: "flex",
              maxWidth: 900,
            }}
          >
            Solving complex business and engineering problems with AI-powered software.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", display: "flex" }}>
            zianovasys.com
          </div>
          <div
            style={{
              fontSize: 22,
              padding: "8px 20px",
              borderRadius: 999,
              background: "linear-gradient(90deg, #10b981, #06b6d4)",
              color: "#0f172a",
              fontWeight: 700,
              display: "flex",
            }}
          >
            Talk to our AI experts →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
