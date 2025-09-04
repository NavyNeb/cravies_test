import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
} from '../../../ui/carousel';
import { INGREDIENTS_DATA } from '@/data/mockData';
import CraviesCarouselCard from './CraviesCarouselCard';
import { motion } from 'framer-motion';


const CraviesCarousel = () => {
  return (
    <div className="w-full lg:px-4">
      <div className="mx-auto product-container ">

        {/* Desktop View - Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-12 mb-8">
            {INGREDIENTS_DATA.map((ingredient) => (
              <motion.div key={ingredient.id} whileHover={{ scale: 1.0045 }} >
                <CraviesCarouselCard {...ingredient} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              inViewThreshold: 0.5,
              slidesToScroll: 1,
            }}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent classes='p-4 overflow-clip ' className='gap-4' >
              {INGREDIENTS_DATA.map((ingredient) => (
                <CarouselItem className='basis-4/5 h-fit' key={ingredient.id}>
                   <motion.div key={ingredient.id} whileHover={{ scale: 1.0045 }} >
                 <CraviesCarouselCard {...ingredient} />
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