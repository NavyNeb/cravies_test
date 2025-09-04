import useResponsive from '@/hooks/useResponsive';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
  } from '../../../ui/carousel';
import { SPOILERS } from '@/data/mockData';
import { classNames } from '@/lib/utils';
import SpoilerCarouselCard from './SpoilerCarouselCard';

const SpoilerCarousel = () => {
    const { isMobile } = useResponsive();
  return (
    <div className={classNames("overflow-hidden", !isMobile ? "product-container-left " : "px-4")} >  
        <Carousel
            opts={{
              align: isMobile ? "center" : "start",
              loop: isMobile ? false : true,
              inViewThreshold: 0.5,
              slidesToScroll: isMobile ? 1 : 3,
            }}
            className="w-full max-w-full mx-auto"
          >
            <CarouselContent>
              {SPOILERS.map((spoiler) => (
                <CarouselItem key={spoiler.id} className="basis-4/5 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                 <SpoilerCarouselCard {...spoiler} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>
    </div>
  )
}

export default SpoilerCarousel