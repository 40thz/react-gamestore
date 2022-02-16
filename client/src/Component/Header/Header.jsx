import React from 'react'
import './Header.scss'
import HeaderNav from '../HeaderNav/HeaderNav'

import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>
        <div className='header-icon'>
          <FaShoppingCart />
        </div>
        <div className='header-text'>SneekersShop</div>
      </div>
      <HeaderNav />
    </div>
  )
}

export default Header
