import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../ui/carousel";
import { TESTIMONIALS } from "@/data/mockData";
import { classNames, cn } from "@/lib/utils";
import TestimonialsCarouselCard from "./TestimonialsCarouselCard";
import useResponsive from "@/hooks/useResponsive";

const TestimonialsCarousel = () => {
    const { isMobile } = useResponsive();
  return (
    <div className={classNames(
        "mt-10 ",
        isMobile ? "product-container" : "product-container-left"
        )}>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: false,
          skipSnaps: false,
          slidesToScroll: 2
        }}
        className="relative"
      >
        <CarouselContent className="ml-0">
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className={cn(
                // 1 per view on mobile, 2 on md, 3 on lg (like your desktop)
                "basis-2/3 md:basis-2/3 lg:basis-2/3 xl:basis-2/5",
                "pl-2 pr-2 sm:pl-3 sm:pr-3"
              )}
            >
              <TestimonialsCarouselCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
