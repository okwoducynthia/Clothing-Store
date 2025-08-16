import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams()
  console.log(id);
  
   const [viewResult, setViewResult] = useState<any>({});
   console.log(viewResult);

   useEffect(() => {
       const fetchPosts = async () => {
         try {
           const { data } = await axios.get(
             `/${id}`
           );
           console.log(data);
   
           setViewResult(data);
         } catch (error) {
           console.error("Result not Found:", error);
         }
       };
   
       fetchPosts();
     }, []);
   
  return (
    <div>
      <h1>Product Details Screen</h1>
      <h4>{viewResult?.category}</h4>
      <h5>{viewResult?.rating}</h5>
      <h5>{viewResult?.price}</h5>
      {viewResult?.products?.images?.map((items: any) => (
      <>
        <img src={items.image} alt="" />
      </>
    ))}
      {/* The reason for the question mark is because the details maybe empty, 
      the question makes sure data does not breakdown */}
    </div>
  )
}

export default ProductDetails