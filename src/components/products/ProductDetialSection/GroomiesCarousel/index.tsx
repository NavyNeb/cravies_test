import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import { CEREAL_BOX, NUTRITIONAl_INFO } from '@/data/mockData'
import CarouselPagination from './CarouselPagination'
import React, { useEffect } from "react"


const GroomiesCarousel = () => {
    const [api, ] = React.useState<CarouselApi>();
     const [selectedIndex, setSelectedIndex] = React.useState(0);
        const [slideCount, setSlideCount] = React.useState(0);
      // @ts-ignore
        useEffect(() => {
            if (!api) return;
      
            const updateSelection = () => {
              setSelectedIndex(api.selectedScrollSnap());
            };

            console.info('api.scrollSnapList().length', api.scrollSnapList().length)
        
            setSlideCount(api.scrollSnapList().length);
            setSelectedIndex(api.selectedScrollSnap()+1);
            
            api.on("select", updateSelection);
            return () => api.off("select", updateSelection);
        }, [api]);
      
        const scrollTo = (index: number) => {
          api?.scrollTo(index);
        };

  return (
      <div className="relative w-full">
        {/* Main Carousel */}
        <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-4xl mx-auto mb-8">
          <CarouselContent>
            {CEREAL_BOX.map((cereal) => (
              <CarouselItem key={cereal.id} className="basis-full">
               <img src={"/images/cheesy-cravies.jpg"} alt={cereal.name} className="h-[400px] w-[400px] mx-auto object-cover rounded-lg shadow-lg" />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="size-14 bg-black-app hover:bg-black-app text-white border-none rounded-[12px] animate-none" withShadow={false} />
          <CarouselNext className="size-14 bg-black-app hover:bg-black-app text-white border-none rounded-[12px]" withShadow={false} />
          
        </Carousel>
        
        {/* Nutritional Info Cards */}
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {NUTRITIONAl_INFO.map((info, index) => (
            <div key={index} style={{ backgroundColor: info.bgcolor }} className={`rounded-[16px] p-4 flex flex-col justify-center text-center`}>
              <div style={{ color: info.color }} className="text-2xl font-bold  mb-1">{info.label}</div>
              <div style={{ color: info.color }} className="text-sm font-bold ">{info.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <CarouselPagination scrollTo={scrollTo} slideCount={slideCount} selectedIndex={selectedIndex} />
      </div>
  )
}

export default GroomiesCarousel