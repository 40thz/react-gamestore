import React from 'react'
import "./Basketcart.scss"
import { FaWindowClose } from 'react-icons/fa'
import { useAction } from '../../../hooks/useActions'

const Basketcart = ({ item }) => {
const { removeItem } = useAction()

  return (
    <div className="basket__cart">
      <div className="basket__cart-icon">
        <img src={item.uploadedFile} alt="" />
      </div>
      <div className="basket__cart-info">
        <div className="basket__cart-head">
          <div className="basket__cart-name">{item.name}</div>
          <div onClick={() => removeItem(item._id)} className="basket__cart-remove">
            <FaWindowClose />
          </div>
        </div>
        <div className="basket__cart-price">
          <span>{item.price} ₽</span>
          <div className="basket__cart-discount">{item.discount} %</div>
        </div>
      </div>
    </div>
  );
}

export default Basketcart