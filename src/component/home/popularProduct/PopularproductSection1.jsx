import React from 'react'
import PorductMap1 from './PorductMap1'
import './PopularProduct.css'
import { Row } from 'react-bootstrap'

const product=[
    {
        id:1,
        photoName:"IPAD-01.svg",
        productName:"Ipad",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:2,
        photoName:"keyboard-01.svg",
        productName:"Keyboard",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:3,
        photoName:"monitor-01.svg",
        productName:"Monitor",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:4,
        photoName:"lap-01.svg",
        productName:"Laptop",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:5,
        photoName:"USB-01.svg",
        productName:"USB drive",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:6,
        photoName:"mic-01.svg",
        productName:"Mic",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:7,
        photoName:"mouse-01.svg",
        productName:"Mouse",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },
    {
        id:8,
        photoName:"Tws-01.svg ",
        productName:"Air pods",
        details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
        price:"Rs.2999"
    },

]
function PopularproductSection1({cartno,updcartno}) {
  return (
    <>
    <Row>
    {product.map((e)=>(
       <PorductMap1 details={e} key={e.id} cartno={cartno} updcartno={updcartno}/>
    ))}
    </Row>
   
    </>
  )
}

export default PopularproductSection1