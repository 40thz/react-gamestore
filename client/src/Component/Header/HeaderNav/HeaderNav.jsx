import React from 'react'
import HeaderBtn from '../HeaderBtn/HeaderBtn'
import './HeaderNav.scss'
import { FaShoppingBasket, FaHeart } from 'react-icons/fa'

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <HeaderBtn value="Войти" />
      <HeaderBtn icon={<FaHeart />} />
      <HeaderBtn href={'/basket'} icon={<FaShoppingBasket />} />
    </div>
  );
}

export default HeaderNav
