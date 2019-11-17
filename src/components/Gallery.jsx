import React from 'react'
import Slider from 'infinite-react-carousel';


export default function Gallery() {
  const settings = {
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplayScroll: 2,
    autoplaySpeed: 4000,
    className: 'slider'
  }
  return (
    <div id="gallery-div">
    <Slider  dots { ...settings }>
        <div >
          <img className="slider-images" src="https://i.imgur.com/5avbY0d.jpg" />
          <p>text</p>
        </div>
        <div>
        <img className="slider-images" src="https://i.imgur.com/CbFzVrx.jpg"/>
        </div>
        <div>
        <img className="slider-images" src="https://i.imgur.com/x9rbbtG.jpg"/>
        </div>
        <div>
        <img className="slider-images" src="https://i.imgur.com/rOF0d66.jpg"/>
        
        </div>
        
      </Slider>

    </div>
  )
}
