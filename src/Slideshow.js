import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Css/Slideshow.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const slideImages = [
  {
    url: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
    caption: 'Slide 3'
  },
];


const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide duration={4000} transitionDuration={200} 
        pauseOnHover={true} 
        nextArrow={(<div tabindex="1" className='arrow__next'><ArrowForwardIosIcon style={{width:'35px', height:'90'}}/></div>)} 
        prevArrow={(<div tabindex="1" className='arrow__prev'><ArrowBackIosNewIcon style={{width:'35px', height:'90'}}/></div>)}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <img src={slideImage.url} className='slideshow__image'/>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow