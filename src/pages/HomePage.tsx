import {FounderMessageSection} from '@/components/home/FounderMessageSection'
import HeroSection from '@/components/home/HeroSection'
import SpoilerSection from '@/components/common/SpoilerSection'
import SubscriptionSection from '@/components/home/SubscriptionSection'
import TestimonialsCarousel from '@/components/home/TestimonialsSection'
import WhyCraveSection from '@/components/home/WhyCraveSection/WhyCraveSection'
import { useEffect } from 'react'
import { toast } from 'sonner'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    toast("Click on any green button to see a details page", {
      description: "An example of a toast message",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  })
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