import React, { useEffect, useRef, useState } from 'react';
import Bowser from "bowser";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const Portfolio = () => {

  const screenshots = [{
    name: 'proderto.png',
    site: 'https://proderto.com'
  }, {
    name: 'swiftnotion.png',
    site: 'https://swiftnotion.co'
  }];

  const scrollContainerRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [projectWidth, setProjectWidth] = useState(0);
  const [projectHeight, setProjectHeight] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // You can adjust this value to change the scrolling distance
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // You can adjust this value to change the scrolling distance
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (event) => {
    const containerWidth = event.target.clientWidth;
    const scrollPosition = event.target.scrollLeft;

    // Calculate the current image index based on the scroll position and container width
    const newImageIndex = Math.round(scrollPosition / containerWidth);

    if (newImageIndex !== activeImageIndex) {
      setActiveImageIndex(newImageIndex);
    }
  }


  return (
    <>
    <Header />
    <img src='./upper_right.svg' id='upper_right' />
    <img src='./stars.svg' id='stars1' />
    <img src='./stars.svg' id='stars2' />
    <div id='portfolio-container'>
      <h1>{screenshots[activeImageIndex].name.split('.')[0]}</h1>
      <div id='project-handler'>
        <img className='project-nav' src='/left.svg' onClick={scrollLeft} />
        <div id='project-container' ref={scrollContainerRef} onScroll={handleScroll} >
          {screenshots.map((el, i) => (
            <div
              className="image-with-overlay"
              key={i}
              style={{
                scrollSnapAlign: 'start',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box', // Make sure padding doesn't affect the wrapper's dimensions
              }}
            >
              <img
                src={'/' + el.name}
                style={{
                  minWidth: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                }}
              />

              <a href={el.site}>
                <img
                  src="/link.svg"
                  className="centered-image"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </a>

            </div>
          ))}
        </div>
        <img className='project-nav' src='/right.svg' onClick={scrollRight} />
      </div>
    </div>
    <Footer />
    </>
  )
};

export default Portfolio;
