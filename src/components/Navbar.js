import React from 'react'
import {Link, NavLink} from 'react-router-dom'
//<li><NavLink to="/">Home</NavLink></li>
function Navbar() {
    return (
        <nav>
        <div className="nav-wrapper" style={{background:"#6200ee"}}>
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
         
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contacts</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
      </div>
      </nav>
    )
}

export default Navbar
