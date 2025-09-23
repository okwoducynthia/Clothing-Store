import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DiscountedProduct.css"
import { toast } from "react-toastify";

const DiscountedProducts= () => {
   const [list, setList] = useState<any[]>([]);
  
    const fetchList = async () => {
      try {
        const response = await axios.get("https://backend-cynova-store.onrender.com/api/products/list")
        if(response.data.success){
          const firstFour = response.data.products.slice(28, 32);
          setList(firstFour);
        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
      }
    }
  
    useEffect(() => {
      fetchList();
    }, [])
  const navigate= useNavigate()
  const productDetails = (id:any) => {
    navigate(`/productDetails/${id}`)
  }
  return (
    <div>
      <div className="discount-heading">
        <h1>DISCOUNT PRODUCTS</h1>
      </div>
      
      <div style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        gap: "20px",
        flexWrap:"wrap",
        height:"100%",
        padding:"30px 0"
        }}>
          
        {list.map((items: any) => (
          <div key={items.category} className="discount-item">
            <img onClick={() => productDetails(items._id)} className="hover:scale-110 transition ease-in-out cursor-pointer" src={items.images[0]} alt="" />
            <p>{items.category}</p>
            <h4>{items.price}</h4>
            <button onClick={() => productDetails(items._id)}  className="discount-btn">View</button>
          </div>
        ))}
      </div>  

      {/* About Section */}
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
  );
};

export default DiscountedProducts;
