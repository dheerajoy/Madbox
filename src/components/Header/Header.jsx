import React,{useState} from 'react'
import '../Header/header.scss'

import { NavLink } from 'react-router-dom'
import logo from './logo/logo1.jpeg'




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    <nav>
        <img src={logo} alt='logo'/>
        <main>
        <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <ul className={menuOpen ? "open" : "" }>
          
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



