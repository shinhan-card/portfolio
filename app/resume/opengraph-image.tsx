import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Resume - Eric Yoon";
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
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle background */}
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
            Resume
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#0a0a0a",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            윤태웅 Eric Yoon
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#525252",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            Product Manager
          </div>

          {/* Details */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#737373",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            신한카드 · 페이먼트혁신실 · 프로(과장) · 9년차 PM
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 15,
            }}
          >
            {["Payment", "Fintech", "Authentication"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#2563eb20",
                  border: "2px solid #2563eb40",
                  borderRadius: 8,
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#1e40af",
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
