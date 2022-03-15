import React from 'react'
import './ProductInfo.scss'

const ProductInfo = () => {
  return (
    <div className="product__info">
      <div className="product__info-item">
        <div className="product__info-title">
          Платформа
        </div>
        <div className="product__info-value">
          test
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Дата выхода
        </div>
        <div className="product__info-value">
          test
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Издатель
        </div>
        <div className="product__info-value">
          test
        </div>
      </div>
      <div className="product__info-item">
        <div className="product__info-title">
          Разработчик
        </div>
        <div className="product__info-value">
          test
        </div>
      </div>
    </div>
  )
}

export default ProductInfo