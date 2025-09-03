import { cn } from "@/lib/utils";
import React from "react";
import CheckBadge from "./CheckBadge";
import Rating from "./Rating";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  name: string;
  image: string;
  rating: number;
  quote: string;
};

const TestimonialsCarouselCard: React.FC<Props> = ({
  name,
  image,
  rating,
  quote,
}) => {
  return (
    <Card>
      <CardContent>
        <article className={cn("h-full")}>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div
              className={cn(
                "relative aspect-[5/6] w-auto overflow-hidden rounded-xl border-[3px] border-black-app md:w-[240px] md:h-[280px]",
              )}
            >
              {/* Use next/image if you prefer; using img keeps it framework-agnostic */}
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-wosker text-[32px] uppercase text-black-app">
                  {name}
                </h3>
                <CheckBadge />
              </div>

              <Rating value={rating} className="mt-1" />

              <p className="mt-2 text-lg text-black-app">“{quote}”</p>
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default TestimonialsCarouselCard;
