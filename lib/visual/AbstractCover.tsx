interface AbstractCoverProps {
  variant: 1 | 2;
  className?: string;
}

export default function AbstractCover({ variant, className = "" }: AbstractCoverProps) {
  if (variant === 1) {
    // Geometric grid pattern
    return (
      <svg
        viewBox="0 0 400 225"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-neutral-200 dark:text-neutral-800" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" className="text-neutral-300 dark:text-neutral-700" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" className="fill-neutral-50 dark:fill-neutral-900" />
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={50 + i * 40}
            y1="25"
            x2={50 + i * 40}
            y2="200"
            className="stroke-neutral-300 dark:stroke-neutral-700"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="50"
            y1={50 + i * 40}
            x2="350"
            y2={50 + i * 40}
            className="stroke-neutral-300 dark:stroke-neutral-700"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
        <circle
          cx="120"
          cy="100"
          r="40"
          className="stroke-neutral-400 dark:stroke-neutral-600"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <rect
          x="220"
          y="80"
          width="80"
          height="80"
          className="stroke-neutral-400 dark:stroke-neutral-600"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    );
  }

  // Node connection pattern
  return (
    <svg
      viewBox="0 0 400 225"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="225" className="fill-neutral-50 dark:fill-neutral-900" />
      {/* Connecting lines */}
      <line
        x1="100"
        y1="100"
        x2="180"
        y2="80"
        className="stroke-neutral-300 dark:stroke-neutral-700"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <line
        x1="180"
        y1="80"
        x2="280"
        y2="120"
        className="stroke-neutral-300 dark:stroke-neutral-700"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="100"
        x2="160"
        y2="160"
        className="stroke-neutral-300 dark:stroke-neutral-700"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <line
        x1="280"
        y1="120"
        x2="320"
        y2="90"
        className="stroke-neutral-300 dark:stroke-neutral-700"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Nodes */}
      <circle
        cx="100"
        cy="100"
        r="8"
        className="fill-neutral-400 dark:fill-neutral-600"
        opacity="0.5"
      />
      <circle
        cx="180"
        cy="80"
        r="6"
        className="fill-neutral-400 dark:fill-neutral-600"
        opacity="0.5"
      />
      <circle
        cx="280"
        cy="120"
        r="10"
        className="fill-neutral-400 dark:fill-neutral-600"
        opacity="0.5"
      />
      <circle
        cx="160"
        cy="160"
        r="6"
        className="fill-neutral-400 dark:fill-neutral-600"
        opacity="0.5"
      />
      <circle
        cx="320"
        cy="90"
        r="7"
        className="fill-neutral-400 dark:fill-neutral-600"
        opacity="0.5"
      />
    </svg>
  );
}
