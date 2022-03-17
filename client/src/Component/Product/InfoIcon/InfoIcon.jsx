import React from 'react'
import './InfoIcon.scss'

const InfoIcon = ({icon, value}) => {

  return (
    <div className="product__info-icon">
      <div className="product__info-logo">
        <img src={icon} alt={value} />
      </div>
      <div className="product__info-name">
        {value}
      </div>
    </div>
  )
}

export default InfoIcon