
import Home from './component/home/Home'
import './App.css'
import HeaderSection from './component/header/HeaderSection'
import Footer from './component/footer/Footer'
import { Container } from 'react-bootstrap'
import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AboutUS from './component/AboutusPage/AboutUS'
import Contact from './component/contactus/Contact'
import AddCart from './component/CartPage/AddCart'
import Productdis from './component/Productexpantion/Productdis'
import React, { useState } from 'react'
import BIlling from './component/BIlling'
import '../src/component/footer/footer.css'
import './component/home/Home.css'
import Shoping from './component/shop/Shoping'
import Signup from '../src/component/header/Signup'

function App() {
 
  const [cartno,updcartno]=useState(0)
  return (
    <><Container>
    
      <BrowserRouter>
      <HeaderSection cartno={cartno} />
        <Routes>
          <Route path='/'element={<Home cartno={cartno} updcartno={updcartno}/>}/>
      
          <Route path='about'element={<AboutUS/>}/>
          <Route path='contact'element={<Contact/>}/>
          <Route path='cart'element={<AddCart/>}/>
          <Route path='billing'element={<BIlling/>}/>
          <Route path='shop'element={<Shoping/>}/>
          <Route path='sign'element={<Signup/>}/>
          <Route path="productdis" element={<Productdis/>}>
           
            </Route>    
            <Route path=':productid' element={<Productdis/>}/>
            
        </Routes>
      </BrowserRouter>
      
       
       {/* <Productdis/> */}
      </Container>
   
 

      <div className=" bg-grey head_spacingb">
        <Container>
          <Footer/>
        </Container>
      </div>
    </>
  )
}

export default App
