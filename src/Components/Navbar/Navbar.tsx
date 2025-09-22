import "./Navbar.css"
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {

  const { cart } = useContext(ShopContext)!;
  // TO INCREASE THE QUANTITY ON THE CART BAG
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // TO DISPLAY THE PRICE AT THE NAVBAR OF SELECTED ITEMS FOR PURCHASE
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
      <div>
      {sidebar && (
        <div
          className="bg-transparent-grey-bg w-full h-full fixed right-0 top-0 flex justify-end"
          style={{ zIndex: 1000 }}
          onClick={closeSidebar}
        >
          <div
            className="w-[90%] sm:w-4/5 md:w-2/5 h-full flex flex-col font-heading-font py-5 px-2 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={toggleSidebar} className="self-end me-5 text-2xl h-[7vh]">
              <MdClose />
            </button>
            <ul className="mt-5 w-full flex flex-col gap-y-3 p-3 bg-white h-full" style={{color:"rgb(255, 103, 1)", fontSize:"22px"}}>
              <NavLink to={"/home"} onClick={closeSidebar}><li className="p-1">Home</li></NavLink>
              <NavLink to={"/collection"} onClick={closeSidebar}><li className="p-1">Collection</li></NavLink>
              <NavLink to={"/about"} onClick={closeSidebar}><li className="p-1">About</li></NavLink>
              <NavLink to={"/cart"}><li className="p-1">Cart</li></NavLink>
              <NavLink to={"/payment"}><li className="p-1">Checkout</li></NavLink>
              <NavLink to={"/contact"} onClick={closeSidebar}><li className="p-1">Contact</li></NavLink>
            </ul>
          </div>
        </div>
      )}

      
      {/* ====NAVBAR SECTION STARTS HERE====  */}
      <header className="header-container">
        <div className="header-logo">
          <img
            src="/images/My logo.png"
            alt="Image of Company's Logo"
          />
        </div>

        <div>
          <nav>
            <ul className="header-navlinks">
              <li><NavLink to={"/home"}>Home</NavLink></li>
              <li><NavLink to={"/collection"}>Collection</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="header-cart">
          <p>₦{totalPrice.toFixed(2)}</p>

          <NavLink to={"/cart"}>
          <i className="fa-solid fa-bag-shopping" style={{marginBottom:"23px"}}>
            <span>{totalItems}</span>
          </i>
          </NavLink>

          <i className="fa-solid fa-user"></i>
        </div>
       

        <span className="header-nav-icon">
          <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
        </span>
      </header>
      {/* ====NAVBAR SECTION ENDS HERE====  */}
    </div>
  )
}

export default Navbar