import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Product from '../pages/Product'
import ProductCatalog from '../Component/ProductCatalog/ProductCatalog'
import Layout from './Layout'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/store/:catalogId' element={<Product />} />
          <Route path='/store/:catalogId/:categoryId' element={<ProductCatalog />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routing
