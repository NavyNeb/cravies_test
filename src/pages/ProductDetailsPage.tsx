import SpoilerSection from '@/components/common/SpoilerSection'
import ChildhoodCerealSection from '@/components/products/ChildhoodCerealSection'
import ComparisonTableSection from '@/components/products/ComparisonTableSection'
import { FAQSection } from '@/components/products/FAQSection'
import IngredientsSection from '@/components/products/IngredientsSection'
import NeverWithoutSection from '@/components/products/NeverWithoutSection'
import ProductDetialSection from '@/components/products/ProductDetialSection'
import StatsSection from '@/components/products/StatsSection'
import { useEffect } from 'react'

const ProductDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='flex flex-col flex-1' >
      <ProductDetialSection />
      <ChildhoodCerealSection />
      <IngredientsSection />
      <NeverWithoutSection />
      <ComparisonTableSection />
      <SpoilerSection />
      <FAQSection />
      <StatsSection />
    </div>
  )
}

export default ProductDetailsPage