import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <div>
      <section className="Hero-main-container">
        <div className="hero-text-container">
          <h3>Best Prices</h3>
          <h1>Lastest Arrivals</h1>
          <Link to={"/collection"}>
          <div>
            <button>Shop Now
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Hero