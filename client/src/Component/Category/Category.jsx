import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "../../store"
import ContentTitle from "../ContentTitle/ContentTitle"
import Cart from "../Cart/Cart";

const Category = () => {
  const params = useParams();
  const { data = [], isLoading } = useGetCategoryQuery(params.catalogId);
  console.log(data);

  return (
    <div className="container">
      <div className="catalog">
        <ContentTitle name="PS4" />
        <div className="catalog-container">
          <Cart items={data} />
        </div>
      </div>
    </div>
  );
};

export default Category;
