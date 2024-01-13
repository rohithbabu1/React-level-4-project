import HeaderSection from "../header/HeaderSection";
import Bannersection from "./Bannersection";
import '../home/Home.css'
import Exclusive from "./Exclusive";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Aboutus from "./Aboutus";

import PopularproductSection1 from "./popularProduct/PopularproductSection1";
import Aboutproduct from "./aboutproduct/Aboutproduct";
import Footer from "../footer/Footer";




function Home( {cartno,updcartno}) {
  return (
    <>
   
   
    <div className='spacingb' >
      <Bannersection/>
    </div>
    <Container>
    <div className='spacing' >
      
      <Row>
     <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
       <Exclusive excontant={"drone-01-01.svg"}/>
     </Col>

     <Col  xs={12} sm={12} md={12 } lg={6} xl={6} xxl={6}>
       <Exclusive excontant={"camera-01.svg"}/>
     </Col>
   </Row>
   
 </div>
 <div className="spacing" >
  
     <Row>
       <Aboutus/>
     </Row>
  
 </div>
 <div className="spacing">
 <h1 className="head_spacing">Our Products</h1>
 
    <PopularproductSection1 cartno={cartno} updcartno={updcartno}/>
    {/* <PpularproductSection2/> */}

 </div>
 <div className="spacing">
 <h1 className="head_spacing">About Our Products</h1>
  <Aboutproduct/>
 </div>

 
</Container>
    

 

      
    </>
  )
}

export default Home;
