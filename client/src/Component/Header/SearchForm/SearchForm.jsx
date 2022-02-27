import React from 'react'
import "./SearchForm.scss";
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  return (
    <form className="header-search-form">
      <input type="text" />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchForm