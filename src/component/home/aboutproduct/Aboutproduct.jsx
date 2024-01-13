import React from 'react'
import AboutPrmap from './AboutPrmap'
import { Row } from 'react-bootstrap' 
import './Aboutproduct.css'
const aboutProduct=[
  {
      id:1,
      photos:"ba_pr_3-01.svg",
      heading:"High-Quality Selection:",
      discription:"At TechTide, we take pride in offering a curated collection of top-notch."
  },
  {
      id:2,
      photos:"ba_pr_1-01.svg",
      heading:" User-Focused Features: ",
      discription:"Whether you're a professional gamer, a tech enthusiast, or simply looking to improve."
  },
  {
      id:3,
      photos:"ba_pr_4-01.svg",
      heading:"Affordability:",
      discription:"Quality shouldn't come at a high price. We strive to offer competitive prices on all our ."
  },
  {
      id:4,
      photos:"ba_pr_3-01.svg",
      heading:"Durability and Reliability:",
      discription:"We understand that electronic accessories need to withstand daily use."
  },
]
function Aboutproduct() {
  return (
    <>
   <Row>
   {
        aboutProduct.map((e)=>(
            // <Aboutpr details={e} key={e.id}/>
            <AboutPrmap details={e} key={e.id}/>
        ))
    }
   </Row>
    
   
    </>
  )
}

export default Aboutproduct;