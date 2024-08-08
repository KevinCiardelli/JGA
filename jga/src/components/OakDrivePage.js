import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import image1 from '../images/OakDrive/1.jpg';
import image2 from '../images/OakDrive/2.jpg';
import image3 from '../images/OakDrive/3.jpg';
import image4 from '../images/OakDrive/4.jpg';
import image5 from '../images/OakDrive/5.jpg';
import image6 from '../images/OakDrive/6.jpg';
import image7 from '../images/OakDrive/7.jpg';
import image8 from '../images/OakDrive/8.jpg';
import image9 from '../images/OakDrive/9.jpg';
import image10 from '../images/OakDrive/10.jpg';
import image11 from '../images/OakDrive/11.jpg';
import image12 from '../images/OakDrive/12.jpg';
import image13 from '../images/OakDrive/13.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image10, image11, image12, image13
];

function OakDrivePage() {
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

export default OakDrivePage;
