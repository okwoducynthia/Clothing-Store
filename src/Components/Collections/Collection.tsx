import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CollectionProduct } from "../../Data/Collections/CollectionProducts";
import "./Collection.css"


const ProductCollections= () => {
  const [showFilter, setShowFilter] = useState(true);
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
  const navigate= useNavigate()
  const productDetails = (id:any) => {
    navigate(`/productDetails/${id}`)
  }
  return (
    <div>
      {/* FILTER OPTIONS */}
      <div className="min-w-60" >
        
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>

          <p className="my-2 text-xl flex font-semibold items-center  cursor-pointer gap-2 filter-paragraph">FILTERS</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"></div>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Men"}/> Men
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Women"}/> Women
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Kids"}/> Kids
          </p>
        </div>
      </div>
      

      <div style={{
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        flexWrap:"wrap",
        gap: "20px",
        height:"100%",
        paddingBottom:"40px"
        }}>
          
        {CollectionProduct.map((items: any) => (
          <div key={items.category} className="collection-item">
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
            <button className="popular-btn"  onClick={() => productDetails(items._id)}>View</button>
          </div>
        ))}
      </div>      
    </div>   
  );
};

export default ProductCollections;
