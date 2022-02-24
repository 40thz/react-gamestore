import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store";
import ContentTitle from "../ContentTitle/ContentTitle";
import Card from "../Card/Card";

const ProductCatalog = () => {
  const params = useParams();
  const { data = [], isLoading } = useGetProductQuery(params.categoryId);
  console.log(data)
  return (
    <div className="container">
      <div className="catalog">
        <ContentTitle name="PS4" />
        <div className="catalog-container">
          <Card items={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
