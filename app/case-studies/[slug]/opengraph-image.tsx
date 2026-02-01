import { ImageResponse } from "next/og";
import { getCaseStudyBySlug } from "@/data/case-studies";

export const runtime = "edge";

export const alt = "Case Study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return new ImageResponse(<div>Not Found</div>);
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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
            zIndex: 1,
            maxWidth: "1000px",
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#737373",
              marginBottom: 20,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Case Study
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#0a0a0a",
              marginBottom: 30,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {caseStudy.title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#525252",
              marginBottom: 40,
              lineHeight: 1.4,
            }}
          >
            {caseStudy.subtitle}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {caseStudy.tags.map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #e5e5e5",
                  borderRadius: 6,
                  fontSize: 16,
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

        {/* Company badge */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            padding: "12px 24px",
            backgroundColor: "#0a0a0a",
            color: "#ffffff",
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Shinhan Card
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
