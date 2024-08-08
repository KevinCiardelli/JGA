import React, { useState, useEffect } from 'react';
import './AboutPage.css';
import image from '../images/forest.jpg';
import image2 from '../images/icon.jpeg'

function AboutPage() {
  return (
    <div className='about-container'>
        <img src= {image} className='background'/>
        <div className='body'>
        <img src={image2} class="front-image"/>
            <p class="introparagraph2">
                Located within the Bay Area, JGA Construction involves itself in a multitude of projects varying from
                residential remodeling to building from the foundation up. We pride ourselves in guarenteed efficiency alongside a more
                direct customer to contractor
                relationship.
                Taking control of project management, permitting, and problem solving releases stress from our
                customers in order for a simplified
                process. Can't wait to see what we build together.
            </p>
        </div>
    </div>
  )
}

export default AboutPage
