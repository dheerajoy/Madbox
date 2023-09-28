import React from 'react'
import '../Header/header.scss'

import { NavLink } from 'react-router-dom'
import logo from './logo/logo1.jpeg'




const Header = () => {
  return (
    <div>
    <nav>
        <img src={logo} />
        <main>
        <ul>
          
          <li className="navitem" >
            <NavLink to = {"/Our Games"} className='link'>Our Games</NavLink>
          </li>

          <li className="navitem">
            <NavLink to = {"/Our Story"} className='link'>Our Story</NavLink>
          </li>

          <li className="navitem" >
            <NavLink to = {"/"} className='link'><span id='gradient'>We're Hiring</span> 🔥</NavLink>
          </li>
          
        </ul>
        </main>
    </nav>
    </div>
  )
}

export default Header;

