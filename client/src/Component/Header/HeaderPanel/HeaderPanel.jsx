import React from 'react'
import './HeaderPanel.scss'
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import SearchForm from "../SearchForm/SearchForm";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <header className="header">
     <div className="header__container">
        <HeaderLogo />
        <div className="header-search">
          <HeaderBtn value="Каталог" />
          <SearchForm />
        </div>
        <HeaderNav />
     </div>
    </header>
  );
}

export default Header
