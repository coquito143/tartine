import React from 'react'

export default function Nav() {
  return (
    <ul class="topnav">
      <li><a href="#gallery"> Gallery</a></li>
      <li><a href="#bakery">Bakery</a></li>
      <li class="right"><a href="#menu">Menu</a></li>
      <li><a className="logo" href="#top"><img src="./images/logo.jpg" title="Logo" /></a></li>
    </ul>

  )
}
