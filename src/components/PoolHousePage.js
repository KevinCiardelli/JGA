import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './PoolHouse.css';

import image1 from '../images/PoolHouse/1.jpg';
import image2 from '../images/PoolHouse/2.jpg';
import image3 from '../images/PoolHouse/3.jpg';
import image4 from '../images/PoolHouse/4.jpg';
import image5 from '../images/PoolHouse/5.jpg';
import image6 from '../images/PoolHouse/6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

function PoolHousePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="container" {...handlers}>
      <div className="image-wrapper">
        <img src={images[currentImageIndex]} alt="Pool House" className="image"/>
      </div>
      <button className="arrow left-arrow" onClick={handlePrev}>&#8592;</button>
      <button className="arrow right-arrow" onClick={handleNext}>&#8594;</button>
    </div>
  );
}

export default PoolHousePage;
