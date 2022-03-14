import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ProductCatalog from '../Component/ProductCatalog/ProductCatalog'
import Category from "../Component/Category/Category";
import Layout from './Layout'
import Basket from '../pages/Basket'
import Product from '../pages/Product'
import Catalog from '../Component/Catalog/Catalog'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:catalogId' element={<Category />} />
          <Route path='/catalog/:catalogId/:categoryId' element={<ProductCatalog />} />
          <Route path='/product/:productId' element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routing
