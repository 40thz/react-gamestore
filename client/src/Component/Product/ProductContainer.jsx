import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../services/productApi'

import './ProductContainer.scss'

const ProductContainer = () => {
  const params = useParams();
  const { data, isLoading } = useGetProductByIdQuery(params.productId)
  console.log(data);
  return (
    <div>
      <div className="product__container-left">
        <div className="product__preview">
          <img src="" alt="" />
        </div>
      </div>
      <div className="product__container-right"></div>
    </div>
  );
}

export default ProductContainer