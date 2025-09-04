import GrommiesCarousel from './GroomiesCarousel'
import VarietyPackComponent from './VarietyPackComponent'

const ProductDetialSection = () => {
  return (
    <section className="product-container relative isolate overflow-hidden bg-orange-app pt-36 pb-10 grid grid-cols-1 md:grid-cols-2 place-items-start gap-4">
        {/* Image Slider */}
        <GrommiesCarousel />
        {/* Product Details Area */}
        <VarietyPackComponent />

    </section>
  )
}

export default ProductDetialSection