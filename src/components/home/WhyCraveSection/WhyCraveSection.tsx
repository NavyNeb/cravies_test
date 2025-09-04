import { Link } from 'react-router-dom'
import SectionContainer from '../../common/SectionContainer'
import { Button } from '../../ui/button'
import CraviesCarousel from './CraviesCarousel'

const WhyCraveSection = () => {
  return (
    <SectionContainer  title='So why cravies?' bgColor='var(--orange-app)' txtColor='#fff' >
        <CraviesCarousel />
         {/* CTA Button */}
         <Link to="/product-details"  className="flex justify-center mt-10" >
            <Button className="mx-auto text-center" >BUILD YOUR BUNDLE</Button>
         </Link>
    </SectionContainer>
  )
}

export default WhyCraveSection