import React , {useEffect} from 'react';
import video from '../assets/firstvideo.mp4'


import Header from './Header/Header';
import Headroom from 'react-headroom';
import Data from './cards/Data';
import VideoCarousel from './videoCarousel/VideoCarousel';
import Gallery from './gallery/Gallery';
import Rating from './rating/Rating';
import Values from './ourValues/Values';
import Play from './playGame/Play';
import Powerben from './power/Powerben';
import Ourstory from './ourstory/Ourstory';
import Footer from './fixedFooter/Footer'
import NavFooter from './stickyFooter/NavFooter';    


import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

  return (
    <>

    <Headroom   className="headroom" 
        style={{transition: 'box-shadow 0.9s ease ',}} >
        <Header/>
    </Headroom>

    <div data-aos="zoom-in" className='home1'>
        <video id='firstVid' src={video} autoPlay loop muted />
        <div className="vtext">
          <span>Unleash Your Creativity!</span>
        </div>
    </div>

        
    <div id='section1' className="career">
        <div data-aos="fade-up"  data-aos-duration="200"  className="bigtext">
            <p> A Casually</p>
            <p> Mad Career</p>
        </div>
        <div data-aos="fade-up"   data-aos-duration="300" className="smalltext">
            <p>Come and join a talented team of passionate game makers.</p>
        </div>
    </div>


    <Data/>

    <div id='section2' className="insideMadBox">
        <div data-aos="fade-up"  data-aos-duration="500"  className="bigtext">
            <p>Inside</p>
            <p>MADBOX</p>
        </div>
        <div data-aos="fade-up"  data-aos-duration="700" className="smalltext">
            <p>What they think about working at Madbox and what their </p>
            <p>days look like</p>
        </div>
    </div>


    <VideoCarousel/>

    <Gallery/>

    <Rating/>

    <div id='section3' className="ourvalues">
        <div data-aos="fade-up"  data-aos-duration="500" className="bigtext">
            <p>Our Values</p>
        </div>
        <div data-aos="fade-up"  data-aos-duration="700" className="smalltext">
            <p>We believe that in order to make the best games, you need </p>
            <p>to empower the best people to unleash their creativity.</p>
        </div>
    </div>

    <Values/>

    <Play/>

    <div id='section4' className="powerup">
        <div data-aos="fade-up"  data-aos-duration="500" className="bigtext">
            <p>Power up with</p>
            <p>Benefits.</p>
        </div>
        <div data-aos="fade-up"  data-aos-duration="700" className="smalltext">
            <p>We offer benefits that embrace work life balance so that you can take </p>
            <p>full advantage of being at the best place to make games.</p>
        </div>
    </div>

    <Powerben/>

    <Ourstory/>

    <div className='discover'>
        <div className='ourStoryContent'>
          <p id='osContent'>
          Your adventure at Madbox starts with being a team that shares in the journey, together. Through achievements and failures, you will overcome challenges and shape the bonds of those around you.
          </p>
        </div>
        <button className='discoverBtn'>Discover</button>
    </div>

    <div className="enterMadLife">
        <div data-aos="fade-up"  data-aos-duration="600" className="bigtext">
            <p>Enter the</p>
            <p>Mad Life</p>
        </div>
        <div data-aos="fade-up"  data-aos-duration="800" className="smalltext">
            <p>Hot off the presses, our blog aims to provide a deeper look into the </p>
            <p>creativity and passion we have at Madbox.</p>
        </div>
    </div>

    <div className='seeMore'>
        <button className='seeMoreBtn'><p>See more</p></button>
    </div>

    
    <Footer/>


    <NavFooter/>

   </>
  )
}

export default Home;