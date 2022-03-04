import React from 'react'
import './Catalog.scss'
import Card from '../Card/Card'
import ContentTitle from '../ContentTitle/ContentTitle'
import { useGetCatalogQuery } from "../../store";
import Loader from '../Loader/Loader'

const Catalog = () => {
  const { data = [], isLoading } = useGetCatalogQuery();
  
  return (
    <div className="container">
      <div className="catalog">
        <ContentTitle name="Каталог" />
        <div className="catalog-container">
          {isLoading ? <Loader />  : <Card items={data} />}
        </div>
      </div>
    </div>
  );
}

export default Catalog
