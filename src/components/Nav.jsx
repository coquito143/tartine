import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    // <ul class="topnav">
    //   <li><a href="#gallery"> Gallery</a></li>
    //   <li><a href="#bakery">Bakery</a></li>
    //   <li class="right"><a href="#menu">Menu</a></li>
    //   <li><a className="logo" href="#top"><img src="./images/logo.jpg" title="Logo" /></a></li>
    // </ul>
    <nav>
      <div id="top-nav-div">
        <div id="address-div">
          <p>253 West 11 Street • New York City</p>
        </div>
        <div id="phone-number-div">
          <p>+1 212 555 4444</p>
        </div>
      </div>
      <div id="bottom-nav-div">
        <div id="logo-div">
          <Link to='/' className="logo"><img src="./images/logo.jpg" title="Logo" /></Link>
        </div>
        <div id="nav-right-div">
          <Link to="/menu">Menu</Link>
          <a href="#bakery">Bakery</a>
          <Link to="/gallery"><p>Gallery</p></Link>
        </div>
      </div>
    </nav>
  )
}
