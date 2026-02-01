"use client";

interface CaseCoverProps {
  type: "authentication" | "payments" | "compliance" | "openbanking" | "ux" | "cost" | "rd";
  className?: string;
}

export default function CaseCover({ type, className = "" }: CaseCoverProps) {
  const wrapperClass = `w-full h-[200px] flex-shrink-0 relative overflow-hidden ${className}`;

  if (type === "authentication") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Gradient background */}
          <defs>
            <linearGradient id="auth-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="auth-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.2" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="800" height="400" fill="url(#auth-bg)" />
          
          {/* Complex network pattern - Authentication theme */}
          <g opacity="0.4">
            {/* Central hub */}
            <circle cx="400" cy="200" r="60" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
            <circle cx="400" cy="200" r="40" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.5" />
            <circle cx="400" cy="200" r="20" fill="var(--color-accent)" opacity="0.2" />
            
            {/* Lock icon abstraction */}
            <rect x="385" y="185" width="30" height="30" rx="4" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" opacity="0.7" />
            <circle cx="400" cy="195" r="4" fill="var(--color-accent)" opacity="0.7" />
            <line x1="400" y1="199" x2="400" y2="207" stroke="var(--color-accent)" strokeWidth="2" opacity="0.7" />
            
            {/* Orbiting nodes */}
            <circle cx="550" cy="150" r="15" fill="url(#auth-accent)" filter="url(#glow)" />
            <circle cx="250" cy="150" r="15" fill="url(#auth-accent)" filter="url(#glow)" />
            <circle cx="550" cy="250" r="15" fill="url(#auth-accent)" filter="url(#glow)" />
            <circle cx="250" cy="250" r="15" fill="url(#auth-accent)" filter="url(#glow)" />
            <circle cx="480" cy="90" r="12" fill="url(#auth-accent)" filter="url(#glow)" />
            <circle cx="320" cy="90" r="12" fill="url(#auth-accent)" filter="url(#glow)" />
            
            {/* Connection lines */}
            <line x1="400" y1="200" x2="550" y2="150" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            <line x1="400" y1="200" x2="250" y2="150" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            <line x1="400" y1="200" x2="550" y2="250" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            <line x1="400" y1="200" x2="250" y2="250" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            <line x1="400" y1="200" x2="480" y2="90" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            <line x1="400" y1="200" x2="320" y2="90" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" strokeDasharray="5 5" />
            
            {/* Shield shapes */}
            <path d="M 150 120 L 150 160 Q 150 180, 170 190 Q 190 180, 190 160 L 190 120 Z" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.2" />
            <path d="M 610 200 L 610 240 Q 610 260, 630 270 Q 650 260, 650 240 L 650 200 Z" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.2" />
          </g>
          
          {/* Floating particles */}
          <g opacity="0.15">
            <circle cx="100" cy="80" r="3" fill="var(--color-accent)">
              <animate attributeName="cy" values="80;60;80" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="320" r="3" fill="var(--color-accent)">
              <animate attributeName="cy" values="320;300;320" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="680" cy="100" r="2" fill="var(--color-accent)">
              <animate attributeName="cy" values="100;80;100" dur="6s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "payments") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pay-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow-pay">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="800" height="400" fill="url(#pay-bg)" />
          
          {/* Card layers - representing payment flow */}
          <g opacity="0.6">
            {/* Background cards */}
            <rect x="120" y="100" width="240" height="150" rx="12" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.2" />
            <rect x="140" y="120" width="240" height="150" rx="12" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
            
            {/* Main card */}
            <rect x="160" y="140" width="240" height="150" rx="12" fill="url(#card-grad)" stroke="var(--color-accent)" strokeWidth="2.5" filter="url(#glow-pay)" />
            
            {/* Card details */}
            <rect x="180" y="160" width="80" height="12" rx="2" fill="var(--color-bg)" opacity="0.5" />
            <rect x="180" y="180" width="120" height="12" rx="2" fill="var(--color-bg)" opacity="0.5" />
            <rect x="180" y="200" width="140" height="12" rx="2" fill="var(--color-bg)" opacity="0.5" />
            
            {/* Chip */}
            <rect x="320" y="160" width="40" height="30" rx="4" fill="var(--color-bg)" opacity="0.6" />
            <line x1="325" y1="170" x2="355" y2="170" stroke="var(--color-accent)" strokeWidth="1" opacity="0.8" />
            <line x1="325" y1="175" x2="355" y2="175" stroke="var(--color-accent)" strokeWidth="1" opacity="0.8" />
            <line x1="325" y1="180" x2="355" y2="180" stroke="var(--color-accent)" strokeWidth="1" opacity="0.8" />
          </g>
          
          {/* Transaction flow visualization */}
          <g opacity="0.3">
            {/* Flow arrows */}
            <path d="M 420 200 L 520 200" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="10 5" markerEnd="url(#arrowhead)" />
            <path d="M 540 200 L 640 200" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="10 5" markerEnd="url(#arrowhead)" />
            
            {/* Flow nodes */}
            <circle cx="520" cy="200" r="20" fill="var(--color-accent)" opacity="0.2" />
            <circle cx="520" cy="200" r="12" fill="var(--color-accent)" opacity="0.4" />
            <circle cx="640" cy="200" r="20" fill="var(--color-accent)" opacity="0.2" />
            <circle cx="640" cy="200" r="12" fill="var(--color-accent)" opacity="0.4" />
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="var(--color-accent)" opacity="0.6" />
              </marker>
            </defs>
          </g>
          
          {/* Floating currency symbols */}
          <g opacity="0.12" fontSize="32" fontFamily="monospace" fill="var(--color-accent)">
            <text x="600" y="120">$</text>
            <text x="650" y="280">₩</text>
            <text x="180" y="320">€</text>
          </g>
          
          {/* Animated pulse */}
          <circle cx="400" cy="215" r="8" fill="var(--color-accent)" opacity="0.4">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    );
  }

  if (type === "openbanking") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ob-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.07" />
            </linearGradient>
            <filter id="glow-ob">
              <feGaussianBlur stdDeviation="3"/>
              <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="400" fill="url(#ob-bg)" />
          
          {/* Bank building icon */}
          <g opacity="0.4">
            <rect x="150" y="180" width="140" height="120" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
            <line x1="170" y1="180" x2="170" y2="300" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="200" y1="180" x2="200" y2="300" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="230" y1="180" x2="230" y2="300" stroke="var(--color-accent)" strokeWidth="2" />
            <line x1="260" y1="180" x2="260" y2="300" stroke="var(--color-accent)" strokeWidth="2" />
            <polygon points="220,140 150,180 290,180" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
          </g>
          
          {/* API connection visualization */}
          <g opacity="0.5">
            {/* Connection path */}
            <path d="M 320 240 Q 420 200, 520 240" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="10 5" filter="url(#glow-ob)"/>
            
            {/* API node */}
            <circle cx="420" cy="200" r="30" fill="var(--color-accent)" opacity="0.2" />
            <text x="420" y="208" textAnchor="middle" fontSize="16" fill="var(--color-accent)" fontWeight="700">API</text>
            
            {/* Mobile device */}
            <rect x="490" y="200" width="60" height="100" rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="2.5" opacity="0.8" />
            <rect x="500" y="215" width="40" height="60" rx="3" fill="var(--color-accent)" opacity="0.15" />
            <line x1="510" y1="288" x2="540" y2="288" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
          </g>
          
          {/* Data flow particles */}
          <g opacity="0.3">
            <circle cx="340" cy="235" r="4" fill="var(--color-accent)"><animate attributeName="cx" values="340;480" dur="3s" repeatCount="indefinite" /></circle>
            <circle cx="360" cy="225" r="3" fill="var(--color-accent)"><animate attributeName="cx" values="360;500" dur="4s" repeatCount="indefinite" /></circle>
            <circle cx="380" cy="245" r="3" fill="var(--color-accent)"><animate attributeName="cx" values="380;520" dur="3.5s" repeatCount="indefinite" /></circle>
          </g>
          
          {/* Currency symbols */}
          <g opacity="0.15" fontSize="24" fill="var(--color-accent)">
            <text x="600" y="150">₩</text>
            <text x="650" y="280">$</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "ux") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ux-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#ux-bg)" />
          
          {/* Before/After flow comparison */}
          <g opacity="0.5">
            {/* Before (complex) - top */}
            <g>
              <text x="150" y="100" fontSize="14" fill="var(--color-muted)" fontWeight="600">Before</text>
              <rect x="150" y="110" width="80" height="40" rx="6" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <line x1="230" y1="130" x2="270" y2="130" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <rect x="270" y="110" width="60" height="40" rx="6" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <line x1="330" y1="130" x2="370" y2="130" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <rect x="370" y="110" width="70" height="40" rx="6" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <line x1="440" y1="130" x2="480" y2="130" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              <rect x="480" y="110" width="60" height="40" rx="6" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
              
              {/* X marks on complex steps */}
              <g stroke="var(--color-accent)" strokeWidth="2" opacity="0.5">
                <line x1="295" y1="115" x2="305" y2="125" />
                <line x1="305" y1="115" x2="295" y2="125" />
                <line x1="405" y1="115" x2="415" y2="125" />
                <line x1="415" y1="115" x2="405" y2="125" />
              </g>
            </g>
            
            {/* After (simplified) - bottom */}
            <g>
              <text x="150" y="240" fontSize="14" fill="var(--color-accent)" fontWeight="700">After</text>
              <rect x="150" y="250" width="100" height="50" rx="8" fill="var(--color-accent)" fillOpacity="0.15" stroke="var(--color-accent)" strokeWidth="3" />
              <line x1="250" y1="275" x2="310" y2="275" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="5 5" />
              <rect x="310" y="250" width="100" height="50" rx="8" fill="var(--color-accent)" fillOpacity="0.15" stroke="var(--color-accent)" strokeWidth="3" />
              <line x1="410" y1="275" x2="470" y2="275" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="5 5" />
              <rect x="470" y="250" width="100" height="50" rx="8" fill="var(--color-accent)" fillOpacity="0.15" stroke="var(--color-accent)" strokeWidth="3" />
              
              {/* Checkmarks */}
              <g stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round">
                <polyline points="165,270 175,280 195,260" />
                <polyline points="325,270 335,280 355,260" />
                <polyline points="485,270 495,280 515,260" />
              </g>
            </g>
          </g>
          
          {/* Metrics improvement arrow */}
          <g opacity="0.4">
            <path d="M 620 300 L 620 150" stroke="var(--color-accent)" strokeWidth="4" markerEnd="url(#arrow-up)" />
            <text x="640" y="230" fontSize="18" fill="var(--color-accent)" fontWeight="700">+25%</text>
            <defs>
              <marker id="arrow-up" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 8, 5 0, 10 8" fill="var(--color-accent)" />
              </marker>
            </defs>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "cost") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cost-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#cost-bg)" />
          
          {/* Cost reduction chart */}
          <g opacity="0.5">
            {/* Grid */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={`h${i}`} x1="150" y1={100 + i * 50} x2="650" y2={100 + i * 50} stroke="var(--color-border)" strokeWidth="1" opacity="0.3" />
            ))}
            
            {/* Before bars (high cost) */}
            <rect x="200" y="120" width="60" height="180" rx="4" fill="var(--color-accent)" opacity="0.2" />
            <rect x="280" y="140" width="60" height="160" rx="4" fill="var(--color-accent)" opacity="0.2" />
            <rect x="360" y="130" width="60" height="170" rx="4" fill="var(--color-accent)" opacity="0.2" />
            
            {/* After bars (reduced cost) */}
            <rect x="460" y="200" width="60" height="100" rx="4" fill="var(--color-accent)" opacity="0.6" />
            <rect x="540" y="210" width="60" height="90" rx="4" fill="var(--color-accent)" opacity="0.6" />
            
            {/* Labels */}
            <text x="300" y="330" textAnchor="middle" fontSize="16" fill="var(--color-muted)" fontWeight="600">Before</text>
            <text x="500" y="330" textAnchor="middle" fontSize="16" fill="var(--color-accent)" fontWeight="700">After</text>
            
            {/* Down arrow */}
            <path d="M 420 180 L 450 240" stroke="var(--color-accent)" strokeWidth="4" markerEnd="url(#arrow-down)" opacity="0.7" />
            <text x="440" y="200" fontSize="20" fill="var(--color-accent)" fontWeight="700">-40%</text>
            <defs>
              <marker id="arrow-down" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 2, 5 10, 10 2" fill="var(--color-accent)" />
              </marker>
            </defs>
          </g>
          
          {/* Dollar sign watermark */}
          <g opacity="0.08" fontSize="120" fontWeight="700" fill="var(--color-accent)">
            <text x="620" y="280">$</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "rd") {
    return (
      <div className={wrapperClass} aria-hidden>
        <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="rd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-surface2)" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.09" />
            </linearGradient>
            <filter id="glow-rd">
              <feGaussianBlur stdDeviation="4"/>
              <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <rect width="800" height="400" fill="url(#rd-bg)" />
          
          {/* Blockchain visualization */}
          <g opacity="0.4">
            {[0, 1, 2, 3].map(i => (
              <g key={i}>
                <rect x={180 + i * 120} y="140" width="80" height="80" rx="8" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
                <line x1={210 + i * 120} y1="160" x2={250 + i * 120} y2="160" stroke="var(--color-accent)" strokeWidth="2" opacity="0.5" />
                <line x1={210 + i * 120} y1="180" x2={230 + i * 120} y2="180" stroke="var(--color-accent)" strokeWidth="2" opacity="0.5" />
                {i < 3 && <line x1={260 + i * 120} y1="180" x2={300 + i * 120} y2="180" stroke="var(--color-accent)" strokeWidth="3" />}
              </g>
            ))}
          </g>
          
          {/* Fingerprint/biometric */}
          <g opacity="0.3" transform="translate(400, 280)">
            {[...Array(6)].map((_, i) => (
              <path 
                key={i}
                d={`M ${-30 + i*6} 0 Q ${-15 + i*6} ${15 + i*5} ${-30 + i*6} 30`}
                fill="none" 
                stroke="var(--color-accent)" 
                strokeWidth="2"
              />
            ))}
          </g>
          
          {/* Lab flask */}
          <g opacity="0.35">
            <path d="M 160 280 L 180 320 L 240 320 L 260 280 L 260 240 L 230 240 L 230 260 L 190 260 L 190 240 L 160 240 Z" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
            <circle cx="210" cy="300" r="8" fill="var(--color-accent)" opacity="0.4" />
          </g>
          
          {/* Animated pulse nodes */}
          <circle cx="220" cy="180" r="6" fill="var(--color-accent)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="580" cy="180" r="6" fill="var(--color-accent)" opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    );
  }

  // Compliance (default)
  return (
    <div className={wrapperClass} aria-hidden>
      <svg 
        viewBox="0 0 800 400" 
        className="w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="comp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-surface2)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow-comp">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="800" height="400" fill="url(#comp-bg)" />
        
        {/* Document/Checklist layers */}
        <g opacity="0.5">
          {/* Background documents */}
          <rect x="150" y="80" width="200" height="260" rx="8" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.15" />
          <rect x="170" y="100" width="200" height="260" rx="8" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.25" />
          
          {/* Main document */}
          <rect x="190" y="120" width="200" height="260" rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="2.5" opacity="0.9" />
          
          {/* Document lines */}
          <line x1="210" y1="150" x2="350" y2="150" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
          <line x1="210" y1="170" x2="370" y2="170" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
          <line x1="210" y1="190" x2="340" y2="190" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
          
          {/* Checkmarks */}
          <g stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow-comp)">
            <polyline points="215,215 225,225 245,205" opacity="0.7" />
            <polyline points="215,245 225,255 245,235" opacity="0.7" />
            <polyline points="215,275 225,285 245,265" opacity="0.7" />
          </g>
          
          {/* Checkbox squares */}
          <rect x="210" y="210" width="16" height="16" rx="3" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.4" />
          <rect x="210" y="240" width="16" height="16" rx="3" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.4" />
          <rect x="210" y="270" width="16" height="16" rx="3" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.4" />
        </g>
        
        {/* Shield/Badge on the right */}
        <g opacity="0.5">
          <path 
            d="M 480 140 L 480 240 Q 480 280, 520 300 Q 560 280, 560 240 L 560 140 Z" 
            fill="url(#shield-grad)" 
            stroke="var(--color-accent)" 
            strokeWidth="2.5"
            filter="url(#glow-comp)"
          />
          <path d="M 500 200 L 515 215 L 545 185" stroke="var(--color-bg)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Stamp/Approval marks */}
        <g opacity="0.15">
          <circle cx="620" cy="150" r="35" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
          <text x="620" y="158" textAnchor="middle" fontSize="14" fill="var(--color-accent)" fontWeight="700">OK</text>
          
          <circle cx="150" cy="320" r="30" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
          <text x="150" y="327" textAnchor="middle" fontSize="12" fill="var(--color-accent)" fontWeight="700">✓</text>
        </g>
        
        {/* Animated approval indicator */}
        <circle cx="520" cy="220" r="6" fill="var(--color-accent)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
