import React from 'react'

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
          <a className="logo" href="#top"><img src="./images/logo.jpg" title="Logo" /></a>
        </div>
        <div id="nav-right-div">
          <a href="#menu">Menu</a>
          <a href="#bakery">Bakery</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </nav>
  )
}
