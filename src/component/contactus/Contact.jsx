import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ExclusiveBtn from '../btn/ExclusiveBtn'
import '../contactus/contact.css'

function Contact() {
  return (
    <>
    <h1 className="head_spacingi">Contact Us</h1>
    <Row className='align-items-center'>
        
        <Col xs={12} sm={12} md={12 } lg={5} xl={5} xxl={5}>
            <img src="contact us-01.svg" alt="contact img" />
        </Col>
        <Col xs={12} sm={12} md={12 } lg={3} xl={3} xxl={3}>
        </Col>
        <Col xs={12} sm={12} md={12 } lg={4} xl={4} xxl={4}>
            <div className="contact_main">
                <div className="contact_sub">
                    <div className='contactinputSpacing'>
                        <label>Name</label><br/>
                        <input type="text" className='contactinput' placeholder='Enter your name' />
                    </div>
                    <div className='contactinputSpacing'>
                        <label>Email address</label><br/>
                        <input type="text" className='contactinput' placeholder='Enter your Email address' />
                    </div>
                    <div className='contactinputSpacing'>
                        <label>Phone Number</label><br/>
                        <input type="text" className='contactinput' placeholder='Enter your Number' />
                    </div>
                    <div className='contactinputSpacing'>
                        <label>Message</label><br/> 
                        <input type="text" className='contactinput' placeholder='Write your Message' />
                    </div>
                  


                 

                    
                </div>
                <div className="contact_sub">
                    <ExclusiveBtn  btnname={'submit'}/>
                </div>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Contact