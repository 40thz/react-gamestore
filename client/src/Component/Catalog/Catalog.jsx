import React from 'react'
import './Catalog.scss'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getCatalog } from '../../features/catalog/catalogSlice'
import ContentTitle from '../ContentTitle/ContentTitle'

const Catalog = () => {
  const dispatch = useDispatch()
  const catalogItems = useSelector(state => state.catalog.catalogItems)
  // const isLoading = useSelector(state => state.catalog.isLoading)

  React.useEffect(() => {
    dispatch(getCatalog())
  }, [])

  return (
    <div className='container'>
      <div className='catalog'>
        <ContentTitle name='Каталог' />
        <div className='catalog-container'>
          <Card items={catalogItems} />
        </div>
      </div>
    </div>
  )
}

export default Catalog
