import React, { useState, useEffect } from 'react';
import logo from '../images/trans.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import footerImage from '../images/InvertedLogo.jpg'

function Footer() {
  return (
    <>
        <div className="footer-container">
            <img src={footerImage} class="footerimage"/>

            <div className="footer-text">
                <p>Justin Angstadt (Owner) </p>
                <p>Lic#1047409</p>
                <p>Redwood City, CA, 9406</p>
            </div>
            <div className="footer-text">
                <p>650-465-8337</p>
                <p>jgaconstruction24@gmail.com</p>

            </div>

        </div>
    </>
  );
}

export default Footer;
