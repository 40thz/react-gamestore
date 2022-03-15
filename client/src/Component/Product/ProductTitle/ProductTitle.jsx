import React from 'react'
import './ProductTitle.scss'

const ProductTitle = ({ title }) => {

  return (
    <div className="product__title">
      Купить {title}
    </div>
  )
}

export default ProductTitle