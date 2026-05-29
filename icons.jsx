// Crown Medical — Icons (line, gold)
// Use: <Icon name="syringe" size={28} />

const Icon = ({ name, size = 24, stroke = 1.4, color = "currentColor", className = "" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (name) {
    case "syringe": return (
      <svg {...props}>
        <path d="M18 2l4 4M16 4l4 4" />
        <path d="M14.5 5.5L18.5 9.5" />
        <path d="M3 21l3-3 8-8 4 4-8 8H6v-3z" />
        <path d="M9 16l2 2" />
      </svg>
    );
    case "flask": return (
      <svg {...props}>
        <path d="M9 3h6" />
        <path d="M10 3v6L4 19a2 2 0 002 2h12a2 2 0 002-2L14 9V3" />
        <path d="M7 15h10" />
      </svg>
    );
    case "vial": return (
      <svg {...props}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M7 8h10" />
        <path d="M10 12h4M10 15h4" />
      </svg>
    );
    case "thread": return (
      <svg {...props}>
        <path d="M3 6c4 0 4 4 8 4s4-4 8-4" />
        <path d="M3 14c4 0 4 4 8 4s4-4 8-4" />
      </svg>
    );
    case "drop": return (
      <svg {...props}>
        <path d="M12 2.5s7 7.5 7 12a7 7 0 11-14 0c0-4.5 7-12 7-12z" />
        <path d="M9 15a3 3 0 003 3" />
      </svg>
    );
    case "leaf": return (
      <svg {...props}>
        <path d="M3 21c0-9 6-15 18-15 0 9-6 15-15 15-1 0-2 0-3 0z" />
        <path d="M3 21c4-4 8-7 14-9" />
      </svg>
    );
    case "molecule": return (
      <svg {...props}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8 7l8 0M7 8l4 8M17 8l-4 8" />
      </svg>
    );
    case "shield-check": return (
      <svg {...props}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
    case "truck": return (
      <svg {...props}>
        <path d="M2 7h11v10H2z" />
        <path d="M13 10h5l3 3v4h-8" />
        <circle cx="6" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    );
    case "certificate": return (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M8 10h8M8 13h5" />
        <path d="M12 18v3l-2-1.5L8 21v-3" transform="translate(4 0)" />
      </svg>
    );
    case "graduation": return (
      <svg {...props}>
        <path d="M2 9l10-5 10 5-10 5L2 9z" />
        <path d="M6 11v5c0 1 3 2 6 2s6-1 6-2v-5" />
      </svg>
    );
    case "bolt": return (
      <svg {...props}>
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    );
    case "target": return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    );
    case "package": return (
      <svg {...props}>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    );
    case "hospital": return (
      <svg {...props}>
        <path d="M3 21V7l9-4 9 4v14" />
        <path d="M10 11h4M12 9v4" />
        <path d="M8 21v-6h8v6" />
      </svg>
    );
    case "handshake": return (
      <svg {...props}>
        <path d="M2 13l4-4 3 3 5-5 4 4 4-4" />
        <path d="M9 12l3 3 3-3" />
      </svg>
    );
    case "crown": return (
      <svg {...props}>
        <path d="M3 18h18l-1.5-9-4 4-2.5-7-2.5 7-4-4L3 18z" />
        <path d="M3 21h18" />
      </svg>
    );
    case "whatsapp": return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    );
    case "search": return (
      <svg {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-5-5" />
      </svg>
    );
    case "menu": return (
      <svg {...props}>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    );
    case "x": return (
      <svg {...props}>
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
    case "arrow-right": return (
      <svg {...props}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
    case "plus": return (
      <svg {...props}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
    case "minus": return (
      <svg {...props}>
        <path d="M5 12h14" />
      </svg>
    );
    case "mail": return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    );
    case "phone": return (
      <svg {...props}>
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
      </svg>
    );
    case "instagram": return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill={color} />
      </svg>
    );
    case "map-pin": return (
      <svg {...props}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
    case "lock": return (
      <svg {...props}>
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    );
    case "cart": return (
      <svg {...props}>
        <path d="M3 3h2l3 14h11l2-9H6" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
      </svg>
    );
    case "check": return (
      <svg {...props}>
        <path d="M5 12l4 4 10-10" />
      </svg>
    );
    case "info": return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-5M12 8h.01" />
      </svg>
    );
    case "warn": return (
      <svg {...props}>
        <path d="M12 2L2 21h20L12 2z" />
        <path d="M12 9v5M12 17h.01" />
      </svg>
    );
    case "chevron-down": return (
      <svg {...props}>
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
    default: return null;
  }
};

window.Icon = Icon;
