import axios from "axios";
import React, { useState, type FormEvent } from "react";
import { useNavigate} from 
"react-router-dom";
import "./PlaceOrder.css";


const PlaceOrder: React.FC = () => {
const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");


  const [loading, setLoading] = useState<boolean>(false);

  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    setLoading(true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    };
    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(
        "http://localhost:7000/api/delivery",
        data,
        {
          headers,
        }
      );

      setSuccessMsg("successful!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");

      localStorage.setItem("userId", response.data._id);
        navigate("/payment");
        // This navigate is where you would redirect the user after signing up
    } catch (error: any) {
      setErrorMsg(error?.response?.data?.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="update-sub-container">
      <form onSubmit={handleSubmit}>
        <h3>DELIVERY INFORMATION</h3>

        {/* ==firstName section starts here== */}
          <div className="title-update">
            <input 
            type="text" 
            name="firstName"
            placeholder="firstName" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} />
          </div>
          {/* ==firstName section ends here== */}

          {/* ==lastName section starts here== */}
          <div className="assigned-update">
            <input 
            type="text" 
            name="lastName"
            placeholder="lastName"
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* ==lastName section ends here== */}

          {/* ==email section starts here== */}
          <div className="description-update">
            <input 
            type="email" 
            name="email"
            placeholder="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* ==email section ends here== */}

          {/* ==phoneNumber section starts here== */}
          <div className="update-start-date">
            <input 
            type="text"
            name="phoneNumber"
            placeholder="phone-number"
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}  />
          </div>
          {/* ==start-date section ends here== */}

          {/* ==address section starts here== */}
          <div className="update-end-date"> 
            <input 
            type="text"
            name="address"
            placeholder="address"
            value={address} 
            onChange={(e) => setAddress(e.target.value)} />
          </div>
          {/* ==end-date section ends here== */}


           {successMsg && <div style={{color:"green", fontFamily:"roboto",fontSize:"16px"}}>{successMsg}</div>}
            {errorMsg && <div style={{color:"red", fontFamily:"roboto",fontSize:"16px"}}>{errorMsg}</div>}

          <div className="buttons">
            <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full rounded-lg py-3 font-semibold text-white shadow ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } transition`}
            >
              {loading ? "Loading..." : "Delivery information"}
            </button>
          </div>
      </form>
    </div>

  );
};

export default PlaceOrder;
