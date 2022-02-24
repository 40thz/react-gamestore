import React from 'react'
import './Header.scss'
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
return (
  <div className="container">
    <div className="header">
      <div className="header-title">
        <div className="header-icon">
          <img src="./logo.svg" alt="" />
        </div>
      </div>
      <div className="header-search">
        <HeaderBtn value="Каталог" />
        <SearchForm />
      </div>
    </div>
  </div>
);
}

export default Header
