import React from 'react'
import './PreviewImage.scss'

const PreviewImage = ({ image }) => {
  return (
    <div className="product__preview">
      <img src={image} alt="Игра"/>
    </div>
  )
}

export default PreviewImage
