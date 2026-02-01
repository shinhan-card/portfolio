interface SectionHeaderProps {
  emoji?: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ 
  emoji, 
  label, 
  title, 
  subtitle 
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4 flex items-center justify-center gap-2">
        {emoji && <span className="text-base">{emoji}</span>}
        {label}
      </p>
      <h2 className="mb-4 text-text">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
