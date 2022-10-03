import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        activeClassName='active'
        to='/'
      >
        Home
      </NavLink>
      <NavLink className='link' activeClassName='active' to='/about'>
        About
      </NavLink>
      <NavLink
        className='link'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' }
        }}
        activeClassName='active'
        to='/products'
      >
        Products
      </NavLink>

      <NavLink className='link' activeClassName='active' to='/login'>
        Login
      </NavLink>
    </nav>
  )
}

export default StyledNavbar
