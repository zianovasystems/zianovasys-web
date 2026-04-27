import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          borderRadius: 40,
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path
            d="M48 48 H140 L60 140 H140"
            fill="none"
            stroke="url(#g)"
            strokeWidth={18}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={140} cy={48} r={10} fill="#22c55e" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
