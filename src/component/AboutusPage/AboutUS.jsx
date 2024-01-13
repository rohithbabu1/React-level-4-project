import React from 'react'
import Aboutsec1 from './Aboutsec1'
import '../home/Home.css'
import Aboutsec2 from './Aboutsec2'
import { Col, Row } from 'react-bootstrap'
import WhyyouChose from './WhyyouChose'
function AboutUS() {
  return (
    <>
    <div className='spacing'>
      <Aboutsec1/>
    </div>
    <div className='spacing'>
      <Aboutsec2/>
    </div>
    <div className='spacing '>
        <h1 className='pb-5 text-center' >Why Choose TechTide?</h1>
        <p className='text-center'>Curated Excellence: Our product selection is a result of careful curation,  <br/> ensuring that each item meets our high standards for quality,  <br/>  performance, and innovation.</p>
    </div>
    <div className="spacing">
      <WhyyouChose/>
    </div>
    <div className="spacing">
      <h1 className='pb-5 text-center'>Join the TechTide Experience:</h1>
      <p className='text-center'>Whether you're a seasoned tech enthusiast or just starting your journey, TechTide invites you to join our community. Discover, explore, and embrace the possibilities that technology holds. Welcome to TechTide – where the tide of innovation is always high, and the future is at your fingertips!</p>
    </div>
        
    </>
  )
}

export default AboutUS;