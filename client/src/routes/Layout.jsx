import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header/HeaderPanel/HeaderPanel'
import Footer from '../Component/Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
