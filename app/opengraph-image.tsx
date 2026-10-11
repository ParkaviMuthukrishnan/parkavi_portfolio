import { ImageResponse } from "next/og";

import { personal } from "@/data/portfolio";

export const runtime = "edge";
export const alt = personal.siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "radial-gradient(circle at 20% 10%, rgba(249,115,22,0.35), transparent 45%), #0b090c",
          color: "#eae5ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#f97316" }}>
          {personal.title}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, marginTop: 20 }}>{personal.name}</div>
        <div style={{ fontSize: 30, color: "#a49ea8", marginTop: 28 }}>
          React · Next.js · TypeScript · Node.js · AWS
        </div>
      </div>
    ),
    size,
  );
}
