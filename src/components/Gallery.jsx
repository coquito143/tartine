import React from "react";
import Popup from "reactjs-popup";

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
            <Popup
              trigger={
                <img
                  className="small-gallery-images-top"
                  src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_01_pqrxbg.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-full-01_b2cdfg.jpg"></img>
              )}
            </Popup>
            <Popup
              trigger={
                <img
                  className="small-gallery-images-top"
                  src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_02_xtnzri.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-full-02_sqwyov.jpg" />
            </Popup>
          </div>
          <Popup
            trigger={
              <img
                className="large-gallery-image-left"
                src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_03_a94mff.jpg"
              />
            }
            modal
            closeOnDocumentClick
          >
            <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-03_l3kbqv.jpg" />
          </Popup>

          <div id="left-gallery-bottom">
          <Popup
          trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_04_zxi5l7.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-04_uc52kk.jpg" />
            </Popup>
            <Popup
          trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_05_z4uvya.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-05_ehjvue.jpg"/>
            </Popup>
            <Popup
            trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_06_ou5lh4.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-06_vkhoid.jpg"/>
            </Popup>
            <Popup
            trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_07_pzyl5w.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-07_ozllcs.jpg"/>
            </Popup>
          </div>
        </div>

        <div id="right-gallery">
          <h1 id="gallery-text">
            Here are photos of Tartine and our great food.<br></br> Click an
            image to enlarge.
          </h1>

          <div id="right-gallery-top">
          <Popup
          trigger={
            <img
              className="small-gallery-images-top-right"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_08_xftarc.jpg"
                />
              }
            modal
            closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092208/photogallery-full-08_ihxqfn.jpg"/>
            </Popup>
            <Popup
          trigger={
            <img
              className="small-gallery-images-top-right"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_09_tcwycg.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092207/photogallery-full-09_admczx.jpg"/>
              </Popup>
          </div>
          <Popup
          trigger={
          <img
            className="large-gallery-image-right"
            src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_10_nuofbe.jpg"
              />
            }
            modal
            closeOnDocumentClick
          >
            <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-10_uhtrpl.jpg"/>
            </Popup>
          <div id="right-gallery-bottom">
          <Popup
          trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-thumb_11_izcedf.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-11_jiri8n.jpg"/>
            </Popup>
            <Popup
          trigger={
            <img
              className="small-gallery-images-bottom"
              src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092204/photogallery-thumb_12_kwsrq7.jpg"
                />
              }
              modal
              closeOnDocumentClick
            >
              <img src="https://res.cloudinary.com/dqxcatzfo/image/upload/v1574092203/photogallery-full-12_sdg439.jpg" />
              </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}
