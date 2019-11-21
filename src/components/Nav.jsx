import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(props) {
  return (
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
          <Link to='/' className="logo" onClick={() => props.handleClick('home')}>
            <img id="logo-img" src="https://res.cloudinary.com/dcagc4c0j/image/upload/v1574198342/tartine_logo_doxprk.svg" title="Logo" />
          </Link>
        </div>

        <div id="nav-right-div">
          <Link id="menu-link" to="/menu" onClick={() => props.handleClick('menu')}>Menu</Link>
          <a id="bakery-link" href="#bakery" onClick={() => props.handleClick('bakery')}>Bakery</a>
          <Link id="gallery-link" to="/gallery" onClick={() => props.handleClick('gallery')}>Gallery</Link>
          {props.menu_selected && <div id="menu-highlight"></div>}
          {props.bakery_selected && <div id="bakery-highlight"></div>}
          {props.gallery_selected && <div id="gallery-highlight"></div>}
        </div>
      </div>
    </nav>
  )
}
