import React from 'react'
import SectionContainer from '../../common/SectionContainer'
import CraviesCarousel from './CraviesCarousel'
import { Button } from '../../ui/button'

const WhyCraveSection = () => {
  return (
    <SectionContainer  title='So why cravies?' bgColor='var(--orange-app)' txtColor='#fff' >
        <CraviesCarousel />
         {/* CTA Button */}
         <div  className="flex justify-center mt-10" >
            <Button className="mx-auto text-center" >BUILD YOUR BUNDLE</Button>
         </div>
    </SectionContainer>
  )
}

export default WhyCraveSection