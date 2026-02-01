interface FloatingEmojisProps {
  emojis: string[];
  density?: "low" | "medium" | "high";
}

export default function FloatingEmojis({ 
  emojis, 
  density = "medium" 
}: FloatingEmojisProps) {
  const positions = [
    { top: "10%", left: "5%", size: "text-7xl", delay: "0s" },
    { top: "15%", right: "8%", size: "text-6xl", delay: "1s" },
    { top: "35%", left: "3%", size: "text-5xl", delay: "2s" },
    { top: "45%", right: "5%", size: "text-6xl", delay: "1.5s" },
    { top: "65%", left: "10%", size: "text-5xl", delay: "0.5s" },
    { top: "75%", right: "12%", size: "text-6xl", delay: "2.5s" },
  ];

  const count = density === "low" ? 3 : density === "medium" ? 4 : 6;
  const selected = positions.slice(0, count);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {selected.map((pos, idx) => {
        const emoji = emojis[idx % emojis.length];
        return (
          <div
            key={idx}
            className={`absolute ${pos.size} opacity-[0.04] dark:opacity-[0.02] animate-float`}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              animationDelay: pos.delay,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}
