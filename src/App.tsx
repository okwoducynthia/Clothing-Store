import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Footer from './Components/Footer/Footer'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ProductCollections from './Components/Collections/Collection'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { ShopProvider } from './Components/ShopContext/ShopContext'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import Payment from './Components/Payment/Payment'
import PaymentConfirm from './Components/Payment-Confirm/PaymentConfirm'



function App() {
  const location = useLocation();

  // List of routes where Navbar should show
  const showNavbarRoutes = ["/home", "/collection", "/about", "/contact", "/cart", "/payment-confirmation",`/productDetails/${location.pathname.split('/').pop()}`]
  const showFooterRoutes = ["/home", "/collection", "/about", "/contact", "/cart", "/payment-confirmation",`/productDetails/${location.pathname.split('/').pop()}`]

  // Check if the current location matches any of those
  const showNavbar = showNavbarRoutes.includes(location.pathname);
  const showFooter = showFooterRoutes.includes(location.pathname);


  return (
    <>
    <ShopProvider>
      {showNavbar && <Navbar/>}

      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/Sign-up' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/collection' element={<ProductCollections/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/delivery-info' element={<PlaceOrder/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/payment-confirmation' element={<PaymentConfirm/>}/>
      </Routes>
      <ToastContainer/>
     {showFooter && <Footer/>}
     </ShopProvider>
    </>
  )
}

export default App
