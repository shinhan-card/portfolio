import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray";
  /** Optional: thin separator line above section */
  separator?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
  separator = false,
}: SectionProps) {
  const bgStyles = background === "gray"
    ? "bg-surface2"
    : "bg-bg";
  const separatorStyles = separator ? "border-t border-border" : "";

  return (
    <section
      id={id}
      className={`section-premium ${bgStyles} ${separatorStyles} ${className} scroll-mt-20`}
    >
      <div className="container-premium">{children}</div>
    </section>
  );
}
