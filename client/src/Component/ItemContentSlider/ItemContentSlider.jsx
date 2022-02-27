import React from 'react'
import Button from '../Button/Button'
import './ItemContentSlider.scss'

const ItemContentSlider = ({ gameName, gamePrice, gameDiscount }) => {
    return (
        <div className="content">
            <div className="content-title">
                {gameName}
            </div>
            <div className="row">
                <Button value='В корзину' />

                <div className="content-price">
                    {gamePrice} ₽
                </div>

                {gameDiscount &&
                    <div className="content-discount">
                        {gameDiscount} %
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemContentSlider