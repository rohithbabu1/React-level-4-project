import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import CartBtn from '../../btn/CartBtn';
import Productdis from '../../Productexpantion/Productdis';
import { Link } from 'react-router-dom';
function PorductMap1(props) {
  // const [cartno,updcartno]=useState(0)
  return (
    <>
    <Col xs={12} sm={12} md={6 } lg={3} xl={3} xxl={3}>
    <div className="card card_body "  onClick={()=>window.scrollTo(0,0)}>
      <Link to={`${props.details.id}`}><img className="card-img " src={props.details.photoName} alt="Vans"  onClick={()=>window.scrollTo(0, 0)}/></Link>
 
 
 <div className="card-body">
     <h4 className="card-title text-center" >{props.details.productName}</h4>
     
     <span className="card-text text-center">
     {props.details.details}         </span>
     
     <div className="buy d-flex justify-content-between align-items-center">
         <div className="cart">
             <div>
                 <h4>{props.details.price}</h4>
                 <div className="icon_sizing">
                 <i className="bi bi-star-fill"></i>
                 <i className="bi bi-star-fill"></i>
                 <i className="bi bi-star-fill"></i>
                 <i className="bi bi-star-fill"></i>
                 <i className="bi bi-star"></i>
                 </div>
                 
             </div>
             
         </div>
         <Link to={`${props.details.id}`}><CartBtn cartbtnName={"Buy now"}  onClick={()=>window.scrollTo(0, 0)}  cartno={props.cartno} updcartno={props.updcartno}/></Link>
          
         
       
     </div>
 </div>
 
</div>
</Col>
</>
  )
}

export default PorductMap1;

