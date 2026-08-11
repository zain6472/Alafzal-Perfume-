export default function BottleSVG({ bottle = "#151515", liquid = "#7a4b23", cap = "#C6A15B", className = "" }) {
  const gid = `${bottle}-${liquid}`.replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg viewBox="0 0 200 340" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`glass-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bottle} stopOpacity="0.95" />
          <stop offset="55%" stopColor={bottle} stopOpacity="0.75" />
          <stop offset="100%" stopColor={bottle} stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id={`liquid-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liquid} stopOpacity="0.9" />
          <stop offset="100%" stopColor={liquid} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect x="70" y="20" width="60" height="34" rx="4" fill={cap} />
      <rect x="90" y="6" width="20" height="20" rx="3" fill={cap} opacity="0.85" />
      <rect x="55" y="54" width="90" height="22" rx="6" fill={bottle} opacity="0.9" />
      <rect x="40" y="76" width="120" height="240" rx="18" fill={`url(#glass-${gid})`} stroke={cap} strokeOpacity="0.35" strokeWidth="1.5" />
      <rect x="52" y="150" width="96" height="150" rx="10" fill={`url(#liquid-${gid})`} />
      <rect x="66" y="180" width="68" height="70" rx="2" fill="#F8F4EC" opacity="0.92" />
      <line x1="76" y1="196" x2="124" y2="196" stroke={cap} strokeWidth="1" opacity="0.7" />
      <line x1="76" y1="208" x2="118" y2="208" stroke={cap} strokeWidth="0.75" opacity="0.5" />
      <line x1="76" y1="218" x2="112" y2="218" stroke={cap} strokeWidth="0.75" opacity="0.5" />
      <rect x="50" y="86" width="8" height="220" rx="4" fill="#ffffff" opacity="0.08" />
    </svg>
  );
}
