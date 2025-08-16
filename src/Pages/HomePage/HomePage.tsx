import DiscountedProducts from "../../Components/DiscountedProduct/DiscountProduct"
import Hero from "../../Components/Hero/Hero"
import PopularProducts from "../../Components/PopularProducts/PopularProducts"
import Shipping from "../../Components/Shipping-Terms/Shipping"
import Testimonal from "../../Components/Testimonial/Testimonial"
import TradingTicker from "../../Components/Tradeticker/Tradeticker"



const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Shipping/>
      <PopularProducts/>
      <TradingTicker/>
      <DiscountedProducts/>
      <Testimonal/>
    </div>
  )
}

export default HomePage