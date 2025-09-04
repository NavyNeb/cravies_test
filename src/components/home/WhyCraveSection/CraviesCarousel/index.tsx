import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
} from '@/components/ui/carousel';
import { benefits } from '@/data/mockData';
import CraviesCarouselCard from './CraviesCarouselCard';
import { motion } from 'framer-motion';

const CraviesCarousel = () => {
  return (
    <div className="w-full lg:px-4">
      <div className="mx-auto max-w-5xl">

        {/* Desktop View - Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-12 mb-8">
            {benefits.map((benefit) => (
              <motion.div key={benefit.id} whileHover={{ scale: 1.0045 }} >
                <CraviesCarouselCard {...benefit} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "center",

              loop: true,
              inViewThreshold: 0.5,
              slidesToScroll: 1,
            }}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent classes='p-4 overflow-clip ' className='gap-4' >
              {benefits.map((benefit) => (
                <CarouselItem className='basis-4/5' key={benefit.id}>
                   <motion.div key={benefit.id} whileHover={{ scale: 1.0045 }} >
                 <CraviesCarouselCard {...benefit} />
                 </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CraviesCarousel;