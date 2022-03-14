import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store";
import ContentTitle from "../ContentTitle/ContentTitle";
import ProductCart from "./ProductCart/ProductCart";

const ProductCatalog = () => {
  const params = useParams();
  const { data = [], isLoading } = useGetProductQuery(params.categoryId);
 
  return (
    <div className="container">
      <div className="catalog">
        <ContentTitle name="PS4" />
        <div className="catalog-container">
          {
            data.map(item => (
              <ProductCart item={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
