import React from 'react';
import './GalleryPage.css';
import image1 from '../images/5.jpg';
import image2 from '../images/Woodwork.jpg';
import image3 from '../images/Cabana.jpg';
import image4 from '../images/12.jpg';
import image5 from '../images/bathroom.jpg';
import image6 from '../images/Exterior.jpg';

function GalleryPage() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={image1} alt="Photo 1" />
          <div className="caption">Description 1</div>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Photo 2" />
          <div className="caption">Description 2</div>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Photo 3" />
          <div className="caption">Description 3</div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={image4} alt="Photo 4" />
          <div className="caption">Description 4</div>
        </div>
        <div className="gallery-item">
          <img src={image5} alt="Photo 5" />
          <div className="caption">Description 5</div>
        </div>
        <div className="gallery-item">
          <img src={image6} alt="Photo 6" />
          <div className="caption">Description 6</div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
