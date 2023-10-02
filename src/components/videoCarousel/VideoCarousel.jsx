

import React, { useState, useEffect } from 'react';
import '../videoCarousel/videocarousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import first from '../videoCarousel/pics/1.png';
import second from '../videoCarousel/pics/2.png';
import third from '../videoCarousel/pics/3.png';
import four from '../videoCarousel/pics/4.png';
import five from '../videoCarousel/pics/5.png';
import six from '../videoCarousel/pics/6.png';

function App() {
  const [videoCarousel] = useState([
    {
      id: 1,
      description: '“Help the team get in the best conditions to create the best games”',
      name: 'Arthur',
      role: 'Producer',
      Img: second,
    },
    {
      id: 2,
      description:'“Make our games discovered by millions”',
      name: 'Adrien',
      role: 'Game Performance Manager',
      Img: first,
    },
    {
      id: 3,
      description: '"I love to create my own characters and universes”',
      name: 'Simon',
      role: 'Game Artist',
      Img: third,
    },
    {
      id: 4,
      description: '"We work on remaking some bootleg version of our games for ad purposes.”',
      name: 'Ossama',
      role: 'Playable Developer',
      Img: five,
    },
    {
      id: 5,
      description: '"People should be passionate about what they do ”',
      name: 'Thomas Nivol',
      role: 'Head of people',
      Img: four,
    },
    {
      id: 6,
      description: '“Go beyond your limits and careness”',
      name: 'Xixi',
      role: 'Legal',
      Img: six,
    },
  ]);

  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth > 1440
      ? 4
      : window.innerWidth > 1070
      ? 3
      : window.innerWidth > 600
      ? 2
      : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth > 1440
          ? 4
          : window.innerWidth > 1070
          ? 3
          : window.innerWidth > 600
          ? 2
          : 1
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const [focusedCard, setFocusedCard] = useState(-1);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setFocusedCard(newIndex);
  };

  useEffect(() => {
    setFocusedCard(0);
  }, []);

   return (
    <div className="video-Carousel">
      <Slider {...settings} beforeChange={handleBeforeChange}>
        {videoCarousel.map((item, index) => (
        <div
        key={item.id}
        className={`card-vid ${
        focusedCard === index ? 'focused-card' : index === 0 ? 'first-card' : ''
        }`}>
          <div className="card-top">
            <img src={item.Img} alt={item.name} />
          </div>
          <div className="card-bottom">
            <h3 className={index === 0 && focusedCard !== index ? 'reduced-opacity' : ''}>
            {item.description}
            </h3>
            <p id="names" className={`name-${item.name.toLowerCase()} name ${index === 0 && focusedCard !== index ? 'reduced-opacity' : ''} `}>
            {item.name}
            </p>
            <p className={`role ${index === 0 && focusedCard !== index ? 'reduced-opacity' : ''}`}>
            {item.role}
            </p>
          </div>
        </div>
    ))}  
      </Slider>
  </div>
  );
}

export default App;
