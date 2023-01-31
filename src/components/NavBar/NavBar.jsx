import React from 'react'
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="nav-right-side">
            <div className="countries-logo">Logo</div>
            <div className="home">Home Link</div>
        </div>
        <div className="nav-left-side">
            <div className="menu">Burguer</div>
        </div>
    </div>
  )
}

export default NavBar