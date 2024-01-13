import React from 'react'
import ExclusiveBtn from '../btn/ExclusiveBtn';
import '../Productexpantion/productdis.css'
import { Link, useParams } from 'react-router-dom';

const product=[
  {
      id:1,
      photoName:"IPAD-01.svg",
      productName:"Ipad",
      details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
      price:"Rs.2999"
  },
  {
      id:2,
      photoName:"keyboard-01.svg",
      productName:"Keyboard",
      details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
      price:"Rs.2999"
  },
  {
      id:3,
      photoName:"monitor-01.svg",
      productName:"Monitor",
      details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
      price:"Rs.2999"
  },
  {
      id:4,
      photoName:"lap-01.svg",
      productName:"Laptop",
      details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
      price:"Rs.2999"
  },
  {
    id:5,
    photoName:"USB-01.svg",
    productName:"USB drive",
    details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
    price:"Rs.2999"
},
{
    id:6,
    photoName:"mic-01.svg",
    productName:"Mic",
    details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
    price:"Rs.2999"
},
{
    id:7,
    photoName:"mouse-01.svg",
    productName:"Mouse",
    details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
    price:"Rs.2999"
},
{
    id:8,
    photoName:"Tws-01.svg ",
    productName:"Air pods",
    details:"  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid harum maiores itaque tenetur",
    price:"Rs.2999"
},
  

]
function Productdis() {
  const {productid}=useParams();
  console.log(productid);

  const produtDetails= product.find((e)=> e.id === Number(productid))

  return (
   <>


<section className="py-5">
  <div className="">
    <div className="row gx-5">
      <aside className="col-lg-6">
        <div className="border rounded-4 mb-3 d-flex justify-content-center">
          <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" >
            <img className="rounded-4 fit imgheight" src=  {produtDetails.photoName} />
          </a>
        </div>
        {/* <div className="d-flex justify-content-center mb-3">
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" className="item-thumb">
            <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" className="item-thumb">
            <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp" />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" className="item-thumb">
            <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp" />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" className="item-thumb">
            <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp" />
          </a>
          <a data-fslightbox="mygalley" className="border mx-1 rounded-2" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" className="item-thumb">
            <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" />
          </a>
        </div> */}
       
      </aside>
      <main className="col-lg-6">
        <div className="ps-lg-3">
          <h4 className="title text-dark">
          {produtDetails.productName}
          </h4>
          <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
            <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star-fill"></i>
                         <i className="bi bi-star"></i>
              <span className="ms-1">
                4.5
              </span>
            </div>
            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
            <span className="text-success ms-2">In stock</span>
          </div>

          <div className="mb-3">
            <span className="h5">$75.00</span>
            <span className="text-muted">/per box</span>
          </div>

          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>

          <div className="row">
            <dt className="col-3">Brand:</dt>
            <dd className="col-9">Regular</dd>

            <dt className="col-3">Color</dt>
            <dd className="col-9">Brown</dd>

            <dt className="col-3">Purpose:</dt>
            <dd className="col-9">voice recording, singing, meeting, online cours, youtube recording, guitar, interview,vlogging</dd>

            <dt className="col-3">Certification:</dt>
            <dd className="col-9">CE,ROHS</dd>
          </div>

          <hr />

         
            
           
            </div>
            <div className="row align-items-end">
              <div className='col-6'>
                <span>7 Days Easy Replacement</span><br/>
                <span>Warranty for 12 mounths</span><br/>
                <span>Warranty for 12 mounths Warranty for 12 mounth</span>
              </div>
              <div className="col-2"></div>
              <div  className="  col-4" onClick={()=>window.scrollTo(0, 0)}>
                {/* <span className='pe-1'  > <ExclusiveBtn btnname={"Add cart"} /></span> */}
              
                <Link to={"../billing"}><ExclusiveBtn btnname={"Proceed to checkout"}  /></Link>
              </div>
            </div>
      </main>
    </div>
  </div>
</section>
   </>
  )
}

export default Productdis;