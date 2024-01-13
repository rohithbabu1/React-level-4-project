import React from 'react'
import { Container } from 'react-bootstrap'
import PopularproductSection1 from '../home/popularProduct/PopularproductSection1'
import '../home/Home.css'

function Shoping() {
  return (
    <Container>
        <h1 className='head_spacings'>Our products</h1>
        <PopularproductSection1/>
    </Container>
  )
}

export default Shoping