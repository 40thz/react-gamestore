import React from 'react'
import Button from '../../Button/Button'

import './BasketTotal.scss'

const BasketTotal = () => {
  return (
    <div className="basket__total">
      <div className="basket__total-header">
        <span className="whiteText">Итого</span>
        <span className="yellowText">959 ₽</span>
      </div>
      <div className="basket__total-footer">
        <Button value="Оформить заказ" />
      </div>
    </div>
  );
}

export default BasketTotal