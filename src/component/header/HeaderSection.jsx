import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Home from '../home/Home';
import ExclusiveBtn from '../btn/ExclusiveBtn';
import logo from "/logo-01.svg" 
function HeaderSection({cartno}) {
  return (
    <div> <Navbar expand="lg">
    <Container >
    <Link className='navitems pe-2' to='/'><img class="navbar-brand logo_img" src={logo} alt="Logo"/></Link>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <Link className='navitems pe-2' to='/'>Home</Link>
          <Link className='navitems pe-2' to='about'>About</Link>
          <Link className='navitems pe-2' to='shop'>Shop</Link>
          <Link className='navitems pe-2' to='contact'>Contact us</Link>
          {/* <Form className="d-flex search_icon">
          {/* <div className="form-group has-search ">
              
              <i className="bi bi-search form-control-feedback hidden iconq"></i>
              <input type="text" className=" searchbar " placeholder="Search" />
          </div> 
          
        </Form> */}
        <Link className='navitems pe-2' to='sign'><ExclusiveBtn btnname={"Sign-up"}/> </Link>
        
        {/* <div className='pe-2'>
          <div className='cartNomain '>
            <div className='cartNo'>
              <div><span>{cartno}</span></div>
                
            </div>
            <div>     <Link className='navitems' to='cart'><i class="bi bi-cart3 cart_icon profile"></i></Link></div>
     
          </div>
        </div> */}
        
        
        
        {/* <div class="">
        <Link className='navitems' to='cart'><i class="bi bi-person-circle cart_icon"></i></Link>
          
        </div> */}
  
        </Nav>
    
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default HeaderSection;