import React from "react";

export default function Gallery() {
  return (
    <div>
      <div>
        <img
          id="gallery-top-image"
          src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092208/photo-title-photogallery_xwraet.jpg"
        />
      </div>
      <div id="gallery">
        <div id="left-gallery">
          <div id="left-gallery-top">
            <img
              className="small-gallery-images-top"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_01_pqrxbg.jpg"
            />
            <img
              className="small-gallery-images-top"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_02_xtnzri.jpg"
            />
          </div>

          <img
            className="large-gallery-image-left"
            src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_03_a94mff.jpg"
          />
          <div id="left-gallery-bottom">
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_04_zxi5l7.jpg"
            />
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_05_z4uvya.jpg"
            />
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_06_ou5lh4.jpg"
            />
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_07_pzyl5w.jpg"
            />
          </div>
        </div>

        <div id="right-gallery">
        <h1 id="gallery-text">Here are photos of Tartine and our great food.<br></br> Click an image to enlarge.</h1>

          <div id="right-gallery-top">
            <img
              className="small-gallery-images-top-right"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_08_xftarc.jpg"
            />
            <img
              className="small-gallery-images-top-right"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_09_tcwycg.jpg"
            />
          </div>

          <img
            className="large-gallery-image-right"
            src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_10_nuofbe.jpg"
          />
          <div id="right-gallery-bottom">
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_11_izcedf.jpg"
            />
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_12_kwsrq7.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
