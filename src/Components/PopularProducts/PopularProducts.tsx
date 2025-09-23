import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PopularProducts.css"
import { toast } from "react-toastify";

const PopularProducts= () => {

  const [list, setList] = useState<any[]>([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("https://backend-cynova-store.onrender.com/api/products/list")
      if(response.data.success){
        const firstFour = response.data.products.slice(0, 4);
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
      <div className="products-heading">
        <h1>BEST SELLING</h1>
      </div> 
      <div style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        gap: "20px",
        flexWrap:"wrap",
        height:"100%",
        paddingBottom:"40px"
        }}>
          
        {list.map((items: any) => (
          <div key={items.category} className="product-item">
            <img onClick={() => productDetails(items._id)} className="hover:scale-110 transition ease-in-out cursor-pointer" src={items.images[0]} alt="" />
            <p>{items.category}</p>
            <h4>{items.price}</h4>
            <button onClick={() => productDetails(items._id)} className="popular-btn">View</button>
          </div>
        ))}
      </div>      
    </div>   
  );
};

export default PopularProducts;
