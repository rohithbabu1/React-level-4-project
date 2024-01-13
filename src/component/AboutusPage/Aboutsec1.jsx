import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'

function Aboutsec1() {
  return (
    
        <Row className='d-flex align-items-center'>
            <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}> 
                <h1 className='pb-5'>About</h1>
                <p>Welcome to TechTide, your gateway to a world of technological marvels! At TechTide, we're more than just an e-commerce platform; we're a community of tech enthusiasts, innovators, and everyday individuals who believe in the power of technology to enhance our lives.</p>
            </Col>
            <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
                <img src='about us (1).svg' alt='about_img'/>
            </Col>
        </Row>
  )
}

export default Aboutsec1