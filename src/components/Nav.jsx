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
          <a class = "google-link"href="https://www.google.com/maps/place/Tartine/@40.7362939,-74.0045425,18z/data=!3m1!5s0x89c25995a87428dd:0xdb78b1e916a1a80!4m5!3m4!1s0x89c25995a88b3295:0x18dab5a9dad2641f!8m2!3d40.7362939!4d-74.0034482
" target="_blank"> <p>253 West 11 Street<span className="dot"> • </span>New York City</p>
          </a>
        </div>
        <div id="phone-number-div">
          <p>+1 212 229 2611</p>
        </div>
      </div>

      <div id="bottom-nav-div">
        <div id="logo-div">
          <Link to='/' className="logo">
            <img id="logo-img" src="https://res.cloudinary.com/dcagc4c0j/image/upload/v1574198342/tartine_logo_doxprk.svg" title="Logo" />
          </Link>
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
