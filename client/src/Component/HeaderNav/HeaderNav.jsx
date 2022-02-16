import React from 'react'
import HeaderBtn from '../HeaderBtn/HeaderBtn'
import './HeaderNav.scss'
import { FaUser, FaShoppingBasket, FaSearch } from 'react-icons/fa'

const HeaderNav = () => {
  return (
    <div className='header-nav'>
      <HeaderBtn icon={<FaUser />} />
      <HeaderBtn icon={<FaShoppingBasket />} />
      <HeaderBtn icon={<FaSearch />} />
    </div>
  )
}

export default HeaderNav
