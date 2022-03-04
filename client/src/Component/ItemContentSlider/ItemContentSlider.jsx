import React from 'react'
import Button from '../Button/Button'
import './ItemContentSlider.scss'
import { useAction } from '../../hooks/useActions'
import { useExistInCart } from "../../hooks/useExistInCart";

const ItemContentSlider = ({ product }) => {
    const { addItem } = useAction()
    const isExistInCart = useExistInCart(product);
    return (
      <div className="content">
        <div className="content-title">{product.name}</div>
        <div className="row">
          <Button
            to={isExistInCart && "/basket"}
            onClick={() => !isExistInCart && addItem(product)}
            value={isExistInCart ? "Уже в коризне" : "Купить"}
          />

          <div className="content-price">{product.price} ₽</div>
          <div className="content-discount">12%</div>
        </div>
      </div>
    );
}

export default ItemContentSlider