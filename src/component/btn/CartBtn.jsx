import React from 'react'
import './cartbtn.css'
function CartBtn(props) {
  return (
    <>
    <button  class="card_btn" onClick={()=>props.updcartno(props.cartno+1)}  >{props.cartbtnName}</button>
    </>
  )
}

export default CartBtn