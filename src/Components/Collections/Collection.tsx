import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Collection.css"
import { toast } from "react-toastify";


const ProductCollections= () => {
  const [list, setList] = useState<any>([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/products/list")
      if(response.data.success){
        setList(response.data.products);
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
      <div style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        flexWrap:"wrap",
        gap: "20px",
        height:"100%",
        padding:"40px 0"
        }}>
          
        {list.map((items: any) => (
          <div key={items.category} className="collection-item">
            <img onClick={() => productDetails(items._id)} className="hover:scale-110 transition ease-in-out cursor-pointer" src={items.images[0]} alt="" />
            <p>{items.productName}</p>
            <p>{items.category}</p>
            <h4>{items.price}</h4>
            <button className="popular-btn"  onClick={() => productDetails(items._id)}>View</button>
          </div>
        ))}
      </div>      
    </div>   
  );
};

export default ProductCollections;
