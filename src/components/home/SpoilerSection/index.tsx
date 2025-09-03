import SectionContainer from '@/components/common/SectionContainer';
import SpoilerCarousel from './SpoilerCarousel';

const SpoilerSection = () => {
  return (
    <SectionContainer title='Spoiler: They didn’t stop at one bowl.' bgColor='var(--green-app)' txtColor='#fff' >
        <SpoilerCarousel />
    </SectionContainer>
  )
}

export default SpoilerSection