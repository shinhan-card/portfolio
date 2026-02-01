import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const runtime = "edge";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, #fafafa 0%, #f5f5f5 50%, #fafafa 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#737373",
              marginBottom: 20,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Product Manager
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#0a0a0a",
              marginBottom: 30,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#525252",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Payments & Authentication Infrastructure
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 15,
              marginTop: 40,
            }}
          >
            {["Authentication", "Platform", "Compliance"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #e5e5e5",
                  borderRadius: 6,
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#404040",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#2563eb",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
