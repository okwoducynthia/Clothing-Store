import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image">
        <img src="./images/My logo.png" alt="" />
      </div>

      <div className="footer-navlinks">
        <h1>Services</h1>
        <li>Home</li>
        <li>Collection</li>
        <li>About</li>
        <li>Contact</li>
      </div>

      <div className="footer-contact">
        <h1>Contact</h1>
        <h2>World Bank, Palm Groove Estate</h2>
        
        <p>
          <i className="fa-solid fa-phone"></i> 
            +234 81-4753-5731
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> 
            okwoducynthia@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Footer