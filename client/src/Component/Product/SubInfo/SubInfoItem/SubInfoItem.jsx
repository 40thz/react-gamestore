import React from 'react'
import './SubInfoItem.scss'

const SubInfoItem = ({title, info}) => {
  return (
    <>
      {info &&
        <div className="product__subinfo-item">
          <div className="product__subinfo-title">
            {title}
          </div>
          <div className="product__subinfo-value">
            {info}
          </div>
        </div>
      }
    </>
  )
}

export default SubInfoItem