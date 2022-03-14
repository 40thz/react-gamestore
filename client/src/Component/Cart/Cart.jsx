import React from 'react'
import "./Cart.scss";
import { Link } from 'react-router-dom'

const Cart = ({ items }) => {
  return (
    <>
      {items?.map(item => (
        <Link to={!item.catalog ? `/catalog/${item._id}` : `${item._id}`} className='cart'>
            <div className='cart-image'>
              <img src={item.uploadedFile} alt='img' />
            </div>
            <div className='cart-title'>{item.name}</div>
        </Link>
      ))}
    </>
  )
}

export default Cart
