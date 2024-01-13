import React from 'react'
import './Exclusive.css'
import Image from 'react-bootstrap/Image';  
import ExclusiveBtn from '../btn/ExclusiveBtn';
import CartBtn from '../btn/CartBtn';
function Exclusive(props) {
  return (  
    <div className="exclusive">
    <div className="exclucive_spacing ">
        <img src={props.excontant} className="exclucive_img" alt="exclucive_img"/>
        {/* <Image src={props.excontant} fluid  /> */}

    </div>
    <div>
        <span>GET UP TO 20% OFF TODAY ONLY ! </span>
        <h3>THE 4K HDR COMPACT DRONE</h3>
        <div>  <CartBtn cartbtnName={"Shop now"}/> </div> 
    </div>   
</div>

  )
}

export default Exclusive