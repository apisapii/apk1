export default function BatikPattern({ variant = 'default', className = '' }) {
  return (
    <div className={`batik-pattern batik-${variant} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="batik-flower" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.3" />
            <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <path d="M20 8 Q26 14 20 20 Q14 14 20 8" fill="currentColor" opacity="0.15" />
            <path d="M32 20 Q26 26 20 20 Q26 14 32 20" fill="currentColor" opacity="0.15" />
            <path d="M20 32 Q14 26 20 20 Q26 26 20 32" fill="currentColor" opacity="0.15" />
            <path d="M8 20 Q14 14 20 20 Q14 26 8 20" fill="currentColor" opacity="0.15" />
          </pattern>
          <pattern id="batik-wave" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 15 Q15 0 30 15 T60 15" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
            <path d="M0 22 Q15 7 30 22 T60 22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          </pattern>
          <pattern id="batik-diamond" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="10" height="10" transform="rotate(45 15 15)" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
            <circle cx="15" cy="15" r="2" fill="currentColor" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#batik-flower)" />
        <rect width="200" height="200" fill="url(#batik-wave)" />
        <rect width="200" height="200" fill="url(#batik-diamond)" />
      </svg>
    </div>
  );
}
