import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";

const ProductDetails = () => {
  const {id} = useParams()
  console.log(id);
  
   const [list, setList] = useState<any>({});
   const[size, setSize] = useState<any>("");
  const { addToCart } = useContext(ShopContext)!;
  // const [selectedSize, setSelectedSize] = useState<string>("");

  const handleAddToCart = () => {
  if (!size) {
  toast.error("Please select a size before adding to cart!", {
  position: "top-right",
  autoClose: 3000,
});
  return;
  }

  const product = {
  id: list.id,
  images: list.images,
  name: list.productName,
  size: size,
  quantity: 1,
  price: list.price
  };

  addToCart(product);
  };

  const fetchList = async () => {
    try {
      const response = await axios.get(`https://backend-clothing-store-q0jh.onrender.com/api/products/single/${id}`)
      if(response.data.success){
        setList(response.data.product);
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
   
  return (
    <div style={{
      marginBottom:"20px"
    }} className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100"> 
    {/* ====Product Data====   */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ====Product Images==== */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {list.images &&
              list.images.map((item:any, index:any) => (
                <img src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
            {
              !list.images && <p>No images available</p>
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className="w-full h-auto" src={list?.images?.[0]} alt="" />
          </div>

        </div>

        {/* ====Products Info===== */}
        <div className='flex-1'>
            <h1 className='font-medium text-2x1 mt-2'>{list.productName}</h1>
            <p className='mt-5 text-4x1 font-medium' style={{marginTop:"10px", marginBottom:"20px"}}> ₦ {list.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5' style={{marginBottom:"20px"}}>{list.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <b>Select Size:</b>
              <div className='flex gap-2'>
                {
                  list.sizes && list.sizes.map((item:any, index:any) => (
                    <button onClick={()=> setSize(item)} style={{padding:"10px"}} className={`bg-gray-200 ${size === item && "bg-orange-500 text-white"}`} key={index}>{item}</button>
                  ))
                }
              </div>
              <button onClick={handleAddToCart} style={{padding:"10px", width:"25%", marginTop:"10px"}} className='bg-black text-white text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr style={{margin:"10px"}} className='mt-8 sm:w-4/5 text-gray-300'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Easy return and exchange within 7 days</p>
              </div>
            </div>
        </div>
      </div>  
      
      
    </div>
  )
}

export default ProductDetails