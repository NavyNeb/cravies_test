import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionContainer from "../../common/SectionContainer";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { Link } from "react-router-dom";


export default function TestimonialsSection() {

  return (
    <SectionContainer>
      {/* Header row */}
      <div className="product-container flex items-center justify-center md:justify-between gap-4 ">
        <h2
          className={cn(
            "font-wosker uppercase leading-none tracking-tight text-black-app",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          )}
        >
          Cereals.
          {" "}Feelings.
          {" "}Chaos.
        </h2>

<Link to="/product-details" >
        <Button     
          className={cn("bg-orange-app", 
            "hidden shrink-0 md:inline-flex")}
        >
          Build Your Bundle
        </Button>
</Link>
      </div>

      {/* Carousel */}
      <TestimonialsCarousel />

      {/* Mobile CTA */}
      <div className="mt-6 flex justify-center px-4 md:hidden">
        <Button
          className="bg-orange-app"
        >
          Build Your Bundle
        </Button>
      </div>
    </SectionContainer>
  );
}

