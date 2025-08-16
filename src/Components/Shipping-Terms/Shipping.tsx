import "./Shipping.css"

const Shipping = () => {
  return (
    <div className="shipping-container">
      <div className="shipping-header">
        <i className="fa-solid fa-truck"></i>
        <h2>Free Shipping</h2>
      </div>

      <div className="shipping-header">
        <i className="fa-solid fa-money-bill"></i>
        <h2>Huge Savings</h2>
      </div>

      <div className="shipping-header">
        <i className="fa-solid fa-money-check"></i>
        <h2>Safe Payment</h2>
      </div>

      <div className="shipping-header">
        <i className="fa-solid fa-recycle"></i>
        <h2>Easy Returns</h2>
      </div>
    </div>
  )
}

export default Shipping