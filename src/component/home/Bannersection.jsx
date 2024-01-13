import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BannerSection.css'

function Bannersection() {
  return (
    <>
     <Container>
      <Row>
        
        <Col sm={12} md={12 } lg={6} xl={6} xxl={6}>
        <h1 className="gradient-text" >
                        Techtide
                    </h1>
                    <h2 className="">
                        "Surfing the Waves of Innovation"
                    </h2>
                    <p id="banner_text">
                        Welcome to TechTide, your gateway to a world of cutting-edge technology and electronic wonders. Our mission is to empower individuals with the latest and greatest tech solutions to make life simpler, more enjoyable, and incredibly innovative.
                    </p>
                    <div className="banner_btn">
                        <button  className="swi">Shop now</button>
                    </div>
                
        </Col>
        
       
        <Col xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
        <img class="img-fluid" src="Smart speaker 3d vector illustration [Converted] 1.svg" alt="banner_img"/>

        </Col>
      </Row>
      </Container>
    </>
  ) 
}

export default Bannersection;