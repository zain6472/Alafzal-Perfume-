export default function TikTokIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 3c.3 1.9 1.5 3.3 3.5 3.6v2.6c-1.3 0-2.5-.4-3.5-1.1v6.6c0 3-2.4 5.3-5.3 5.3S5.9 17.6 5.9 14.7c0-2.8 2.2-5.1 5-5.3v2.7c-1.3.2-2.3 1.3-2.3 2.6 0 1.5 1.2 2.6 2.6 2.6s2.7-1.1 2.7-2.6V3h2.6Z"
        fill={color}
      />
    </svg>
  );
}
