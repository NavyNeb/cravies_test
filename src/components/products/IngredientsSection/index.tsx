import SectionContainer from '../../common/SectionContainer'
import CraviesCarousel from './CraviesCarousel'

const IngredientsSection = () => {
  return (
    <SectionContainer  title='MADE WITH HIGH QUALITY, NATURAL INGREDIENTS' bgColor='var(--yellow-app)' txtColor='var(--green-app)' >
        <CraviesCarousel />
    </SectionContainer>
  )
}

export default IngredientsSection