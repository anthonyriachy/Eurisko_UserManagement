import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../components/organisms/Header'
 
function MainLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}


export { MainLayout}
