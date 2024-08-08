import React from 'react';
import './GalleryPage2.css';
import image1 from '../images/5.jpg';
import image2 from '../images/Woodwork.jpg';
import image3 from '../images/Cabana.jpg';
import image4 from '../images/12.jpg';
import image5 from '../images/bathroom.jpg';
import image6 from '../images/Exterior.jpg';

function GalleryPage2() {
  return (
    <div className="gallery">
      <div className="gallerybody">
        <div className="galleryentry2">
          <div>
            <a href="/PoolHouse">
              <div><img src={image1} className="galleryimage2" alt="Description 1" /></div>
            </a>
            <div className="caption">Ground Up Pool House</div>
          </div>
        </div>
        <div className="galleryentry">
          <div>
            <a href="/Woodwork">
              <img src={image2} className="galleryimage" alt="Description 2" />
            </a>
            <div className="caption">Basement Woodwork</div>
          </div>
        </div>
        <div className="galleryentry">
          <div>
            <a href="/Cabana">
              <img src={image3} className="galleryimage" alt="Description 3" />
            </a>
            <div className="caption">Cabana Build</div>
          </div>
        </div>
      </div>
      <div className="gallerybody">
        <div className="galleryentry2">
          <div>
            <a href="/OakDrive">
              <img src={image4} className="galleryimage2" alt="Description 4" />
            </a>
            <div className="caption">Oak Drive Full Remodel</div>
          </div>
        </div>
        <div className="galleryentry">
          <div>
            <a href="/MasterBathroom">
              <img src={image5} className="galleryimage" alt="Description 5" />
            </a>
            <div className="caption">Master Bathroom Remodel</div>
          </div>
        </div>
        <div className="galleryentry">
          <div>
            <a href="/Exterior">
              <img src={image6} className="galleryimage" alt="Description 6" />
            </a>
            <div className="caption">Exterior Work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage2;
