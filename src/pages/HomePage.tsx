import {FounderMessageSection} from '@/components/home/FounderMessageSection'
import HeroSection from '@/components/home/HeroSection'
import SpoilerSection from '@/components/home/SpoilerSection'
import SubscriptionSection from '@/components/home/SubscriptionSection'
import TestimonialsCarousel from '@/components/home/TestimonialsSection'
import WhyCraveSection from '@/components/home/WhyCraveSection/WhyCraveSection'

const HomePage = () => {
  return (
    <div  className = "flex flex-col flex-1" >
      <HeroSection />  
      <WhyCraveSection />
      <SpoilerSection />
      <SubscriptionSection />
      <FounderMessageSection />
      <TestimonialsCarousel />
    </div>
  )
}

export default HomePage