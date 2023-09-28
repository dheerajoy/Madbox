import React from 'react'
import image from '../ourstory/story.avif'

import "../ourstory/ourstory.scss"

  const Ourstory = () => {
    return (
      <div id='section5' className="story">
        <div id='tag' data-aos="fade-up"  data-aos-duration="2000">
          <p>Our <br></br>Story</p>  
        </div>
        <div>
          
          <img id="ourStory" src={image}/>
          
        </div>
      </div>
    )
  }

export default Ourstory