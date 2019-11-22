import React from "react";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: true
  };
  return (
    <div id="gallery-div">
      <Slider dots {...settings}>
        <div className="slider-box">
          <img
            className="slider-images"
            src="https://i.imgur.com/9ZXH9iK.jpg"
          />
          <p className="bottom-left-headline">
            A Parisian Brunch <br></br>in the West Village
          </p>
          <Link className="bottom-left-text" to="/gallery"><p>Take a look ➜</p></Link>
          </div>
        <div class="slider-box">
          <img
            className="slider-images"
            src="https://i.imgur.com/F0sXfXC.jpg"
          />
          <p className="bottom-left-headline">
            From a tasty brunch <br></br>to a romantic dinner
          </p>
          <Link className="bottom-left-text" to="/menu"><p>See our dishes ➜</p></Link>
        </div>
        <div class="slider-box">
          <img
            className="slider-images"
            src="https://i.imgur.com/Up1iYwf.jpg"
          />
          <p className="bottom-left-headline">
            Freshly baked goods, <br></br>Paris style
          </p>
          <Link className="bottom-left-text" to="/gallery"><p>See our creations ➜</p></Link>
        </div>
      </Slider>
    </div>
  );
}
