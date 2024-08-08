import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import image1 from '../images/MasterBathroom/1.jpg';
import image2 from '../images/MasterBathroom/2.jpg';
import image3 from '../images/MasterBathroom/3.jpg';
import image4 from '../images/MasterBathroom/4.jpg';

const images = [image1, image2, image3, image4];

function MasterBathroomPage() {
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

export default MasterBathroomPage;
