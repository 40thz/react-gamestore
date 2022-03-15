import React from 'react'
import { useParams} from 'react-router-dom'
import {useGetProductByIdQuery} from '../../services/productApi'

import './ProductContainer.scss'

import { FaHeart } from 'react-icons/fa'

import PreviewImage from './PreviewImage/PreviewImage'
import ProductTitle from './ProductTitle/ProductTitle'
import HeaderBtn from '../Header/HeaderBtn/HeaderBtn'
import ProductPrice from './ProductPrice/ProductPrice'
//import ProductInfo from './ProductInfo/ProductInfo'

const ProductContainer = () => {
const params = useParams();
const { data = [], isLoading } = useGetProductByIdQuery(params.productId)

return (
<section id="product">
  <div className='container'>
    {!isLoading ?
    <div className="product__container">
      <div className="product__row">
        <PreviewImage image={data.uploadedFile} />
        <div className="product__col">
          <div className="product__header">
            <ProductTitle title={data.name} />
            <HeaderBtn icon={<FaHeart />} />
          </div>
          <li>{data.stock ? 'В наличии' : 'Нет в наличии'}</li>
          {data.stock &&
          <div className="product__row">
            <ProductPrice data={data} />
          </div>
          }
        </div>
        {/*
        <ProductInfo /> */}
      </div>
    </div> : 'load'
    }
  </div>
</section>
);
}

export default ProductContainer
