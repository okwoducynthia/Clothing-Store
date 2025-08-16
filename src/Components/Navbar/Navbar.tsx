import "./Navbar.css"
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

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
            <div className="mt-5 w-full relative bg-white">
              <input
                type="text"
                placeholder="Search..."
                className="w-full font-paragraph-font border-1 border-solid border-gray-300 rounded-sm p-2 text-gray-400 text-sm outline-0 font-extralight h-[8vh]"
              />
              <span className="absolute right-3 top-3 text-gray-400">
                <BsSearch />
              </span>
            </div>
            <ul className="mt-5 w-full flex flex-col gap-y-3 p-3 bg-white h-full" style={{color:"rgb(255, 103, 1)"}}>
              <NavLink to={"/home"} onClick={closeSidebar}><li className="p-1">Home</li></NavLink>
              <NavLink to={"/collection"} onClick={closeSidebar}><li className="p-1">Collection</li></NavLink>
              <NavLink to={"/about"} onClick={closeSidebar}><li className="p-1">About</li></NavLink>
              <li className="p-1">Cart</li>
              <li className="p-1">Checkout</li>
              <li className="p-1">My account</li>
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
          <p>£0.00</p>
          <i className="fa-solid fa-bag-shopping">
            <span>0</span>
          </i>
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