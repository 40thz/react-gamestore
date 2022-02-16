import React from 'react'
import './ProductCatalog.scss'
import Card from '../Card/Card'
import ContentTitle from '../ContentTitle/ContentTitle'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductCatalog = () => {
  const productItems = useSelector(state => state.product.productItems)
  const dispatch = useDispatch()
  const params = useParams()

  React.useEffect(() => {
    dispatch(getProduct(params.categoryId))
  }, [])

  return (
    <div className='container'>
      <div className='catalog'>
        <ContentTitle name='Каталог' />
        <div className='catalog-container'>
          <Card items={productItems} />
        </div>
      </div>
    </div>
  )
}

export default ProductCatalog
