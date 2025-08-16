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



function App() {
  const location = useLocation();

  // List of routes where Navbar should show
  const showNavbarRoutes = ["/home", "/collection", "/about", "/contact"]
  const showFooterRoutes = ["/home", "/collection", "/about", "/contact"]

  // Check if the current location matches any of those
  const showNavbar = showNavbarRoutes.includes(location.pathname);
  const showFooter = showFooterRoutes.includes(location.pathname);


  return (
    <>
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
      </Routes>
     {showFooter && <Footer/>}
    </>
  )
}

export default App
