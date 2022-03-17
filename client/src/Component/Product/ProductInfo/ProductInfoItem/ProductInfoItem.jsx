import React from 'react'
import './ProductInfoItem.scss'

const ProductInfoItem = ({title, value}) => {
  return (
      <>
        {value &&
            <div className="product__info-item">
              <div className="product__info-title">
                {title}
              </div>
              <div className="product__info-value">
                {value}
              </div>
          </div>
        }
      </>
  )
}

export default ProductInfoItem