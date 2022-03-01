import React from 'react'
import Button from '../Button/Button'
import './ItemContentSlider.scss'
import { useAction } from '../../hooks/useActions'

const ItemContentSlider = ({ product }) => {
    const { addItem } = useAction()
    return (

        <div className="content">
            <div className="content-title">
                {product.name}
            </div>
            <div className="row">

                <Button onClick={() => addItem(product)} value='В корзину' />

                <div className="content-price">
                    {product.price} ₽
                </div>


                    <div className="content-discount">
                        12%
                    </div>
                
            </div>
        </div>
    )
}

export default ItemContentSlider