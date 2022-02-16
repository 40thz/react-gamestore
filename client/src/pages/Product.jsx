import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Card from '../Component/Card/Card'
import ContentTitle from '../Component/ContentTitle/ContentTitle'
import { getCategory } from '../features/category/categorySlice'

const Product = () => {
  const categoryItems = useSelector(state => state.category.categoryItems)
  const dispatch = useDispatch()
  const params = useParams()

  React.useEffect(() => {
    dispatch(getCategory(params.catalogId))
  }, [params])

  return (
    <div className='container'>
      <div className='catalog'>
        <ContentTitle name='PS4' />
        <div className='catalog-container'>
          <Card items={categoryItems} />
        </div>
      </div>
    </div>
  )
}

export default Product
