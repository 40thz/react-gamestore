import React from 'react'
import './Card.scss'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CatalogCard = ({ items }) => {
  return (
    <>
      {items?.map(item => (
        <Link to={!item.catalog ? `store/${item._id}` : `${item._id}`} className='card'>
          <div className='card-image'>
            <img src={item.image} alt='img' />
            <div className='card-favorite'>
              <FaHeart />
            </div>
          </div>
          <div className='card-bottom'>
            <div className='card-title'>{item.name}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CatalogCard
