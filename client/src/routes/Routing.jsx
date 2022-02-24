import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ProductCatalog from '../Component/ProductCatalog/ProductCatalog'
import Category from "../Component/Category/Category";
import Layout from './Layout'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/store/:catalogId' element={<Category />} />
          <Route path='/store/:catalogId/:categoryId' element={<ProductCatalog />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routing
