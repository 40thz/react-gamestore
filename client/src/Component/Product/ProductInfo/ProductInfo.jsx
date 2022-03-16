import React from 'react'
import './ProductInfo.scss'

const ProductInfo = ({ data }) => {
  return (
    <div className="product__info">
      <div className="product__info-item">
        <div className="product__info-title">
          Платформа
        </div>
        <div className="product__info-value">
          {data.Platform}
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Дата выхода
        </div>
        <div className="product__info-value">
          {data.releaseDate}
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Издатель
        </div>
        <div className="product__info-value">
          {data.publisher}
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Разработчик
        </div>
        <div className="product__info-value">
          {data.developer}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo