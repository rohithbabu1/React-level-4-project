import React from 'react'
import Whymap from './Whymap'
import { Row } from 'react-bootstrap'
import '../home/aboutproduct/Aboutproduct.css'

const why=[
    {
        id:1,
        photo:"about_icon_exelance-01.svg",
        heading:"Curated Excellence",
        detail:"Our product selection is a result of careful curation, ensuring that each item meets our high standards for quality, performance, and innovation."
    },
    {
        id:1,
        photo:"about_icon_curve-01.svg",
        heading:"Stay Ahead of the Curve",
        detail:"TechTide is your gateway to the future. Explore our catalog to discover the latest advancements in technology, from smart devices to essential tech accessories."
    },
    {
        id:1,
        photo:"about_icon_quality-01.svg",
        heading:"Dependable Quality",
        detail:"We understand the importance of reliability in technology. Every product at TechTide is chosen and crafted to endure the demands of your daily life."
    },
    {
        id:1,
        photo:"about_icon_save-01.svg",
        heading:"Affordable Tech",
        detail:"Experience the thrill of cutting-edge technology without the hefty price tag.We are committed to offering competitive prices. "
    },

]

function WhyyouChose() {
  return (
    <>
    <Row>
    {why.map((e)=>(
        <Whymap details={e} key={e.id}/>
    ))}
    </Row>
   
    </>
  )
}

export default WhyyouChose