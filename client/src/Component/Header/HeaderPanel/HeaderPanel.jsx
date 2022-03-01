import React from 'react'
import './HeaderPanel.scss'
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import SearchForm from "../SearchForm/SearchForm";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <div className="container">
      <section className="header">
        <HeaderLogo />
        <div className="header-search">
          <HeaderBtn value="Каталог" />
          <SearchForm />
        </div>
        <HeaderNav />
      </section>
    </div>
  );
}

export default Header
