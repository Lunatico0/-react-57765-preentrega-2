import React from 'react'
import NavBar from './NavBar'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = () => {

  return (
    <header className="header">
      <div className='headerCont'>
        <NavBar />
        <NavLink to="/" className='brand' ><h1 className='logo'>ARTEMISA</h1></NavLink>
        <CartWidget />
      </div>
    </header>
  )
}

export default Header
