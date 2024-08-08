import React, { useState, useEffect } from 'react';
import './HomePage.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/11.jpg';
import image6 from '../images/Wood.jpg';

const images = [image1, image2, image3, image4, image6];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="home-container">
      <header className="header">JGA CONSTRUCTION</header>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slideshow-image ${
            index === currentImageIndex ? 'active' : ''
          } ${index === (currentImageIndex + 1) % images.length ? 'next' : ''}
          ${index === prevImageIndex ? 'prev' : ''}`}
        />
      ))}
    </div>
  );
}

export default HomePage;
