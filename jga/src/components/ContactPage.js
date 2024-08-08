import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome CSS is imported
import './ContactPage.css';
import image from '../images/Contact-photo.jpg'

function ContactPage() {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <hr />
      <div className="contact-information-container">
        <div className="double_element">
          <div className="icon-circle">
            <i className="fas fa-envelope open"></i>
          </div>
          <a href="mailto:jgaconstruction24@gmail.com" className="fullemail">
            jgaconstruction24@gmail.com
          </a>
        </div>
        <div className="double_element">
          <div className="icon-circle">
            <i className="fas fa-phone open"></i>
          </div>
          <a href="tel:6504658337" className="fullphone">650-465-8337</a>
        </div>
        <div className="double_element">
          <div className="icon-circle">
            <i className="fas fa-map-marker-alt open"></i>
          </div>
          <a href="https://www.google.com/maps/place/Redwood+City,+CA+94061/" className='fulladdress'>Redwood City, CA 94061</a>
        </div>
        <div className="double_element">
          <div className="icon-circle">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <a href="https://www.instagram.com/jga_construction/" className="insta">@JGAConstruction</a>
        </div>
      </div>
      <hr />
      <img src={image} class="contact-image"/>
    </div>
  );
}

export default ContactPage;
