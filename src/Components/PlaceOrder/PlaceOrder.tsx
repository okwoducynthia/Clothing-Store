import "./PlaceOrder.css"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = ({setToken}:any) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("paystack");
  const [email, setEmail] = useState("");


  const onSubmitHandler = async (e:any) => {
   try {
      e.preventDefault();
      const response = await axios.post("http://localhost:7000/api/order/paystack", {
        firstName, 
        lastName, 
        email, 
        street, 
        city, 
        state, 
        zipCode, 
        country 
        })
      console.log(response);
      
      if(response.data.success){
        setToken(response.data.token)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  }



  return (
    <form onSubmit = {onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t" style={{padding:"30px"}}>
      {/* =====Left Side of Page===== */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2x1 my-3">
          <h3>DELIVERY INFORMATION</h3>
        </div>
        <div className="flex gap-3">
          <input required onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" placeholder="First Name" className="border border-gray-300 rounded w-full" style={{marginLeft:"5px"}}/>
          <input required onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" placeholder="Last Name" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
        </div>
          <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
          <input required onChange={(e) => setStreet(e.target.value)} value={street} type="text" placeholder="Street" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
        <div className="flex gap-3">
          <input required onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="City" className="border border-gray-300 rounded w-full" style={{marginLeft:"5px"}}/>
          <input required onChange={(e) => setState(e.target.value)} value={state} type="text" placeholder="State" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
        </div>
        <div className="flex gap-3">
          <input required onChange={(e) => setZipCode(e.target.value)} value={zipCode} type="number" placeholder="Zip-code" className="border border-gray-300 rounded w-full" style={{marginLeft:"5px"}}/>
          <input required onChange={(e) => setCountry(e.target.value)} value={country} type="text" placeholder="Country" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
        </div>
        <input required onChange={(e) => setPhone(e.target.value)} value={phone} type="number" placeholder="Phone" className="border border-gray-300 rounded w-full" style={{marginLeft:"2px"}}/>
      </div>

      {/* =====Right Side====== */}
      <div className="mt-8" style={{width:"100%"}}>
        <div className="mt-12">
          <h3>PAYMENT METHOD</h3>
          {/* =====Payment Method Selection===== */}
          <div className="flex gap-3 flex-col lg:flex-row payment-gateway">
            <div onClick={() => setMethod("paystack")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer w-[50%] payment-image">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "paystack" ? "bg-green-300" : ""}`}></p>
              <img src="./images/paystack-ii.webp" alt="" style={{width:"85%"}}/>
            </div>

            <div onClick={() => setMethod("flutterwave")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer w-[50%] payment-image">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "flutterwave" ? "bg-green-300" : ""}`}></p>
              <img src="./images/Flutterwave_Logo.png" alt="" style={{ width:"85%",border:"1px solid #ddd"}}/>
            </div>
          </div>

          <div className="w-full text-end mt-8" style={{display:"flex", justifyContent:"end", alignItems:"center", marginTop:"10px"}}>
            <button 
            type="submit"
            style={{backgroundColor:"black", color:"white", padding:"8px", borderRadius:"5px", fontWeight:"bold", cursor:"pointer", margin:"auto"}}>PLACE ORDER</button>
          </div>

        </div>
      </div>
    </form>
  )
}

export default PlaceOrder