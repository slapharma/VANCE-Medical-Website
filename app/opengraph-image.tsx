import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Vance Medical Foods — Targeted nutrition for gastrointestinal health";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #004D4D 0%, #006666 50%, #008080 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* decorative radial */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(120,191,191,0.45) 0%, rgba(120,191,191,0) 70%)",
            display: "flex",
          }}
        />

        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#ffffff",
              color: "#008080",
              fontSize: 38,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "-0.05em",
            }}
          >
            V
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#AEDBDB",
            }}
          >
            Vance Medical Foods
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#AEDBDB",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Medical foods · Gastrointestinal health
          </span>
          <span
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Targeted nutrition for gastrointestinal health.
          </span>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#DEF4F4",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
          }}
        >
          <span>Vance Medical Foods Ltd</span>
          <span style={{ color: "#AEDBDB" }}>vancemedicalfoods.co.uk</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
