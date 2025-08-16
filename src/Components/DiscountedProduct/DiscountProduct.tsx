import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { DiscountedProduct } from "../../Data/DiscountedProducts.tsx/DiscountedProduct";
import "./DiscountedProduct.css"


const DiscountedProducts= () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          ""
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  // const navigate= useNavigate()
  // const productDetails = (id:any) => {
  //   navigate(`/productDetails/${id}`)
  // }
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
          
        {DiscountedProduct.map((items: any) => (
          <div key={items.category} className="discount-item">
            <img  className="hover:scale-110 transition ease-in-out" src={items.image} alt={items.category} />
            <p>{items.category}</p>
            <i>
                {Array.from({ length: items.rating }).map((_, i) => (
                  <span key={i} id="star">
                    &#9733;
                  </span>
                ))}
                {Array.from({ length: 5 - items.rating }).map((_, i) => (
                  <span key={i} id ="empty-star">
                    &#9733;
                  </span>
                ))}
              </i>
            <h4>{items.price}</h4>
            <button className="discount-btn">View</button>
          </div>
        ))}
      </div>      
    </div>   
  );
};

export default DiscountedProducts;
