import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../Component/Card/Card'
import ContentTitle from '../Component/ContentTitle/ContentTitle'
import { getCategory } from '../features/category/categorySlice'
import { getProduct } from '../features/product/productSlice'

const Product = () => {
  const categoryItems = useSelector(state => state.category.categoryItems)
  const productItems = useSelector(state => state.product.productItems)
  const [first, setfirst] = React.useState(true)
  const dispatch = useDispatch()
  const params = useParams()

  React.useEffect(() => {
    dispatch(getCategory(params.catalogId))
    if (params.categoryId) {
      setfirst(true)
      dispatch(getProduct(params.categoryId))
    } else {
      setfirst(false)
      //dispatch(getProduct(params.categoryId))
      //  console.log('1')
    }
  }, [params])

  return (
    <div className='container'>
      <div className='catalog'>
        <ContentTitle name='PS4' />
        <div className='catalog-container'>{!first ? <Card items={categoryItems} /> : <Card items={productItems} />}</div>
      </div>
    </div>
  )
}

export default Product
