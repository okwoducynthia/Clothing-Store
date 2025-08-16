import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <section>
        <div className="contact-hero">
          <h1>Get In Touch</h1>
        </div>
      </section>
      
      <section>
        <div className="contact-sub-container">
          <div className="contact-sub">
            <i className="fa-solid fa-phone"></i>
            <p>+234 81-4753-5731</p>
            <p>+234 90-1605-0704</p>
          </div>

          <div className="contact-sub">
            <i className="fa-solid fa-envelope"></i>
            <p>okwoducynthia@gmail.com</p>
            <p>okwodunenye@gmail.com</p>
          </div>

          <div className="contact-sub">
            <i className="fa-solid fa-location-dot"></i>
            <p>World Bank, Palm Groove Estate</p>
            <p>Owerri, Imo state</p>
          </div>
        </div>
       </section>
    </div>
  )
}

export default Contact