import { Link } from "react-router-dom"
import "./Payment.css"

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>ACCOUNT DETAILS:</h2>
      <p><span>Account Name: </span>Okwodu Cynthia Chinenye</p>
      <p><span>Bank: </span>UBA</p>
      <div>
        <Link to={"/payment-confirmation"}>
        <button>I Have Paid</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Payment