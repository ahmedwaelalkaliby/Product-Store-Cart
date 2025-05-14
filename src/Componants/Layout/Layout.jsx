import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
      <Outlet />
      </div>
      
    </>
  )
}
