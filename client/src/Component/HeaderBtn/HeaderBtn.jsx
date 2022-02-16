import React from 'react'
import './HeaderBtn.scss'

const HeaderBtn = ({ icon }) => {
  return (
    <div className='header-btn'>
      <div className='header-icon'>{icon}</div>
    </div>
  )
}

export default HeaderBtn
