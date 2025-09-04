import { Star } from 'lucide-react';

function RatingStars({ value, size = 18 }: { value: number; size?: number }) {
    return (
      <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`shrink-0 ${i < value ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            width={size}
            height={size}
          />
        ))}
      </div>
    );
  }
export default RatingStars