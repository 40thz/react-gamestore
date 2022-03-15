import React from 'react'

import './ProductPrice.scss'

import { useAction } from '../../../hooks/useActions'
import { useExistInCart } from '../../../hooks/useExistInCart'

import Button from '../../Button/Button'

const ProductPrice = ( {data } ) => {
  const { addItem } = useAction()
  const isExistInCart = useExistInCart(data);

  return (
    <>
      <div className="product__price-item">
        <Button
        to={isExistInCart && "/basket"}
        onClick={() => !isExistInCart && addItem(data)}
        value={isExistInCart ? "Уже в коризне" : "Купить"}
      />
      </div>
      <div className="product__price-item">
       <div className="price">
          {data.priceWithDiscount ? data.priceWithDiscount : data.price} ₽
       </div>
      </div>
     {data.discount &&
       <>
          <div className="product__price-item">
            <div className="priceWithoutDiscount">{data.price} %</div>
          </div>
          <div className="product__price-item">
            <div className="discount">{data.discount} %</div>
          </div>
       </>
     }
    </>
  )
}

export default ProductPrice