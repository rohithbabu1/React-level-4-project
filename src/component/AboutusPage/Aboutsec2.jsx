import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Aboutsec2() {
  return (
    <>
        <Row className='d-flex align-items-center'>
            <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
                <img src="about us (1).svg" alt="our mission" />
            </Col>
            <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
                <h1 className='pb-5'>Our Mission:</h1>
                <p>TechTide was born out of a passion for all things tech. Our journey began with a simple yet ambitious goal – to make the latest innov  ations in technology accessible to everyone. We envisioned a space where cutting-edge gadgets, smart devices, and essential tech accessories could be discovered, experienced, and enjoyed by tech enthusiasts and novices alike.</p>
            </Col>
        </Row>

    </>
  )
}

export default Aboutsec2;