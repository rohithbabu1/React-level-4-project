import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import ExclusiveBtn from '../btn/ExclusiveBtn';

function Aboutus() {
  return (
    <>
    <Container>
    <Row>
        <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
            <img src="about us (1).svg" className=" img-fluid" alt="about_image"/>
        </Col>
        <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}  >
        <h1 className="head_spacinga">
                        About
                    </h1>
                    <p>
                        Welcome to TechTide, your one-stop destination for all things e-commerce! Our journey began with a simple idea: to make online shopping a delightful and seamless experience for everyone.
    
                        At TechTide, we're passionate about curating a diverse selection of high-quality products that cater to your every need and desire. Whether you're searching for the latest fashion trends, cutting-edge tech gadgets, exquisite home decor, or everyday essentials, we've got you covered.
                        What sets us apart is our unwavering commitment to customer satisfaction. 
                    </p>
                    <div>
                        
                        <ExclusiveBtn btnname={"Read more"} />
                    </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Aboutus