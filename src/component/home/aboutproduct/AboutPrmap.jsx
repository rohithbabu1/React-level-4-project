import React from 'react'
import Col from 'react-bootstrap/Col';
function AboutPrmap(props) {
  return (
    <>
    <Col xs={12} sm={12} md={6 } lg={3} xl={3} xxl={3}>
            <div className="product_card">
                      <div>
                          <img className="ab_pr" src={props.details.photos}  alt=""/>
                      </div>
                      <div>
                          <h5 className="product_text pr_ab_text">{props.details.heading}</h5>
                          
                          <span  className="pr_abtext">{props.details.discription}</span>
                      </div>
                  </div>
    </Col>
  
  </>

  )
}

export default AboutPrmap