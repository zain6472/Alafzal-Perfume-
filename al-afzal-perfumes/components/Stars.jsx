import { Star } from "lucide-react";

export default function Stars({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          fill={i <= Math.round(rating) ? "#C6A15B" : "none"}
          stroke="#C6A15B"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
