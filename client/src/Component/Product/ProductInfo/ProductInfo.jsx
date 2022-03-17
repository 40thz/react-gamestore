import React from 'react'
import './ProductInfo.scss'
import ProductInfoItem from './ProductInfoItem/ProductInfoItem'

const ProductInfo = ({ data }) => {
  return (
    <div className="product__info">
     <ProductInfoItem title='Платформа' value={data.platform} />
     <ProductInfoItem title='Дата выхода' value={data.releaseDate} />
     <ProductInfoItem title='Издатель' value={data.publisher} />
     <ProductInfoItem title='Разработчик' value={data.developer} />
    </div>
  )
}

export default ProductInfo