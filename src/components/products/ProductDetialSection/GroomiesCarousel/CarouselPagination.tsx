import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    selectedIndex: number
    slideCount: number
    scrollTo: (index: number) => void
}

const CarouselPagination: React.FC<Props> = ({ scrollTo, selectedIndex }) => {
  
    return (
      <div className={cn("flex justify-center space-x-2 mt-4 w-fit bg-white mx-auto p-2 rounded-2xl")} >
        {Array.from({ length: 6 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-200",
              selectedIndex === index
                ? "bg-[#D1D1D1]"
                : "bg-black-app hover:bg-white/60"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  }

export default CarouselPagination