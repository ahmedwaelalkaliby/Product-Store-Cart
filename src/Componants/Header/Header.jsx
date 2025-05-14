import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  
  return (
    <nav className="header">
      <div className="store-name">
        <h1>Product Store</h1>
      </div>
      <div className="nav-links">
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Products
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  )
}
