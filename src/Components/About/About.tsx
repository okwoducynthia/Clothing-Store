import "./About.css"

const About = () => {
  return (
  <div>
    <div className="about-container">
      <div className="about-heading">
        <h1>About</h1>
      </div>
    </div>

    <div className="about-image-container">
      <div className="about-image">
        <img src="./images/My-image.jpg" alt=""/>
      </div>

      <div className="about-description">
        <h1>
          Cynova Stores
        </h1>

        <p>
          Welcome to Cynova Stores, where style meets comfort! We are passionate about bringing you the latest trends and timeless classics in fashion. Our carefully curated collection features high-quality clothing for every occasion, from casual wear to elegant outfits, ensuring that you always look and feel your best.

          <br/>
          <br/>

          At Cynova Stores, we believe that fashion is a form of self-expression. That's why we strive to offer a diverse range of styles, sizes, and designs to cater to every individual. Our team is dedicated to sourcing sustainable materials and supporting ethical practices, so you can shop with confidence knowing that your choices make a positive impact.
        </p>
      </div>
        
    </div>
  </div>
  )
}

export default About