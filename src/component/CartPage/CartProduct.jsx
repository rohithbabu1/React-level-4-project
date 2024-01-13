import React from 'react'
import ExclusiveBtn from '../btn/ExclusiveBtn'
import './addcart.css'
import { Col, Row } from 'react-bootstrap'
function CartProduct() {
  return (
  
  <>
  <div></div>
     <Row>
      <Col  xs={12} sm={12} md={12 } lg={8} xl={8} xxl={8}>
        <div className='cupon d-flex justify-content-between'>
          <span>Add coupon</span>
          <i class="bi bi-arrow-right-circle"></i>
        </div>
          <div className='d-flex cartrr'>
            <div>
                <img  src="mic-01.svg" className='size_img' alt="product_image" />
                
            </div>
            <div>
                <h5>MIC</h5>
                <p>AU-902 USB Condenser Podcast Microphone, with Dual
                    Volume Control, Mute Button, Gaming, Studio Recording,
                    YouTube Microphone
                </p>
                <div><i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                </div>
                <div className='d-flex'>
                  <span className='btnpadding'><ExclusiveBtn  btnname={"Move to wishlist"}/></span>
                  
                  <ExclusiveBtn  btnname={"Remove"}/>
                </div>
            </div>
            <div className=''>
                <h2>Rs:2999</h2>
                <span>Inc. all tax</span>
                <h5>MRP:4000 Rs</h5>
            </div>
        </div>
      </Col>
      <Col  xs={12} sm={12} md={12 } lg={4} xl={4} xxl={4}>
      <div className='cupon d-flex justify-content-between'>
          <span>Express Delivery</span>
          <i class="bi bi-truck"></i>
        </div>
        <div className='cartrr'>
            <h2 className='text-center'>Order summary</h2>
            <div className="pricing d-flex justify-content-between">
                <ul>
                  <li>Original price</li>
                  <li>Delivery</li>
                  <li>price</li>
                </ul>
                <ul>
                  <li>Rs.4000</li>
                  <li><span className='stricke'>Rs.40</span> Free</li>
                  <li>Rs.2999</li>
                </ul>
            </div>
            <hr/>
            <div className="pricing d-flex justify-content-between" >
                <ul>
                  <li>Total</li>
                </ul>
                <ul>
                  <li>Rs.2999</li>
                </ul>

            </div>
            <div className='d-flex justify-content-center'>
              <ExclusiveBtn className='text-center' btnname={"Order now"}/>
            </div>
            
        </div>
      </Col>
    </Row>
  </>
   
   
  )
}

export default CartProduct