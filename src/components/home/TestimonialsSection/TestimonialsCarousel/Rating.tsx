import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    value?: number; 
    className?: string
}

const Rating: React.FC<Props> = ({ className, value=5 }) => {
    const stars = Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "text-lg leading-none",
            i < value ? "text-[#F5B915]" : "text-gray-300"
          )}
          aria-hidden
        >
          ★
        </span>
      ));
      return (
        <div className={cn("flex items-center gap-1", className)} aria-label={`${value} out of 5 stars`}>
          {stars}
        </div>
      );
}

export default Rating