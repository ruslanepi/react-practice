import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink className='link' activeClassName='active' to='/'>
        Home
      </NavLink>
      <NavLink className='link' activeClassName='active' to='/about'>
        About
      </NavLink>
      <NavLink className='link' activeClassName='active' to='/products'>
        Products
      </NavLink>
    </nav>
  )
}

export default Navbar
