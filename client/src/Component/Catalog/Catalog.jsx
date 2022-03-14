import React from 'react'

import './Catalog.scss'

import { useGetCatalogQuery } from "../../store";

import Cart from "../Cart/Cart";
import ContentTitle from '../ContentTitle/ContentTitle'
import Loader from '../Loader/Loader'

const Catalog = () => {
  const { data = [], isLoading } = useGetCatalogQuery();
  
  return (
    <div className="container">
      <div className="catalog">
        <ContentTitle name="Каталог" />
        <div className="catalog-container">
          {isLoading ? <Loader /> : <Cart items={data} />}
        </div>
      </div>
    </div>
  );
}

export default Catalog
