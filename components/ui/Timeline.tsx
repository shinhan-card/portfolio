interface TimelineItemProps {
  isLast?: boolean;
  children: React.ReactNode;
}

export function TimelineItem({ isLast = false, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-surface2" />
      
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5.5px] top-6 bottom-0 w-px bg-border" />
      )}
      
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-0">{children}</div>;
}
